# Deploy notes — your live roadmap

## 🌐 Your live URL

**https://ranferismorales.github.io/roadmap/**

Bookmark it on every device you want to use the roadmap from. Works on phone, PC, tablet, anything with a browser.

## 📦 What's deployed

| Field | Value |
|---|---|
| GitHub repo | https://github.com/RanferisMorales/roadmap |
| Visibility | Public (required for free GitHub Pages) |
| Source branch | `main` |
| Source path | `/` (root) |
| Live URL | https://ranferismorales.github.io/roadmap/ |
| File served | `index.html` (a copy of `C:\Roadmap\roadmap_v3.html`) |

## 🏗 Local workspace

| Path | Purpose |
|---|---|
| `C:\Roadmap\roadmap_v3.html` | **Your source-of-truth file.** Edit this. |
| `C:\Roadmap\_deploy\` | Git workspace pointing at the GitHub repo. Don't edit files here directly — the update script handles it. |
| `C:\Roadmap\_deploy\index.html` | A copy of `roadmap_v3.html`. Gets overwritten on every deploy. |

## 🔄 How to push an update (when you change roadmap_v3.html)

From PowerShell or Git Bash in `C:\Roadmap`:

```bash
cp roadmap_v3.html _deploy/index.html && \
  cd _deploy && \
  git add index.html && \
  git commit -m "Update roadmap content" && \
  git push
```

Or as a one-liner:

```bash
cp roadmap_v3.html _deploy/index.html && cd _deploy && git add index.html && git commit -m "update" && git push && cd ..
```

GitHub Pages auto-rebuilds in **~30–60 seconds** after the push. Your live URL updates automatically.

You can also have me do it from inside Claude Code — just say *"push the latest to GitHub"*.

## 📱 Phone setup

1. Open Safari (iOS) or Chrome (Android)
2. Go to **https://ranferismorales.github.io/roadmap/**
3. Bookmark or "Add to Home Screen"
4. On first visit, the onboarding modal appears — same questions as on PC

**On iOS:** "Add to Home Screen" gives you an app-like icon. The page opens full-screen without the browser chrome. Best phone experience.

## 🔒 Privacy summary

| Data | Where it lives | Who can see it |
|---|---|---|
| The roadmap content (topics, links, terms, builds) | GitHub repo + Pages CDN | Anyone with the URL |
| Your progress, notes, projects, journal, accountability, bootcamp, AI Instructor chat history | `localStorage` in your browser (single key `roadmap-v2`) | Only you, on that device |
| Your name / email / IP | Not stored anywhere — neither in the file nor in localStorage | (GitHub Pages logs your IP when serving the file, like any web host) |
| **Your Anthropic API key** (if you use the AI Instructor feature) | `localStorage` only | Only you, on that device. Sent ONLY to `api.anthropic.com`, never anywhere else. Treat any JS in the page as able to read it, so don't paste untrusted code into DevTools |

The HTML itself contains zero personal data. Anyone who finds the URL sees a generic learning resource — they don't see your progress.

## 🧰 Current built-in tools

The roadmap is more than content — it's a self-teaching app. Features added since the original 25:

- **🎓 AI Instructor** — chat with Claude as a tutor (BYO Anthropic API key)
- **🏫 Bootcamp** — week-by-week structured curriculum (12/16/24/52/84 wk)
- **📊 Accountability** — daily commits + weekly check-ins + streak
- **📝 Definitions Quiz** — multiple-choice over the 853-entry glossary
- **🎮 Practice Hub** — 60+ curated practice resources
- **🔨 Builds** — 11 step-by-step project guides (portfolio, REST API, RAG app, 6 trading bots, etc.)
- **🕸 Skill Graph** — layered DAG view of all 267 topics
- **2 elective stages** — Mobile Dev (React Native), Data Science / ML Research

See the "✨ What's new" pill on the live URL for the full changelog.

## 🔁 Cross-device progress sync

**localStorage is per-device, per-browser.** Your phone and PC don't share progress automatically.

Two options:

### Manual sync via Backup feature (recommended)
1. On PC: open the roadmap → "More → 💾 Backup / Restore" → Download `roadmap-backup-YYYY-MM-DD.json`
2. Email/text/Drive that file to your phone
3. On phone: open the roadmap → same Backup modal → choose the file → Import
4. Reload, your progress is now mirrored

Reverse direction works the same way. The export is a single JSON file; import on any device with the same roadmap URL pulls in all 20 state namespaces.

### Single-device-primary (simpler)
Pick PC as your "main" device. Use the phone for read-only browsing — looking up topics, glancing at next steps. Don't try to mark things complete on phone. Saves you from the sync problem entirely.

## ⚠️ Things to know

- **First deploy may show GitHub's default README for ~60 seconds** before the actual page loads. After that the cache is fresh and you're good.
- **HTTPS is enforced** — clipboard, notifications, all the modern browser APIs work properly (these would fail on `file://`).
- **CDN dependencies** (marked.js, d3, qrcode-generator) still load from jsdelivr at runtime. They have graceful fallbacks if blocked.
- **Don't delete the `_deploy` folder** — it's the git workspace that lets you push updates. If you do delete it accidentally, re-create with `git clone https://github.com/RanferisMorales/roadmap.git _deploy`.

## 🛠 Repo settings you might want to tweak

- **Custom domain** (optional): If you own a domain like `roadmap.yourdomain.com`, GitHub Settings → Pages → Custom domain → add the CNAME record. Same site, fancier URL.
- **Private repo** (requires GitHub Pro, $4/month): If you'd rather the curriculum source not be public, upgrade and switch the repo to private. The live page stays at the same URL.
- **Disable Pages** if you ever want to take it down: GitHub repo → Settings → Pages → Source → None. URL stops serving immediately.

## 🔍 Verify the deploy worked

Run this anytime to confirm:

```bash
curl -sI https://ranferismorales.github.io/roadmap/ | head -1
# Expected: HTTP/2 200
```

Or just open the URL in any browser. If you see the onboarding modal pop up, it's working.
