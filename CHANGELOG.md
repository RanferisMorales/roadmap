# Changelog

All notable changes to this project. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) loosely; dates are when the corresponding GitHub Pages deploy went live.

The roadmap is a single-file static HTML app (`roadmap_v3.html`). Versions are deploy-tagged rather than semver because there's no API to break.

---

## 2026-05 — Honest fixes to misleading intro content (PUSH 27)

User caught 9 misleading or awkward bullets across the 4 intro cards. All fixed.

### Fixed
1. **NO card — "3-month bootcamp" self-contradiction.** Old: "Bootcamp mode compresses to 12-24 weeks ... not 3 months" (12 weeks IS 3 months). New: "this is longer and deeper" — full stop.
2. **NO card — OpenAI bullet had a YES-side feature mention.** Removed "Voyage AI for embeddings" from inside the NO disqualifier. Now just: "this roadmap is Claude-only by design".
3. **NO card — "this builds from the ground up" awkward marketing-speak.** Rewrote to state the actual disqualifier: "Want to skip the fundamentals (programming, web, backend) and start at AI".
4. **NO card — accountability bullet had self-promotional second half.** Removed "self-discipline still required even with the built-in trackers" — that's not a disqualifier.
5. **YES card — "no guarantee" disclaimer.** Removed from the headline bullet; the amber 2026 reality callout already covers it honestly.
6. **WHAT IS card — "2026-current" jargon.** Now: "Up to date for 2026".
7. **WHAT IS card — "Production-aware ... builds are MVPs" awkward conjunction.** Rewrote: "Covers production patterns — System Design, DevOps, Security, Observability. (Example builds are MVPs, not production-grade systems.)" Clear separation of concept-coverage vs. example-builds.
8. **WHAT IS card — "Self-teaching with a built-in..." reads weird.** Restored "Built for self-teaching" prefix for clarity.
9. **WARN card — "Open AI Tutor early" was a feature highlight, not a warning.** Removed; the AI Tutor has its own dedicated callout right below the grid.

### Tests
251/251 still passing. No new tests needed (pure copy edits with no API changes).

---

## 2026-05 — Trim & reorganize intro (PUSH 26)

User feedback: "lots of misleading and unnecessary words; the yellow Fundamentals button doesn't belong there."

### Removed
- **Standalone Fundamentals Callout block** (the yellow expandable `<details>` with 8 category cards). Redundant: the **🧭 Fundamentals (168) pill** at the top of the intro jump row already opens the same Compass in one click. Dropped the HTML, the JS hook, the CSS, and the obsolete tests.
- **Misleading "(see the 168 required topics →)" parenthetical** inside the "Not for you" card. The bullet now reads cleanly: "Want to skip <strong>fundamentals</strong> and jump straight to AI — this builds from the ground up."
- **Duplicate "Is This Roadmap For You?" card** from the How-to-Use section. It was a verbose restating of the YES/NO/MAYBE info already in the 4-card grid above.
- **Misplaced postscript** "📱 Mobile dev and 🧪 Data Science / ML research are available as elective stages 9+10" — was at the bottom of the "Not for you" card (wrong place; electives are an opt-in EXTENSION, not a "not for you"). The "What this is" card already mentions "11 stages (9 core + 2 electives: 📱 Mobile, 🧪 Data Science/ML)".
- **Redundant "Honest about timelines" bullet** from the "What this is" card. The personalized YES line + the amber 2026 reality callout already cover timelines.

