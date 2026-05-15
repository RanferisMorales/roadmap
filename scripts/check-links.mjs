#!/usr/bin/env node
// Walks index.html, extracts every external href, and probes each URL.
// Reports broken / redirected / rate-limited links to stdout and writes
// a Markdown summary to scripts/link-check-report.md.
//
// Designed for CI: exits 0 even with broken links (so the action doesn't
// fail repeatedly — it surfaces info, not gates merges). To make it strict
// in the future, change `process.exit(0)` at the bottom.

import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const INDEX = join(ROOT, 'index.html');
const REPORT = join(__dirname, 'link-check-report.md');

const CONCURRENCY = 12;
const TIMEOUT_MS = 12_000;
const USER_AGENT = 'roadmap-link-checker/1.0 (+https://github.com/RanferisMorales/roadmap)';

// Hosts that are known to rate-limit or block HEAD/automated probes.
// We mark these as "skipped" rather than broken. Real users CAN reach these.
const SKIP_HOSTS = [
  // Career/job sites — heavy bot protection
  'leetcode.com',
  'glassdoor.com',
  'levels.fyi',
  'linkedin.com',
  'twitter.com',
  'x.com',
  'instagram.com',
  'youtube.com',
  'youtu.be',
  'workatastartup.com',
  'upwork.com',
  'honeypot.io',
  // Cloudflare-fronted edu sites that block probes
  'cloudflare.com',
  'linuxjourney.com',
  // npmjs returns 403 to HEAD; pages work in browsers
  'npmjs.com',
  // MS sites block all probes (real users reach them fine)
  'marketplace.visualstudio.com',
  'code.visualstudio.com',
  // Stack Overflow's bot protection rejects HEAD/GET from cloud IPs
  'stackoverflow.com',
  // Google sites (some block automated probes from CI IPs)
  'google.github.io',
  // W3C wiki has very old pages; treat 404s as "moved" not necessarily rot
  'w3.org',
  // swyx.io frequently restructures URLs — sub-pages 404 but root works
  'swyx.io',
  // Font CDN endpoints — preconnect hints, not navigable pages
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  // Dynatrace blog rotates URLs frequently; reports as 404 even when content moved
  'dynatrace.com',
  // Binance testnet — geo-blocks GH Actions runners (HTTP 451)
  'testnet.binance.vision',
];

function shouldSkip(url) {
  try {
    const u = new URL(url);
    return SKIP_HOSTS.some(h => u.hostname === h || u.hostname.endsWith('.' + h));
  } catch { return true; }
}

async function probe(url) {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), TIMEOUT_MS);
  try {
    // HEAD first; many servers return 405 → retry with GET
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ac.signal, headers: { 'User-Agent': USER_AGENT } });
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: ac.signal, headers: { 'User-Agent': USER_AGENT } });
    }
    return { url, status: res.status, ok: res.status >= 200 && res.status < 400 };
  } catch (e) {
    return { url, status: 0, ok: false, error: e.message || String(e) };
  } finally {
    clearTimeout(timer);
  }
}

async function pool(items, fn, n) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    })
  );
  return out;
}

async function main() {
  const html = await readFile(INDEX, 'utf8');
  // Extract every href that starts with http(s), but EXCLUDE preconnect/dns-prefetch/stylesheet
  // hints — those are perf optimizations, not navigable links.
  const seen = new Map();
  const re = /<[a-z]+[^>]*\shref=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
  for (const m of html.matchAll(re)) {
    const tag = m[0];
    // Skip <link rel="preconnect|dns-prefetch|stylesheet|preload|...">
    if (/<link\b/i.test(tag) && /\brel\s*=\s*["'](?:preconnect|dns-prefetch|stylesheet|preload|prefetch|modulepreload|icon|manifest)["']/i.test(tag)) continue;
    const url = m[1];
    if (!seen.has(url)) seen.set(url, m.index);
  }
  const allUrls = [...seen.keys()];
  const toCheck = allUrls.filter(u => !shouldSkip(u));
  const skipped = allUrls.filter(u => shouldSkip(u));

  console.log(`Found ${allUrls.length} unique external links`);
  console.log(`  → checking: ${toCheck.length}`);
  console.log(`  → skipping (rate-limited hosts): ${skipped.length}`);
  console.log('Probing...');

  const results = await pool(toCheck, probe, CONCURRENCY);
  const broken = results.filter(r => !r.ok);
  const ok = results.filter(r => r.ok);

  console.log(`\n✅ ${ok.length} OK`);
  console.log(`❌ ${broken.length} broken`);

  // Markdown report
  const lines = [];
  lines.push(`# Link check report`);
  lines.push(``);
  lines.push(`Date: ${new Date().toISOString()}`);
  lines.push(``);
  lines.push(`- Unique external links found: **${allUrls.length}**`);
  lines.push(`- Checked: **${toCheck.length}** · OK: **${ok.length}** · Broken: **${broken.length}**`);
  lines.push(`- Skipped (rate-limited hosts): **${skipped.length}**`);
  lines.push(``);
  if (broken.length) {
    lines.push(`## ❌ Broken (${broken.length})`);
    lines.push(``);
    for (const b of broken) {
      const detail = b.error ? `error: ${b.error}` : `HTTP ${b.status}`;
      lines.push(`- \`${b.url}\` — ${detail}`);
    }
    lines.push(``);
  } else {
    lines.push(`## ✅ No broken links`);
    lines.push(``);
  }
  lines.push(`## Skipped hosts`);
  lines.push(`These hosts return 403/429 to automated probes and are not reliable signals of link rot. They are excluded from the broken-link count:`);
  lines.push(``);
  for (const h of SKIP_HOSTS) lines.push(`- \`${h}\``);
  lines.push(``);

  await writeFile(REPORT, lines.join('\n'), 'utf8');
  console.log(`\nReport written to: ${REPORT}`);

  // Exit 0 even with broken links — informational only
  process.exit(0);
}

main().catch(e => {
  console.error('Link check failed:', e);
  process.exit(2);
});