### Changed (tightened)
- **YES card**: 6 bullets, ~30% shorter. Removed filler ("over endless 'choose your own adventure' tutorials" → "instead of option-shopping"; "Are okay being self-directed (no instructor will check on you)" → "Are OK being self-directed").
- **NO card**: 6 bullets, ~25% shorter. Each bullet states the disqualifier directly; explanations cut to essentials.
- **WHAT IS card**: 8 bullets (was 9). Tighter wording throughout.
- **WARN card** ("If you do nothing else"): 4 bullets, slightly tightened.
- **Time Commitment** (in How-to-Use): 10 bullets → 5. Kept the load-bearing info (ideal/realistic range, hours/week oscillation reality, parallel job hunt, electives add on top, don't rush/drag).

### Tests
251/251 passing. Updated 3 PUSH 14 tests + 3 PUSH 7 tests to reflect the removed callout. Updated 1 OpenAI-guard test regex to match the new tightened "Not for you" bullet wording.

---

## 2026-05 — Per-stage / per-topic / per-build AI integrations (PUSH 25)

User picked all 4. All shipped. Core helper `aiAskWithPrompt(prompt, persona)` opens the AI Instructor, switches persona, fills the input, and submits.

### Added
- **🎓 Ask AI button** inside the topic modal header. Click → AI Tutor opens with a pre-built prompt referencing the current topic's name, stage, description, and "why it matters". Auto-switches to Tutor persona.
- **🤖 AI Quiz button** on every stage band. Click → AI generates 5 scenario-style quiz questions covering that stage's topics, then grades your answers with explanations. Switches to Interviewer persona.
- **✓ AI Readiness button** on stages with exit criteria. Click → AI asks one focused question per exit-criterion and gives an honest verdict at the end (ready / needs work on X / not ready). Interviewer persona.
- **🤖 AI review my code button** inside every Build detail view. Click → prompts you to paste your implementation, then AI does a line-by-line review against the Build spec (correctness / security / perf / readability / missed requirements). Switches to Code Reviewer persona.

### Tests
257/257 passing (10 new PUSH 25 + 247 pre-existing). Bonus: PUSH 24's persona system gets exercised end-to-end through these new entry points.

---

## 2026-05 — AI Instructor: search, export, star, personas (PUSH 24)

User picked all 4 upgrades. All shipped.

### Added
- **🎓 Persona dropdown** in the AI header. 4 presets:
  - **🎓 Tutor** (default) — Socratic, matches your level, explains intuitively
  - **👯 Pair Programmer** — bias toward writing code with you, proposes next steps
  - **🎤 Interviewer** — probing technical questions, digs into details, brief honest assessment after 5-7 Qs
  - **🔍 Code Reviewer** — line-by-line review, severity-tagged findings, one paragraph on what you did well
  Switching persona drops a small system note into the chat so you know the change happened.
- **🔍 Search** button — opens a search modal that finds substring matches across the current chat AND all archived sessions. Each result shows session label, role, snippet with highlight, and a "Load this session →" button if it's archived.
- **⬇ Export** button — downloads the current chat as a Markdown file (`roadmap-chat-YYYY-MM-DD.md`) with persona + model metadata, role-tagged sections, timestamps, and ⭐-marked starred messages.
- **⭐ Star** icon on every assistant message — click to bookmark good explanations. **"⭐ Starred view"** (linked from the search modal) shows all starred messages across all sessions, full-rendered, with "Load this session" links.

### Tests
247/247 passing (12 new PUSH 24 + 235 pre-existing).

---

## 2026-05 — AI Instructor: chat history & sessions (PUSH 23)

User asked: "with the AI instructor I should be able to see my old chats."

### Added
- **Multi-session chat history.** Current chat lives in `state.aiInstructor.history`; archived past chats live in new `state.aiInstructor.sessions` array.
- **+ New chat** button in the AI Instructor header — archives the current chat (auto-titled from first user message), clears history, starts fresh.
- **📜 History (N)** button — opens a picker modal listing every archived session with **↩ Load** (restores into current chat) and **🗑** (permanently delete) actions per row. Counter shows total archived.
- **Sessions are capped at 50** newest-first to keep localStorage manageable. Auto-title is truncated to 60 chars.
- Sessions persist across reloads (lives in the same JSON localStorage blob that's already backed up + restored by the Backup feature).

### Changed
- Old 🗑 Clear button moved into Settings (was top-level header). New chat is now the primary way to "reset" — keeps history instead of destroying it.

### Tests
235/235 passing (9 new PUSH 23 + 226 pre-existing).

---

## 2026-05 — Privacy / not-shareable (PUSH 22)

User asked: "make sure the roadmap is not shareable." Audit + three concrete changes (with honest documentation of one limitation that code alone cannot fix).

### Added
- **🔒 Device passphrase (lock gate, opt-in).** Settings in Backup modal lets you set a passphrase. Once set, opening this page on this device shows a lock screen until the passphrase is entered. SHA-256(salt + passphrase) is stored in localStorage — never the passphrase itself.
  - **Set / Change / Remove** flows all require entering the current passphrase (except initial set).
  - **"Wipe local data & reset"** button on the lock screen — escape hatch if you forget the passphrase (deletes ALL roadmap data on this device).
  - Honest limitation: this is **client-side gating**. Anyone with DevTools can bypass by clearing localStorage. Prevents casual access, not a determined attacker.
- **🛡 Encrypted backup export (Web Crypto: PBKDF2 + AES-GCM).** New primary export option in the Backup modal. PBKDF2 250k iterations → AES-256-GCM. Without the passphrase, the file is useless. Import detects the `__encrypted` marker and prompts for the passphrase.
  - Three export tiers visible side-by-side: **🛡 Encrypted** (recommended), **🔐 Plain key-scrubbed** (safe to share but no key included), **⚠ Plain WITH key** (gated by confirm; only for transferring to your own device).

### Removed
- **QR cross-device transfer** retired. Reason: a generated QR is line-of-sight observable — anyone glancing at your screen could photograph it. Use encrypted JSON export instead. Removed the `qrcode-generator` CDN script and the `renderBackupQR` function entirely. One less external dependency = one less supply-chain attack surface.

### Documented
- **URL privacy honest disclosure** added to the Backup modal: "This site URL is public. The lock gate above prevents casual use, but anyone can still View Source on the static HTML. For true URL privacy, fork the repo, set it to Private on GitHub, enable Pages on private repos (requires GitHub Pro ~$4/mo), and use the new URL."

### Tests
7 new PUSH 22 tests covering: QR fully gone, 3-tier backup UI, encryption round-trip, wrong-passphrase rejection, lock verify round-trip, lock gate shows on next load, no JS errors.

---

## 2026-05 — Security hardening (PUSH 21)

User asked: "how do we avoid the Anthropic key from being compromised? Is the whole roadmap built safely?" Honest audit found 2 real risks. Both fixed in this push.

### Fixed
- **HIGH: Backup export was including the API key in plaintext.** If you ever uploaded your `roadmap-backup.json` to Google Drive / shared it with a "back this up for me" friend / put it in a public bug report, your key was in there. Fixed:
  - Default export now **scrubs the key** and emits an `apiKeyScrubbed: true` flag in the JSON.
  - Backup modal shows two buttons: **🔐 Download (key scrubbed) — safe to share** (default, big primary button) vs **⚠ Download WITH API key (less safe)** (gated by a `confirm()` warning + filename suffix `-WITH-KEY.json` so you can tell at a glance).
  - The unsafe export filename is suffixed so you can visually tell which file contains a key without opening it.
- **MEDIUM: 2 CDN scripts (marked@12, qrcode@1.4.4) had no SRI integrity hashes.** A compromised jsdelivr edge could have served malicious code with full DOM + localStorage access (including the API key). Fixed:
  - Added `integrity="sha384-..."` + `crossorigin="anonymous"` to both `<script>` tags.
  - Browser now refuses to execute either script unless its bytes match the pinned SHA-384 hash. CDN compromise blocked.

### Already in place (audit summary, no changes needed)
- HTTPS-only (GitHub Pages forces it)
- Origin-scoped localStorage (only this domain can read the key)
- Direct browser → `api.anthropic.com` (no proxy in between to log keys)
- Zero backend = no server-side attack surface
- No analytics / tracking
- Pinned dependency versions
- `escapeHtml()` used throughout for rendering user-controlled strings

### Known residual risks (inherent to BYO-key model)
- Plaintext in localStorage — anyone with DevTools access on your browser can read it. Mitigated by "this is your machine; if someone else is on it, log them out first."
- Self-XSS via markdown notes — if you paste malicious markdown into your own notes, it can run in your browser. Self-only impact.
- API key persists across sessions — closing browser does not clear it. Use the **Settings → Remove key** button when on a shared device.

### Tests
219/219 passing (5 new PUSH 21 security tests + updated 1 existing backup test to match the new safe-by-default UI).

---

## 2026-05 — Surface the AI Tutor (PUSH 20)

### Changed
- **🎓 AI Tutor pill** added to the intro jump row (alongside Skip to roadmap / How to study / Fundamentals / What's new). One click from anywhere at the top of the page.
- **New AI Tutor explainer callout** in the intro section above the 2026 reality callout. Three columns:
  - **How it works** — BYO Anthropic API key, lives only in your browser, paste once chat forever
  - **What it costs** — $0.50-2/hr, $5 ≈ 6-12 hrs, Anthropic gives $5 free credits on signup, live cost shown in chat
  - **What it can do** — 6 quick actions: Explain / Quiz me / I'm stuck / Plan my week / Help debug / Motivation; plus free-form chat
- Big "Open AI Tutor →" CTA button in the callout opens the instructor directly.

### Why
User feedback: the AI Tutor was 3 clicks deep (More → Learn → 🎓 AI Instructor → Setup screen). For something positioned as a self-taught learner's "instructor replacement," that's too buried. Now it's a single click from the top of the home page, with an explainer that answers "what is this / what does it cost / what can it do" before you click in.

### Tests
214/214 still passing (one flaky timeout retry on a notes journal test — passes in isolation, not related to this change).

---

## 2026-05 — Entry Criteria audit + intro reorg + stale counts (PUSH 19)

### Changed
- **All 11 stages' Entry Criteria now include time + cost expectations.** Previously only listed "what to know before starting"; now also tells you ⏱ how long this stage takes and 💰 what it costs (free, or specific dollar ranges for API credits / store fees / cloud GPU / Apple Dev / etc).
- **Stage 1 entry criteria** explicitly flags it as "the BIG learning stage" — covers Python AND JavaScript AND DSA AND CS basics, ~240 focused hours.
- **Stage 5/6 entry criteria** now warn about Anthropic + Voyage AI costs ($5-50 to complete with experiments).
- **Stage 9 entry criteria** lists Apple Developer ($99/yr) + Google Play ($25 one-time) costs.
- **Stage 10 entry criteria** lists cloud GPU costs ($10-50 for fine-tuning if Kaggle/Colab free GPUs aren't enough).
- **Intro reorganization**: pulled the "2026 reality" footnote OUT of the YES card (it was making the card unbalanced vs the others) into its own standalone amber callout below the 4-card grid. More visible AND keeps the 4 cards balanced.
- **Stale build count fixed in 4 places**: "11 full step-by-step Build guides" → "15" (matches actual count after PUSH 8 added the RN Habit Tracker and Sentiment Classifier).
- Static pre-rendered HTML regenerated.

### Tests
214/214 still passing.

---

## 2026-05 — Honesty pass: misleading-content fixes (PUSH 17)

### Changed
Per user audit request: identified and rewrote 4 specific claims that overstated certainty for the 2026 junior market.

- **YES card line "employable in 2026+"** → "targeting Full Stack + AI Engineer roles in 2026+ (no employment guarantee — see Stage 8 market reality)". Removes the implied promise.
- **New 2026 reality footnote** in the YES card: "Time-to-content is 21-29mo; time-to-first-offer adds 3-12 months in the current junior market (AI tooling has compressed entry-level hiring; expect 100+ applications, portfolio rounds, referrals required)". Reframes the existing timeline calc as time-to-content, not time-to-job.
- **"Production-focused"** → "Production-aware — covers System Design, DevOps, Security, Observability. (Builds are MVPs you'll harden on a real job — not turnkey production code.)" Stops over-promising about what 13-15 builds deliver.
- **AI Instructor setup screen** now opens with an explicit cost block: "$0.50-2.00/hr of tutor use on Claude Sonnet; $5 ≈ 6-12 hours; Anthropic gives $5 free credits on signup; live cost shown in chat header so you never get surprised." Removes the friction of "wait, what is this going to cost me?"
- **Salary calculator intro** now warns: baseline numbers are 2024 data; 2026 junior market has compressed entry-level offers ~10-20% in many regions; verify on levels.fyi before negotiating.

### Audit deliverable
Full strong/weak/realistic/comparison audit was produced in conversation (vs roadmap.sh, Odin Project, freeCodeCamp, Codecademy, Boot.dev, Scrimba). AI Instructor architecture + security analysis documented. Static pre-rendered HTML regenerated to match.

### Tests
214/214 still passing. Pure copy + CSS additions, no API/behavior changes.

---

## 2026-05 — Topic modal redesign with tabs (PUSH 16)

### Changed
- **Topic modal now has 3 tabs: 📖 Learn · 🧠 Drill · 🎮 Practice.** Each tab shows only one section group at a time:
  - **📖 Learn** (default on open) — what it is · why it matters · resources
  - **🧠 Drill** — key terms (with a count badge on the tab) and a flashcards hint
  - **🎮 Practice** — practice resources (badge) + difficulty rating + notes
- **Key Terms section is now collapsible** (`<details>` open by default) inside the Drill tab.
- **Tab badges** show live counts of terms and practice resources for each topic — at a glance you see "🧠 Drill 5" and "🎮 Practice 3" before clicking in.
- **Primary resource emphasis**: the `req`-tier "primary" resource for each topic now gets a "🚀 Start here" badge and accent-colored border. Alt and ref resources get standard styling. Picking what to read first takes one glance instead of three.
- Modal resets to the Learn tab on every open, with focus management preserved.

### Tests
214/214 passing (7 new PUSH 16 + 207 pre-existing). Updated 8 pre-existing tests that referenced sections now living inside specific tabs (notes, difficulty stars, key terms section, practices section, role="tab" selectors scoped to practice modal).

---

## 2026-05 — Topic reorder for prerequisite flow (PUSH 15)

### Changed
Reordered topics in 4 high-impact branches where the original sequence didn't match the actual prerequisite chain:

- **Stage 1 / JavaScript** — moved **Closures & Scope** before Promises (closures explain how async callbacks capture variables; Promises make 10× more sense after closures click).
- **Stage 1 / Python** — moved **Comprehensions & Iterators** before OOP (comprehensions are everyday syntax; OOP is heavier conceptually and used less often by beginners).
- **Stage 4 / Auth** — moved **Password Hashing** before JWT/Session Auth (you can't implement login correctly without knowing how to store passwords first).
- **Stage 7 / DevOps Fundamentals** — reordered Linux → SSH → DNS → HTTPS → Nginx (SSH is the access prerequisite, DNS is the domain prerequisite, HTTPS depends on DNS, Nginx config depends on all the above).

Other branches I checked but left alone because the current order was already correct: Stage 5 LLM Basics (tokens foundation → economics → context → model), Stage 6 RAG Pipeline (load → chunk → retrieve → eval), Stage 6 Embeddings & Vectors (foundation → variants), and most of Stage 1 (Python core, CS Basics, DSA all already in good order).

Static pre-rendered HTML regenerated to reflect the new order.

### Tests
207/207 still passing. No new test spec — the dynamic render reads DATA in array order, so reordering is purely a data change with no API surface to test.

---

## 2026-05 — Intro trim (PUSH 14)

### Changed
- **Intro cards more compact**: padding 14×16 → 10×12, h3 17→15.5, li 15→13.5. Roughly 25% less vertical space without losing any content.
- **🧭 Fundamentals Callout is now collapsible** (`<details>`, collapsed by default). The summary row (title + "See all 168 →" CTA) stays visible; the 8 category cards expand on click. "See all 168" still opens the Study Guide directly without expanding.
- **Sticky "↓ Jump to Stage 0" pill** added — fixed bottom-right of the viewport. Hidden by default, fades in once the user scrolls past the intro, hides again at the bottom of the page. One click from anywhere → smooth-scrolls to stage-cluster-0.
- How-to-Use auto-collapse for returning visitors was already in place (verified, no change needed).

### Why
Intro felt long before reaching the roadmap. PUSH 14 keeps every word of content but reduces vertical bloat: tighter cards + collapsible Fundamentals Callout + a permanent "skip to roadmap" escape hatch.

### Tests
207/207 passing (8 new PUSH 14 + 199 pre-existing). Updated 1 pre-existing PUSH 7 test to open the collapsible callout before clicking inside it.

---

## 2026-05 — More-menu organization (PUSH 13)

### Changed
- **More menu: 20 → 15 entries.** Consolidated 8 entries into 3 launchers:
  - **🎯 Quiz Me** — bundles Definitions Quiz + Stage Concept Quiz + Random Interview (3 → 1)
  - **⚙ Utilities** — bundles My Resources + Backup/Restore + First-visit Tour (3 → 1)
  - **📊 Accountability & Schedule** — Schedule planner is now a button inside Accountability (2 → 1)
- Same drill-down UX pattern as Career Toolkit. Each launcher opens a 3-card picker; clicking a card opens the underlying tool.

### Why
Per user feedback that the menu still felt crowded after PUSH 6 trim. Grouping related tools under intent-based launchers (quiz me / plan & track / utilities) makes the menu scannable at a glance while preserving every existing feature.

### Tests
199/199 passing (6 new PUSH 13 + 193 pre-existing). Updated 3 pre-existing tests to use the new navigation paths (Tour, Stage Quiz, Definitions Quiz).

---

## 2026-05 — Skill Graph fixes (PUSH 12)

### Fixed
- **SVG was being CSS-stretched to 100% container width**, fighting the JS-computed `width` attribute. Result: wide stages (Stage 1 with 8 branches) were horizontally compressed instead of properly scrolling. Now `min-width: 100%` lets it fill small viewports but expand for content.
- **Tooltip jumped off-target whenever the graph was scrolled.** Handler was using `clientX - rect.left` to position an `absolute`-positioned tooltip inside a scrolling container — missing the `scrollLeft/scrollTop` offset. Tooltip now tracks the cursor correctly even on a scrolled graph.
- **Compact mode hid labels but kept the same huge spacing.** Now compact actually compacts: band height 220 → 140, column width 130 → 70, row spacing 28 → 18. Toggling triggers a re-render so layout adapts immediately.
- **Stage labels in the graph did nothing on click.** They tried `getElementById('stage-N')` which doesn't exist; fallback scrolled to the first topic instead of the band header. Each `.stage-cluster` now has `id="stage-cluster-N"` + `data-stage-id` — labels jump cleanly to the right place.
- **Toolbar wrapped badly on narrow screens.** Added a 640px breakpoint: search input goes full-width, pills tighten up, labels stack.
- **Filter pill checkboxes could double-toggle** in some browsers (hidden checkbox inside the clickable label). Disabled the inner input from event flow + added `stopPropagation` on the label handler.

### Tests
193/193 passing (7 new PUSH 12 tests + 186 pre-existing).

---

## 2026-05 — Flashcards 50× coverage (PUSH 11)

### Changed
- **Auto-generate flashcards from TERMS data.** Before: only 10 topics had hand-written starter cards (23 total cards, 3.8% coverage). Now: every topic with a TERMS entry (251 of 266 = 94.4%) automatically gets up to 5 flashcards generated from its term/definition pairs.
- **~1,096 flashcards available** across the roadmap (was 23). 48× increase.
- **Hand-written cards preserved.** The 10 special topics with curated "understanding" cards (terminal, git, cs-internet, cs-memory, cs-concurrency, py-syntax, html, css-fundamentals, ts-basics, react-hooks) still use their hand-written deeper questions instead of auto-generated definition drills.
- **Auto-gen prioritizes req-tier terms** over rec/opt/alt (sort key is tier weight). Cap of 5 cards per topic to avoid overwhelming the daily review.
- `ensureFlashcards(stageId, topicId)` now falls back to `TERMS[stageId:topicId]` when no STARTER_CARDS exist for a topic.
- `openFlashcards()` now materializes the auto-generated decks alongside the hand-written ones.

### Why this works
Every term entry already has the shape of a flashcard: `name` (front: "Define: X") + `def` (back). 1,161 terms across the roadmap were sitting unused for spaced-repetition study — they're now ALL available.

### Tests
186/186 passing (5 new PUSH 11 tests + 181 pre-existing).

---

## 2026-05 — Link enrichment (PUSH 10)

### Changed
- **Enriched all 25 single-link topics with 2 additional curated resources each.** Previously every topic had ≥1 link, but 25 topics had only the bare-minimum primary doc. Now every topic has at least 2-3 resources (primary doc + tutorial/practice/video alternative).
  - Stage 0: `wsl`
  - Stage 3: `ts-utility`, `next-actions`, `next-routes`
  - Stage 4: `fastify`, `redis-queues`, `sqli`
  - Stage 5: `model-selection`, `prompt-templates`, `streaming`, `cost-tracking`, `json-mode`, `tool-use`
  - Stage 6: `qdrant`, `agent-loop`, `langchain`
  - Stage 7: `prompt-versioning`, `vercel`, `aws-basics`, `rate-limit`
  - Stage 8: `cover-letters`, `take-home`, `linkedin`, `remote-vs-office`, `startup-vs-bigtech`
- **Total links: 637 → 687** (+50, all hand-picked).
- **Avg per topic: 2.39 → 2.58.**
- **Zero topics now have only 1 link.** Histogram: 138 topics with 2 links, 103 with 3 links, 23 with 4 links, 2 with 5 links.
- Stats footer + intro count updated to reflect 687 links.
- Static pre-rendered HTML regenerated to match.

---

## 2026-05 — Audit fixes (PUSH 9)

### Changed
- **Merged duplicate "System Design Interviews" topics.** Stage 7's `sd-interviews` (rec, in System Design branch) and Stage 8's `sd-interview-prep` (req, in Interview Prep branch) covered substantially the same content. Kept the Stage 8 version (req tier, more links) and enriched it with the unique link from Stage 7 (Tech Interview Handbook). Removed the Stage 7 duplicate from DATA, TERMS, and static HTML.
- **Topic count: 267 → 266** (stats line in intro updated).
- **Static pre-rendered HTML regenerated from live DATA.** Static was 56 topics behind (211 vs 267 = before merge). Now matches dynamic 1:1 (266/266 topics, 58/58 branches, 11/11 stages). Fixes SEO + no-JS fallback. Regeneration script lives at `scripts/regenerate-static.mjs` and uses Playwright to extract the rendered `#roadmap` innerHTML — run on demand whenever DATA changes.

### Audit results (no action needed)
- 0 duplicate topic IDs
- 0 duplicate topic names (exact match)
- 3 near-duplicate name pairs, of which 2 are intentional (Variables/Types across Python+JS; Responsive Design vs Testing it) and 1 was the System Design overlap we just merged.
- All branch badge counts match actual topic counts (verified against user-reported screenshot of CS Basics=6, Python=7, JavaScript=5, CLI & Git=7).
- Intro stats now accurate: 266 topics, 638 curated links, 58 branches, 11 stages.

---

## 2026-05 — Nice-to-haves (PUSH 8)

### Added
- **🔨 Build: React Native Habit Tracker** (Stage 9 — Mobile). 9 step-by-step instructions covering Expo scaffold, AsyncStorage data layer, FlatList vs ScrollView, daily push notifications, GitHub-style streak heatmap, EAS Build, TestFlight + Play Internal Track shipping, and OTA updates via EAS Update.
- **🔨 Build: Sentiment Classifier — sklearn → HuggingFace** (Stage 10 — DS/ML). 8 step-by-step instructions covering env setup with uv, IMDb dataset exploration, TF-IDF + LogisticRegression baseline, DistilBERT fine-tuning, honest baseline-vs-deep-learning comparison, model saving/loading, Hugging Face Hub publishing, and writing the portfolio post.
- **2 new Build categories** — `Mobile` and `Data Science / ML` filter pills in the Builds modal. Total builds: 13 → 15.
- **👥 Contextual mentor CTAs** on Stages 4, 5, 6 — directly inside the stage band, surfaced exactly where they matter most (backend plateau, LLM field churn, eval rigor). Each links to free options (Reactiflux, Anthropic Discord, OSS) AND paid 1-on-1 (Codementor, MentorCruise) so cost isn't a blocker.
- **Link-rot CI** — `scripts/check-links.mjs` + `.github/workflows/link-check.yml` in the deploy repo. Runs weekly, probes every external link, opens (or updates) a GitHub issue labeled `link-rot` if anything's broken. Excludes known bot-protected hosts (Stack Overflow, Cloudflare, LinkedIn, etc.) to avoid false positives.

### Skipped (with reason)
- **Server-side backup** — would require a backend or token-storage step that breaks the single-file no-credentials privacy model. localStorage + manual 💾 Backup/Restore remains the right tradeoff.
- **Stages 9-10 depth boost** — audit revealed they're already at parity (100% TERMS coverage, 2.7 avg links per topic vs 2.0-2.1 for Stages 5-7). No real gap.

### Tests
181/181 passing (8 new PUSH 8 tests + 173 pre-existing).

---

## 2026-05 — Fundamentals visibility (PUSH 7)

### Added
- **🧭 Fundamentals (168) pill** in the intro pill row — direct one-click access to the Fundamentals Compass tab. No more modal-diving.
- **Fundamentals Callout** block in the intro section (right after the Yes/No/What/Warn grid) — visible proof of the "builds from the ground up" promise. Lists 8 fundamental categories with sample topics + where in the roadmap they live: CS Basics, Programming Fundamentals (Python+JS), Math & Logic, DSA, Learning Skills, Web Fundamentals, Backend Fundamentals, Production Fundamentals.
- **Clickable "fundamentals" word** in the "Not for you, if you" card — the exact line that says "Want to skip fundamentals and jump straight to AI" now has the word linked to the Compass, plus a "see the 168 required topics →" inline link.

### Why
The intro was promising "builds from the ground up" but the proof was buried 3 clicks deep in the Study Guide → Fundamentals Compass tab. PUSH 7 makes the proof visible inline. Zero learning content added or removed — purely making existing content discoverable.

---

## 2026-05 — Trim & Focus (UI consolidation, zero learning content removed)

### Changed
- **More menu: 23 → 19 entries**. Surface-area trim without removing features:
  - **💼 Career Toolkit** — single entry that opens a launcher with the 3 end-of-roadmap generators (Salary / Resume Bullets / LinkedIn Post). Each underlying tool unchanged; just one less ambient entry.
  - **📊 All-time spend (Cost Tracker)** — moved out of More menu and into the **🎓 AI Instructor** header, where the data being tracked is actually generated. Contextual placement.
  - **🖨 Print** (header button) — removed. The actually-used print is **Bootcamp Print** inside the Bootcamp modal — that one stays.
- "Built-in Tools" howto card refreshed to match the new layout.

### Rationale
Nothing in the learning material (267 topics / 638 links / 1,200+ glossary terms / 13 builds / 11 stages of TERMS) was touched. Only consolidated UI features whose menu real estate exceeded their per-use value.

---

## 2026-05 — Study Guide

### Added
- **📋 How to Work Each Phase** modal — new top-level feature accessible from a pill at the top of the intro AND from the More menu (Learn group). Three tabs:
  - **Study Method (per stage)** — for each of the 11 stages: the daily/weekly *loop*, the *anti-pattern* that kills learners in this stage, and the minimum *exit signal* that proves you can move on.
  - **🧭 Fundamentals Compass** — every `req`-tier topic across the entire roadmap, grouped by stage, derived live from DATA. Click any to open its modal. Answers "if I only learn the absolute fundamentals, what are they?"
  - **📖 General Method** — 8 universal patterns: daily/weekly study structure, how to use Key Terms, when-stuck escalation ladder, what the 4 tiers actually mean.

### Changed
- More menu count: 22 → 23 (added "📋 How to Study" at top of Learn group).
- Intro jump-row now has 3 pills: Skip-to-roadmap / How-to-study / What's-new.

---

## 2026-05 — Polish pass

### Added
- **LICENSE** (MIT) — repo is now legally usable.
- **Stage Concept Quizzes** for Stage 0, 9, 10 (previously only 1-8).
- **A11y re-audit** of all new components (AI Instructor, Bootcamp, Definitions Quiz, Stage Quiz, First-visit Tour, Search palette): focus traps, ARIA labels on icon-only buttons, keyboard-only navigation.
- **CHANGELOG.md** itself.
- **TERMS for ~60 previously-missing topics** across Stages 3, 6, 7, 8, 9, 10. Glossary entries: ~1,200+ total.

---

## 2026-05 — "All 13" batch

### Added (PUSH 1)
- **First-visit Tour** — 6-step walkthrough modal, auto-shown after completed onboarding, re-openable from More menu.
- **"✨ What's new"** pill above the intro with a recent-changes modal.
- **"↓ Skip to roadmap"** anchor link at top of intro.
- **README.md** + **DEPLOY.md** rewritten to reflect current state.

### Changed (PUSH 1)
- 4-card intro grid (callout merged into the grid as a 4th "warn" card).
- How-to-Use auto-collapses for returning users (those with profile set).

### Added (PUSH 2)
- **🔎 Global Search Palette** (Cmd/Ctrl+K) — searches across topics, key terms, acronyms, builds, and practice resources simultaneously. Arrow-key navigation, Enter opens.
- **🧠 Stage Concept Quiz** — scenario-based reasoning questions per stage, distinct from the term-recall Definitions Quiz.
- **🖨 Bootcamp Print** — printable week-by-week schedule.

### Added (PUSH 3)
- ~185 new TERMS across Math Fundamentals (Stage 1), SQL (Stage 4), LLM basics (Stage 5), Mobile (Stage 9), DS/ML (Stage 10).
- **🔨 Browser Extension build guide** (Manifest V3 / Plasmo, 8 steps).
- **🔨 CLI Tool build guide** (Bun + Commander, 9 steps).
- Mobile breakpoint (640px) for all recent components.

### Changed (PUSH 3)
- Init split into critical / interactive / idle phases for better first-paint.
- Glossary auto-scan deferred to 200ms (was 50ms).

---

## 2026-05 — Reorg pass

### Added
- More menu grouped into 4 labeled sections: **Learn / Plan & Track / Build & Career / Tools**.
- Today's Focus pill now has 🏫 Week-plan + 📊 Log-hours cross-links.
- Footer "auto-saves" copy is now a link to Backup/Restore.

### Changed
- Bootcamp vs Schedule disambiguated in their button labels.
- "Trading Bots" → "Trading / Finance" in Builds catalog (less bot-heavy framing).
- Elective hour estimates added to Time Commitment copy.

---

## 2026-05 — Intro refresh

### Changed
- "Not for you, if you" no longer says mobile or DS are missing — they're now electives.
- "What this is" card lists AI Instructor, Bootcamp, Accountability, Builds, Definitions Quiz.
- Footer + stats reflect current counts (267 topics, 638 links, 853 glossary entries).

### Added
- "Built-in Tools" card in How-to-Use surfacing all 22 More-menu features.

---

## 2026-04 — Mobile + DS/ML + Fundamentals + Definitions Quiz

### Added
- **Stage 9 — Mobile Development (Elective)**: 17 topics across Mobile Foundations, React Native, Mobile-Specific Features, Distribution.
- **Stage 10 — Data Science / ML Research (Elective)**: 23 topics across DS Foundations, Visualization, Classical ML, Deep Learning, Production ML, Research Track.
- **Math & Logic Fundamentals branch in Stage 1**: 7 topics — Boolean logic, sets, statistics, probability, discrete math, Polya problem-solving, Fermi estimation.
- **📝 Definitions Quiz** — 4-choice multiple-choice over the glossary. Per-stage / per-tier / acronyms-only categories. High-score tracking.

### Removed
- All OpenAI references — roadmap is now Anthropic Claude exclusive. Voyage AI replaces OpenAI text-embedding-3 for embeddings.

---

## 2026-04 — AI Instructor + Accountability

### Added
- **🎓 AI Instructor** — in-browser chat with Claude as a personal tutor. User-provided Anthropic API key stored only in localStorage. Streaming via SSE, system-prompt aware of current topic + profile state. 6 quick-action buttons.
- **📊 Accountability** — daily commitment hours, hour tracker, 7-day calendar, weekly check-ins with mood, streak counter for consecutive days meeting goal.

---

## 2026-03 — Stage 3 content expansion

### Added
- **🔨 Builds section** — 11 full step-by-step project guides with copy-paste code: portfolio site, REST API (Hono + Prisma), full-stack SaaS starter, AI chatbot, RAG app, crypto/stock/DCA/grid/sentiment/arbitrage trading bots.

---

## 2026-03 — Stage 2 content expansion

### Added
- **Per-topic Practice section** in every topic modal (52 topics covered).
- **🎮 Practice Hub** in More menu — 60+ curated practice resources grouped by skill (LeetCode, Frontend Mentor, PortSwigger, Anthropic Cookbook, HuggingFace MCP Course, etc.).
- **TERMS for Stages 3 (React/Next/TS) and 5 (LLM)** — ~150 new term definitions.

---

## 2026-03 — Skill graph rebuild + 8 new 2026 topics

### Added
- **TanStack Query** (Stage 3, req), **Zustand/Jotai** (Stage 3, rec) — modern React server-state and global-state libraries.
- **tRPC** (Stage 4, rec) — end-to-end type-safe API.
- **Gemini / Groq / Mistral** (Stage 5, rec) — non-Anthropic LLM provider alternatives (later removed when OpenAI was deprecated).
- **OpenRouter** (Stage 5, rec) — unified provider gateway.
- **Weaviate** (Stage 6, alt) — open-source vector DB with hybrid search.
- **DSPy** (Stage 6, rec) — Stanford's "programming, not prompting" framework.
- **Outlines** (Stage 6, opt) — constrained-generation library.

### Changed
- **🕸 Skill Graph completely rebuilt** — replaced force-directed clump with a layered DAG: 9+ stage bands stacked top-to-bottom, deterministic positions, branches as columns, tier-encoded shapes, click opens topic modal, filter toolbar (tier / status / search / compact).
- Removed 250KB `d3` CDN dependency — new graph uses plain SVG.
- Init now `render()`s from DATA at load so new topics added to DATA pick up automatically.

---

## 2026-03 — Accuracy fix pass (20 fixes)

### Changed
- Timeline reframed: "16-25 months ideal, 24-36 realistic" everywhere (was "16-25 months" only).
- Stage 1 exit: "NeetCode 150 Easy + 10 Medium" → "~50 mixed, then 2-3/wk".
- Stage 4 desc: "the hardest stage" → "one of the hardest".
- Stage 7 widened: 10-14 weeks → 14-20 weeks · 420-600 hrs.
- Continued Learning: tier `rec` → `req`.
- Express: tier `alt` → `rec` (with "learn after Hono" framing).
- Vercel AI SDK renamed `(after raw APIs)` with prereq note.
- Free resources line nuanced — mentions strategic paid subs save 100+ hrs.

### Added
- Top-of-page yellow callout: "If you do nothing else, find a mentor / GitHub-presence-early / continuous DSA".
- New Stage 1 branch **Learning Skills** with 3 req topics: How to Read Docs, Asking for Help Productively, Reading Stack Traces Calmly.
- 4 new Stage 8 reality-check topics: 2025-2026 junior market, portfolio differentiation, first-job year 1, when to specialize.
- Stage 0 exit: 5-line Python+JS+git smoke test.

---

## 2026-02 — Glossary system

### Added
- **Per-topic Key Terms** section in every topic modal. Required/recommended filter pills.
- **📚 Global Glossary** completely upgraded: sticky A-Z letter index, 374 entries (was 72 acronyms), "from Stage X / Topic Name" origin badges, live search.
- **314 new concept-term definitions** across Stages 0, 1, 2 (HTML/CSS/JS).

---

## Earlier (2025-2026)

The original 25 interactive features (Phases 1-5), accessibility pass (Phase 6), and project acceptance criteria (Phase 7) — see the "Historical" appendix in README.md for the full build log.

---

[Live URL](https://ranferismorales.github.io/roadmap/) · [GitHub](https://github.com/RanferisMorales/roadmap)
