# Roadmap v3 — Full Stack + AI Engineer self-teaching app

A single-file (no build step, no framework) HTML/CSS/JS application for self-teaching a Full Stack + AI Engineering curriculum. Deployed on GitHub Pages. State lives in your browser's localStorage; nothing is sent anywhere except the Anthropic API when you use the optional AI Instructor.

**Live URL:** https://ranferismorales.github.io/roadmap/

## Current state (mid-2026)

| Aspect | Count |
|---|---|
| Stages | 11 (9 core + 2 electives) |
| Branches | 58 |
| Topics | 267 |
| Curated links | 638 |
| Glossary entries | **853** (72 acronyms + 781 per-topic concept terms) |
| Topics with curated practice resources | 52 |
| Full step-by-step Build guides | 11 |
| Tests passing | 134/134 |
| File size | ~1 MB (one HTML file, no dependencies at build time) |

### The 9 core stages

| ID | Stage | Duration |
|---|---|---|
| 0 | Environment Setup | 3 days |
| 1 | Programming Fundamentals + Math & Logic | 10–16 weeks |
| 2 | Web Fundamentals | 6–10 weeks |
| 3 | Frontend — TypeScript, React, Next.js | 10–14 weeks |
| 4 | Backend — Node/Hono, Python/FastAPI, Postgres | 14–20 weeks |
| 5 | LLM Application Development (Claude-only) | 8–12 weeks |
| 6 | RAG, Vector DBs, Agents, MCP | 8–12 weeks |
| 7 | Production Engineering | 14–20 weeks |
| 8 | Job Hunt & Career | 6–10 weeks (parallel with 5-7) |

### The 2 elective stages

| ID | Stage | Duration |
|---|---|---|
| 9 | Mobile Development (React Native + Expo) | 8–12 weeks |
| 10 | Data Science / ML Research (PyTorch + HuggingFace) | 12–20 weeks |

## Built-in tools (More menu in the header)

The roadmap is NOT just a content reference. It's a self-teaching app with these built-in tools:

### Learn
- **🎓 AI Instructor** — Chat with Claude as your personal tutor. Uses your own Anthropic API key (stored only in localStorage). System prompt is roadmap-aware: knows your current topic, stage progress, profile. 6 quick-action buttons: explain, quiz me, I'm stuck, plan my week, help debug, motivation. Streams via SSE.
- **📚 Glossary** — 853-entry searchable A-Z view of every term defined in the roadmap. Per-topic key terms also shown inline in each topic modal.
- **📝 Definitions Quiz** — Multiple-choice drill over the glossary. Pick by stage / tier / acronyms-only. Per-category high-score tracking. Wrong answers shown for review.
- **🧠 Flashcards** — SM-2 spaced repetition. Add custom cards per topic.
- **🎮 Practice Hub** — 60+ curated practice platforms grouped by skill (LeetCode, Frontend Mentor, PortSwigger, Anthropic Cookbook, etc.) plus per-topic practice resources inside each modal.

### Plan & Track
- **🏫 Bootcamp** — Compresses the roadmap into a 12 / 16 / 24 / 52 / 84-week structured curriculum. Each week shows topics + practice + project + a "mark complete" button. Calendar view of all weeks. Hamilton-method allocator guarantees total weeks adds up exactly.
- **📅 Schedule** — Pure date math. Pick start date + hrs/week, get target completion dates per stage. Exports as ICS calendar.
- **📊 Accountability** — Daily commitment hours, hour tracker, 7-day calendar visualizer, weekly check-ins with mood, streak counter for consecutive days meeting goal.
- **🎯 Hard Topics** — Review of everything you rated 4-5 difficulty for re-study.

### Build & Career
- **🔨 Builds** — 11 full step-by-step project guides with copy-paste code:
  - Personal portfolio website · REST API (Hono + Prisma + Postgres) · Full-stack SaaS starter
  - AI chatbot (Next.js + Vercel AI SDK + Claude) · RAG app (chat with your docs)
  - Trading bots: Crypto (Binance) · Stock (Alpaca) · DCA · Grid · Sentiment-driven · Cross-exchange arbitrage
- **📁 My Portfolio** — Track projects you've built across stages. Markdown export for resume.
- **📄 Resume Bullets** — Auto-generates resume bullet points from your completed stages + projects.
- **📢 LinkedIn Post** — 3 variants for sharing milestones.
- **💼 Salary** — 2026 ranges by role × location, readiness % based on stage completion.
- **🎲 Random Interview** — Mock interview question randomizer with timer + audio recording.
- **💰 AI Spend** — Log paid LLM sessions. Auto-calculates cost from the 2026 pricing table (Anthropic Opus 4.7 / Sonnet 4.6 / Haiku 4.5, Voyage AI). Monthly budget alerts.

### Tools
- **🕸 Skill Graph** — Layered DAG of all 267 topics across 11 stage bands. Filter by tier (req/rec/opt/alt), status (all/open/done), search. Click any node to open the topic.
- **⭐ My Resources** — Resources you upvoted, grouped by stage.
- **💾 Backup / Restore** — Export all state as JSON; import on any device. QR code for small transfers.

## Per-topic features (inside any topic modal)

Every topic has:
- **What it is** — short definition
- **Why it matters** — the engineering rationale
- **Key Terms** — required + recommended definitions (153 topics have these — ~781 terms total)
- **Resources** — curated learning links (book / course / video / docs / tutorial / practice)
- **Practice** — games, challenges, projects (52 topics have these)
- **My difficulty** — 1-5 rating with retrospective-prompt UX
- **My notes** — markdown-supported, auto-saves
- **Flashcards button** — opens SM-2 drill for that topic if a deck exists

## Tech stack

- **Frontend**: vanilla HTML/CSS/JS (no React, no build step)
- **Storage**: browser localStorage (single key `roadmap-v2`, 23 namespaces)
- **External deps** (loaded async from jsdelivr, graceful fallback if blocked):
  - `marked` for markdown rendering in notes
  - `qrcode-generator` for the Backup QR feature
- **AI Instructor**: direct fetch to `api.anthropic.com` with `anthropic-dangerous-direct-browser-access: true` header. Uses the user's own API key, stored only in their browser
- **Test framework**: Playwright. 134 tests across 7 spec files
- **Deployment**: Static HTML to GitHub Pages (free)

## How to use

### As a learner
1. Visit https://ranferismorales.github.io/roadmap/
2. Complete the onboarding (or click Skip)
3. Click "✨ What's new" to see recent additions
4. Start with Stage 0 — Environment Setup
5. Optional: open **🏫 Bootcamp** in the More menu to get a week-by-week structured plan
6. Optional: open **🎓 AI Instructor** in the More menu (requires your own Anthropic API key) to chat with Claude as a tutor

### As a contributor / future-you maintaining it
- All content lives in `roadmap_v3.html`. There is no build step. Edit the file directly.
- Topic data lives in the `DATA` array (around line 7500). Each topic has `id`, `name`, `t` (tier: req/rec/opt/alt), `desc`, `why`, `links`.
- Per-topic terms live in the `TERMS` object. Key format: `'stageId:topicId'` → array of `{ name, def, t }`.
- Practice resources live in `PRACTICES` (per-topic) and `PRACTICE_HUB` (global grouped).
- Build guides live in `BUILDS`.
- Bootcamp duration map and path map are at the top of the Bootcamp section.
- Push changes via `cp roadmap_v3.html _deploy/index.html && cd _deploy && git commit -am '...' && git push` (see DEPLOY.md)
- Run tests with `npx playwright test`

## Test coverage

| Test file | Tests | Focus |
|---|---|---|
| `phase1.spec.js` | 70 | All 25 original features + skill graph + a11y |
| `stage1_terms.spec.js` | 9 | TERMS data + per-topic + global Glossary |
| `accuracy_fixes.spec.js` | 13 | Guards against re-regressing the 20 peer-review fixes |
| `stage2_practices.spec.js` | 8 | PRACTICES + Practice Hub |
| `stage3_builds.spec.js` | 8 | Builds catalog + detail view |
| `ai_accountability.spec.js` | 11 | AI Instructor (no real API call) + Accountability |
| `stage9_mobile_ds_defquiz.spec.js` | 9 | Stages 9/10 + Math Fundamentals + Definitions Quiz |
| `bootcamp_and_terms.spec.js` | 11 | Bootcamp allocator + dashboard + Stage 7/8 TERMS |
| **Total** | **134** | All pass |

---

## Historical: original 25 features (Phases 1-7) build log

### Phase 1 — onboarding / nav / focus / notes / settings

| # | Feature | Where to find it | localStorage key |
|---|---|---|---|
| **#20** | First-visit onboarding | Modal that opens on first load. Asks goal / skill level / time available. | `state.profile` |
| **#21** | Settings panel | "⚙ Settings" button in header. Font size, density, hide completed, hide optional, reduce animations, reset onboarding, reset all. | `state.settings` |
| **#12** | Today's Focus | Card above the roadmap. 3 next-up topics from your current stage. Click items to open. "Mark all done" batch-completes. Refreshes daily or after completing a focus topic. | `state.todaysFocus` |
| **#22** | Quick-jump nav | Floating circles right side (desktop) / bottom (mobile). Click or press `0`-`8`. Press `?` for help, `/` to focus search, `Esc` to close any modal. | (derived from progress) |
| **#23** | Per-topic notes | "my notes" section inside every topic modal. Markdown supported (via `marked` from CDN). Auto-saves on input (debounced 500ms). Pencil icon appears on topic cards with notes. | `state.notes['stageId::topicId']` |

### Phase 2 — pomodoro / journal / streak / deep linking

| # | Feature | Where to find it | localStorage key |
|---|---|---|---|
| **#19** | Deep linking | URL hash like `#s5/llm-basics/tokens` opens that exact topic on load. "🔗 Copy link" button inside every topic modal copies a shareable URL. Hash updates when modals open and clears when they close. | (URL only — no state) |
| **#8** | Streak tracker | "🔥 N" pill in header (click for heatmap). Auto-counts any state-changing action today (mark complete, save a note, journal entry, pomodoro completion). One automatic freeze per ISO week fills a single missed day so you don't lose your streak to a single off day. | `state.streak` |
| **#5** | Daily journal | "📓 Journal" button in header. Modal with date picker, "what I learned" + "what I'm stuck on" textareas, 1–5 mood emoji, search across all entries, export-as-Markdown, and a heatmap of all journaled days. | `state.journal[date]` |
| **#4** | Pomodoro timer | Floating "⏱ Focus" button (bottom-right desktop, above quick-jump on mobile). Click to open the timer modal. Classic 25-min focus / 5-min break / 15-min break every 4th cycle. Browser Notification on phase change (asks permission once). Time auto-credited to your current stage. **Survives page reload** — the timer keeps running. | `state.pomodoro`, `state.focusTime[stageId]` |

### Phase 3 — projects / costs / glossary / difficulty / votes

Phase 3 adds a "**⋯ More**" dropdown in the header to keep the chrome from getting overcrowded. Inside: Portfolio, AI Spend, Glossary, Hard Topics, My Resources.

| # | Feature | Where to find it | localStorage key |
|---|---|---|---|
| **#11** | Glossary tooltips | ~70 curated terms (RAG, MCP, JWT, ACID, CDN, …) auto-wrapped in the static HTML on load with hover tooltips. Dedicated browse modal under "More → 📚 Glossary" with search. Scan is capped at 400 wraps and skips `<a>`, `<code>`, buttons, etc. | (constant in JS, no per-user state) |
| **#24** | Difficulty rating | Rate any topic 1-5 inside its modal. After you mark a topic complete for the first time, a toast prompt slides up from the bottom asking "How hard was *X*?". "More → 🎯 Hard Topics" lists everything rated 4-5 for re-review. | `state.difficulty["stageId::topicId"]` |
| **#25** | Resource voting | 👍 / 👎 next to every resource link inside topic modals. Click again to clear. "More → ⭐ My Resources" groups your votes by stage. Purely personal — no aggregation across users. | `state.resourceVotes[url]` |
| **#3** | Project tracker | "+ Log a project for this stage" button on every stage's Exit Criteria card. Form: name, description, GitHub URL, live URL, completion date. "More → 📁 My Portfolio" shows every project across stages with Markdown export for your resume. | `state.projects[stageId]` |
| **#7** | AI cost tracker | "More → 💰 AI Spend". Log each paid LLM session — provider, model, input tokens, output tokens. Auto-calculates cost from the built-in 2026 pricing table (Anthropic Opus 4.7 / Sonnet 4.6 / Haiku 4.5, OpenAI GPT-4o / 4o-mini). Set a monthly budget and get a banner warning if you exceed it. | `state.costLog`, `state.budget.monthlyUsd` |

### Phase 4 — schedule / calendar / salary / interview / backup

| # | Feature | Where to find it | localStorage key |
|---|---|---|---|
| **#9** | Schedule generator | "More → 📅 Schedule". Form: start date, hrs/week, optional target completion. Outputs personalized stage-by-stage target dates using built-in `STAGE_HOURS` estimates (~2,116 hrs total). Per-stage banners ("📅 Target: 2026-09-11") inject directly under each stage title, turning red when overdue. | `state.schedule` |
| **#16** | Calendar export (.ics) | "Export .ics" button inside the Schedule modal. Generates an RFC 5545-compliant ICS file with one full-day event per stage milestone + one weekly recurring study block (Mon-Fri 18:00-21:00). Downloads via Blob URL. | (no state — derived from #9) |
| **#13** | Salary calculator | "More → 💼 Salary". Pick target role × target location and see a 2026 salary range, plus a readiness % bar based on hours weighted by stage completion. 4 roles × 6 locations with multipliers (Bay 1.4x, NYC 1.3x, Seattle 1.25x, Remote 1.0x, mid-US 0.85x, Western Europe 0.75x). Links to levels.fyi and Glassdoor for real data. | (stateless) |
| **#6** | Mock interview randomizer | "More → 🎲 Random Interview". Pulls 3 random questions from `MOCK_INTERVIEWS` for stages where you have ≥ 1 topic complete. Per-question 5-min countdown with warn coloring under 60s. Opt-in audio recording via `MediaRecorder` (requests mic on first click) with playback. History tracked to avoid repeating questions across sessions. | `state.interviewHistory` |
| **#17** | Backup / Restore (+ QR) | "More → 💾 Backup / Restore". Three sections: <br>• **Export** — downloads `roadmap-backup-YYYY-MM-DD.json` with all 19 state namespaces.<br>• **Import** — file picker; on import, missing namespaces are backfilled from defaults, then the page reloads.<br>• **QR transfer** — uses the qrcode-generator CDN library to render a scannable SVG QR code of the bare state JSON. Hard-capped at 2000 bytes; suggests file export for larger states. Falls back gracefully if CDN is blocked. | (no per-feature state — operates on all namespaces) |

### Phase 5 — sandbox / flashcards / graph / generators / PDF

| # | Feature | Where to find it | localStorage key |
|---|---|---|---|
| **#1** | In-page code sandbox | "💻 Try Code" button inside coding-topic modals (JS/TS/Python topics in stages 1, 3, 4). Opens StackBlitz iframe for JS/TS, Pyodide WASM REPL iframe for Python. Detection via branch name + topic name keywords. | (stateless — iframe lives in the modal only) |
| **#2** | SRS flashcards | "More → 🧠 Flashcards" for daily review across all decks, or "🧠 Flashcards" button inside a topic modal for topic-scoped review. SM-2 algorithm: ~30 starter cards across foundational topics; users can add their own (front/back) via the form at the bottom of the empty review screen. Grades 0-5 update each card's interval, repetitions, and easiness factor. | `state.flashcards`, `state.customFlashcards` |
| **#10** | Skill dependency graph | "More → 🕸 Skill Graph". Force-directed SVG of all 204 topics (~204 prereq edges) using `d3@7` from CDN. Click any node to highlight its full ancestor + descendant cone. Drag to reposition, scroll to zoom, click background to clear. Prereqs auto-derived: within a branch each topic depends on the previous one; first topic of each stage anchors to the last topic of the previous stage. Falls back to a flat stage list if d3 fails to load. | (stateless — derived from DATA) |
| **#14** | Resume bullet generator | "More → 📄 Resume Bullets". One STAR-style bullet per completed stage (≥70% done OR has a logged project), with `{{tokens}}` filled from your actual project names, completed branches, and profile. Editable inline before copying to clipboard. | (stateless — pulls from state.projects + state.topics) |
| **#15** | LinkedIn post generator | "More → 📢 LinkedIn Post". Fill in project name + stack + lesson + links, then pick a tone: 🚀 Ship announce, 💡 Lessons learned, 🙏 Asking for feedback. Each ~150 words, auto-includes relevant hashtags (#React, #NextJS, #TypeScript, etc.) inferred from the stack string. | (stateless) |
| **#18** | Stage-specific PDF export | "📄 Export PDF" button on every stage's action row. Adds `body.print-stage-only` + per-cluster `.print-stage-target` / `.no-print-stage` classes, opens the native browser print dialog (your OS lets you save as PDF). Auto-cleans up after print, even if cancelled. | (no state — uses print CSS) |

## localStorage shape

All state lives under one key, `roadmap-v2`, with a namespaced object:

```js
{
  // v2 existing
  topics:      { "0::terminal": true, ... },
  theme:       "light" | "dark",
  // Phase 1
  profile:     { goal, skill, time, completedAt } | { skipped: true, completedAt } | null,
  settings:    { fontSize, density, hideCompleted, hideOptional, reduceMotion },
  notes:       { "stageId::topicId": "markdown body" },
  todaysFocus: { date: "YYYY-MM-DD", stageId, items: [{stageId, topicId, name, t, branch}] } | null,
  // Phase 2
  focusTime:   { stageId: totalSeconds },
  pomodoro:    { startedAt, durationSec, kind: "focus"|"short"|"long", cyclesDone, stageId } | null,
  journal:     { "YYYY-MM-DD": { learned, stuck, mood: 1-5, updatedAt } },
  streak:      { days: { date: "active"|"freeze" }, current, best, lastDate, freezesAvailable, freezeWeekStart },
  // Phase 3
  projects:    { stageId: [{ id, name, githubUrl, liveUrl, desc, completedAt }] },
  costLog:     [{ id, provider, model, inputTokens, outputTokens, costUsd, project, date, note }],
  budget:      { monthlyUsd: number | null },
  difficulty:  { "stageId::topicId": 1-5 },
  resourceVotes: { url: 1 | -1 },
  // Phase 4
  schedule:    { startDate, hrsPerWeek, targetDate, stageTargets: { stageId: "YYYY-MM-DD" } } | null,
  interviewHistory: [{ id, qText, stageId, attemptedAt }],
  // Phase 5
  flashcards:  { "stageId::topicId": [{ id, front, back, interval, ef, reps, dueDate, lastGrade }] },
  customFlashcards: { "stageId::topicId": [...] }  // user-added cards
}
```

**v2 → v3 migration is automatic**: a saved state with only `{ topics, theme }` is read and the missing namespaces are backfilled from `DEFAULT_STATE` on load. No data loss across any phase.

## CDN dependencies (and fallbacks)

| Lib | Used by | Fallback if CDN fails |
|---|---|---|
| `marked@12` (jsdelivr) | #23 markdown preview | Plain-text rendering with `<br>` for newlines. Editor still works, only preview style is degraded. |
| `qrcode-generator@1.4.4` (jsdelivr) | #17 QR transfer | The "QR transfer" section is replaced with a "QR unavailable" message. Export/Import file flow still works. |
| `d3@7` (jsdelivr) | #10 Skill Graph force-directed layout | Falls back to a flat list-by-stage view with a "couldn't load d3" notice. |

The `<script>` tag uses `onerror="window.__markedFailed=true"` and `renderMarkdown()` checks both `window.marked` and that flag before parsing.

## Browser permissions

| Feature | Permission | Asked when |
|---|---|---|
| #4 Pomodoro notifications | `Notification` | First time you click "▶ Start Focus". Silently no-ops if denied. |
| #19 Copy link button | `clipboard-write` | First "🔗 Copy link" click. Falls back to `document.execCommand('copy')` via a hidden textarea if the modern API is blocked (e.g., on `file://` URLs). |
| #6 Interview audio recording | `microphone` (via `getUserMedia`) | Only requested when you click 🎤 Record on a question. Denied → friendly alert, the rest of the interview keeps working. Audio blobs stay in-memory only (never saved to localStorage). |
| #18 Stage PDF export | (none) | Uses native `window.print()` — your browser's print dialog handles save-as-PDF. No permission needed. |
| #1 Code sandbox (StackBlitz / Pyodide iframes) | (none — but third-party iframes load their own JS) | If your network blocks `stackblitz.com` or `pyodide.org`, the iframe will show their error page. Closing the modal leaves no state behind. |

## AI pricing table (#7)

Hardcoded in `AI_PRICING` near the cost-tracker code. Costs are USD per 1M tokens, input / output:

| Model | Input | Output |
|---|---|---|
| claude-opus-4-7 | $15.00 | $75.00 |
| claude-sonnet-4-6 | $3.00 | $15.00 |
| claude-haiku-4-5 | $1.00 | $5.00 |
| gpt-4o | $2.50 | $10.00 |
| gpt-4o-mini | $0.15 | $0.60 |

Update these in source when providers change prices. The formula is exact: `(inputTokens / 1_000_000) * input_price + (outputTokens / 1_000_000) * output_price`.

## Glossary (#11)

`GLOSSARY` is a const object with ~70 terms. The scan runs once on page load (50ms after INIT) and wraps each term's *first occurrence per element* in `<abbr class="glossary-term" data-def="...">`. Limits:

- **Cap**: ~400 total wraps (prevents big DOM thrash on long pages)
- **Skip selectors**: `script, style, a, button, abbr, code, pre, input, textarea, select, [data-no-glossary], .qj-dot, .modal-close, .tf-tag`
- **Sort order**: terms are matched longest-first (so `WSL2` wins over `WSL` if both appear)
- **Static-HTML safe**: wraps happen at runtime, not in the baked source — the pre-rendered HTML stays clean for no-JS viewers.

If you add or remove terms, just edit the `GLOSSARY` const — no re-bake needed since the scan happens client-side.

## Keyboard shortcuts (#22)

| Key | Action |
|---|---|
| `0` – `8` | Jump to that stage |
| `?` | Show shortcut help |
| `/` | Focus the search box |
| `Esc` | Close any open modal |

Shortcuts are ignored while typing in `<input>` or `<textarea>` (or any `contenteditable`) so you can write notes without scrolling away.

## Today's Focus algorithm

Currently uses **Variant A — required-first globally**. The function `pickTodaysFocus(stage)` in the JS source has two other variants (B: branch-by-branch, C: hybrid) commented out — uncomment the one you want and comment out the others if you'd like to switch.

```js
// In the script block, search for "ALGORITHM VARIANTS"
//   VARIANT A — Required-first globally  (active by default)
//   VARIANT B — Branch-by-branch
//   VARIANT C — Required globally, then recommended from current branch
```

The cached focus refreshes when:
- A new day starts
- Your current stage changes (i.e., you complete the previous stage)
- Any cached focus item gets marked complete elsewhere
- You click the "↻ Refresh" button

## Settings effects

| Setting | What it does |
|---|---|
| `fontSize` | Sets `html { font-size: 14/16/18px }` via `data-font-size` attribute |
| `density` | Compact reduces padding on container, header, stages |
| `hideCompleted` | CSS rule `[data-hide-completed="true"] .topic.complete { display: none }` |
| `hideOptional` | Hides all `.topic.opt` |
| `reduceMotion` | Globally disables transitions, animations, transforms |

All settings apply via attributes on `<html>` so they're picked up by CSS without re-rendering DOM.

## Deep linking URL conventions (#19)

```
#s5                              → scrolls to Stage 5
#s5/llm-basics                   → scrolls to Stage 5 (branch slug ignored if no third segment)
#s5/llm-basics/tokens            → opens the "tokens" topic modal in Stage 5
```

Branch slugs are derived from `branch.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`. Only the stage id and topic id are functionally required — the branch slug is purely cosmetic (and ignored on parse).

## Streak rules (#8)

| Event | Counts toward today's streak? |
|---|---|
| Mark a topic complete | ✅ |
| Save a note (non-empty) | ✅ |
| Write a journal entry (any field) | ✅ |
| Complete a pomodoro focus session | ✅ |
| Open the file with no activity | ❌ |
| Start a pomodoro but cancel it | ❌ |
| Toggle a setting | ❌ |

Freeze rules: 1 freeze per ISO week, auto-refilled on Monday. If you go *exactly 1 day* without activity and a freeze is available, the missed day gets backfilled with status `"freeze"` (shown blue in the heatmap) and your streak continues unbroken. Gaps of 2+ days reset to `current=1`.

## Pomodoro behavior (#4)

- 25 min focus → 5 min short break → 25 min focus → 5 min short break → ... after every **4** focus cycles, the break becomes 15 min.
- `state.pomodoro.startedAt` is a wall-clock timestamp, so the timer keeps running even if the user closes the tab and reopens it. On load, `initPomodoroOnLoad()` resumes the ticker and credits any elapsed time before the page was reopened.
- If the timer completed while the tab was closed, the next page load triggers `onPomodoroComplete()` immediately.
- Focus time is credited to whatever stage was `currentStage()` *when the session started*, even if the user finishes other topics during the 25 min.

## Static HTML pre-render

| Phase | Changed `renderRoadmap`? | Re-bake performed? |
|---|---|---|
| Phase 1 | no | no (byte-identical) |
| Phase 2 | no | no (byte-identical) |
| **Phase 3** | **yes** (added "+ Log a project" button on each Exit Criteria card) | **yes** — done via Playwright + Node script |
| **Phase 4** | **yes** (added `<div class="stage-schedule-slot">` placeholder under each stage title for #9 banners) | **yes** — same pattern. After bake the per-stage slots exist in static HTML; `applyScheduleBanners()` injects content into them at runtime. |
| **Phase 5** | **yes** (added "📄 Export PDF" button to each stage's `.stage-actions` row for #18) | **yes** — same pattern. 9 buttons baked into the static HTML so the action is discoverable even before JS loads. |

The re-bake script lives inline in the README's "How I re-baked Phase 3" sequence below — and is also the same pattern you'd use in Phase 4+.

### Re-bake recipe

```bash
# 1. Start a local HTTP server (file:// is blocked in Playwright)
npx http-server -p 8765 -s --cors &

# 2. In the browser via Playwright, force a clean render() and dump #roadmap + #milestones innerHTML
#    (the existing project does this with mcp__plugin_playwright_playwright__browser_evaluate)

# 3. Use this Node script to splice the new HTML back into the source between
#    "<div id=\"roadmap\">" and "</div>\n\n  <!-- MILESTONES"
#    and between "<div class=\"milestones\" id=\"milestones\">" and "</div>\n\n  <footer"
```

After re-baking, every viewer (including no-JS ones) sees the new buttons in the static fallback.

## Running the tests

```bash
cd C:/Roadmap
npm init -y
npm i -D @playwright/test
npx playwright install chromium

# In one terminal:
npx http-server -p 8765 -s --cors

# In another:
npx playwright test tests/phase1.spec.js --reporter=list
```

The test script covers:
- State namespacing & v2 forward-compat
- Onboarding happy-path + skip path + no-reshow after completion
- Today's Focus rendering, auto-update on completion, batch "mark all done"
- Settings segmented controls + toggles + persistence across reload
- Quick-jump dot count, keyboard navigation, modal-aware key gating
- Notes save/load/preview/empty-clears-indicator
- Mobile viewport (412×915)
- Dark theme color verification

## Known limitations (Phase 1)

- **No keyboard nav for option focus**: onboarding/settings work with mouse only. (Tab navigation works but selection state via keyboard isn't styled.)
- **Notes don't sync between browser tabs**: opening the same topic in two tabs and editing notes in both will let the last-saved tab win on next focus.
- **Today's Focus regenerates on completion**: if you complete a focus topic, the next refresh picks a new replacement. Some users might prefer "show the original 3 even after completion." If so, change `cacheValid` in `refreshTodaysFocus` to drop the `every(it => !isComplete(...))` check.
- **`marked` is loaded unconditionally** even for users who never open a topic modal. Could be lazy-loaded later for a small footprint win.

## Curriculum coverage

| | Count |
|---|---|
| Stages | 9 (Stage 0 – Stage 8) |
| Milestones | 8 |
| Branches | 46 |
| **Topics** | **204** total — 130 required · 57 recommended · 10 optional · 7 alternative |
| **Resource links** | **460** curated |
| Stages with reference implementations | 9 / 9 |
| Stages with entry/exit/pitfalls/project ideas | 9 / 9 |
| Stages with quizzes | 8 / 9 (Stage 0 N/A — toolchain install) |
| Stages with mock interviews | 8 / 9 (same) |

### 2026 currency pass

After the initial build, four topics were added to keep the curriculum current for 2026-era Full Stack + AI engineering:

| Stage | Branch | Topic | Why it matters |
|---|---|---|---|
| 5 | Provider APIs | **Prompt Caching** | 90% input-token cost reduction. Single biggest cost lever in agentic apps. |
| 5 | Provider APIs | **Multi-modal (Vision)** | Standard since 2024 on Claude 4.x and GPT-4o. Receipt OCR, screenshot debugging, UI analysis. |
| 7 | Deployment | **Feature Flags** | Industry standard for safe rollouts. Decouples deploy from release. |
| 4 | Node Backend | **File Uploads & Blob Storage** | Every real app needs this. R2/S3 + presigned URLs is the right pattern. |

## Stage hour estimates (#9 / #13)

The `STAGE_HOURS` const drives both the Schedule generator and the Salary calculator's readiness percentage:

| Stage | Hours | Source |
|---|---|---|
| 0 | 16 | "3 days" at ~5 hrs/day |
| 1 | 240 | "8 weeks" at 30 hrs/week |
| 2 | 180 | "6 weeks" at 30 hrs/week |
| 3 | 360 | "12 weeks" at 30 hrs/week |
| 4 | 360 | "12 weeks" at 30 hrs/week |
| 5 | 300 | "10 weeks" at 30 hrs/week |
| 6 | 300 | "10 weeks" at 30 hrs/week |
| 7 | 240 | "8 weeks" at 30 hrs/week |
| 8 | 120 | "4 weeks" at 30 hrs/week (job hunt) |
| **Total** | **2,116 hrs** | Matches the roadmap's "~16-25 months at 30 hrs/week" framing |

Edit these in source if your own hours-per-stage assumptions differ.

## File sizes

| | uncompressed | gzipped |
|---|---|---|
| v2 (original) | 461 KB | ~110 KB |
| v3 (Phase 1, 5 features) | 495 KB | 102 KB |
| v3 (Phase 1 + 2, 9 features) | 525 KB | 111 KB |
| v3 (Phase 1 + 2 + 3, 14 features) | 570 KB | 124 KB |
| v3 (Phase 1 + 2 + 3 + 4, 19 features) | 602 KB | 131 KB |
| v3 (Phases 1-5, 25 features) | 648 KB | 144 KB |
| v3 (Phases 1-6, +a11y) | 679 KB | 149 KB |
| v3 (Phases 1-7, **+project criteria**) | **787 KB** | **167 KB** |

Comfortably under the original targets (< 1 MB / < 300 KB gzipped).

## All 25 features — index

| # | Feature | Phase | Entry point |
|---|---|---|---|
| 1 | In-page code sandbox | 5 | "💻 Try Code" in coding-topic modals |
| 2 | SRS flashcards | 5 | More → 🧠 Flashcards · or 🧠 button in topic modal |
| 3 | Project tracker | 3 | "+ Log a project" on each stage's Exit Criteria; More → 📁 My Portfolio |
| 4 | Pomodoro timer | 2 | Floating ⏱ Focus button |
| 5 | Daily journal | 2 | Header 📓 Journal button |
| 6 | Interview randomizer | 4 | More → 🎲 Random Interview |
| 7 | AI cost tracker | 3 | More → 💰 AI Spend |
| 8 | Streak tracker | 2 | Header 🔥 pill |
| 9 | Schedule generator | 4 | More → 📅 Schedule (also per-stage banners) |
| 10 | Skill dependency graph | 5 | More → 🕸 Skill Graph |
| 11 | Glossary tooltips | 3 | Hover any underlined acronym; More → 📚 Glossary |
| 12 | Today's Focus | 1 | Card above the roadmap |
| 13 | Salary calculator | 4 | More → 💼 Salary |
| 14 | Resume bullets | 5 | More → 📄 Resume Bullets |
| 15 | LinkedIn post generator | 5 | More → 📢 LinkedIn Post |
| 16 | Calendar (.ics) export | 4 | "Export .ics" inside Schedule modal |
| 17 | Backup / restore (+QR) | 4 | More → 💾 Backup / Restore |
| 18 | Stage PDF export | 5 | "📄 Export PDF" on each stage |
| 19 | Deep linking | 2 | URL hash `#s5/branch/topic`; 🔗 Copy link in modal |
| 20 | First-visit onboarding | 1 | Auto-opens on first load |
| 21 | Settings panel | 1 | Header ⚙ Settings button |
| 22 | Quick-jump nav | 1 | Floating numbered dots · keys 0-8 |
| 23 | Per-topic notes | 1 | "my notes" section inside topic modal |
| 24 | Difficulty rating | 3 | Stars in modal · auto-prompt after first completion · More → 🎯 Hard Topics |
| 25 | Resource voting | 3 | 👍/👎 next to each resource · More → ⭐ My Resources |

## Project layout

```
C:\Roadmap\
├── roadmap_v2_1778716591.html    Original (untouched)
├── roadmap_v3.html               All 25 features, baked static HTML
├── README.md                     This file
└── tests\
    └── phase1.spec.js            ~60 Playwright tests across all phases
```

## Running the test suite

```bash
cd C:/Roadmap
npm init -y
npm i -D @playwright/test
npx playwright install chromium

# In one terminal:
npx http-server -p 8765 -s --cors

# In another:
npx playwright test tests/phase1.spec.js --reporter=list
```

Tests cover:
- State namespacing (all 19 keys), v2 forward-compat
- Each feature's happy path + at least one persistence-across-reload check
- Mobile viewport (412px) for layout-critical features
- Dark theme color verification
- Pricing math for #7, SM-2 math for #2, salary multipliers for #13, ICS structure for #16
- Graceful CDN failure paths (degraded modes for marked / qrcode / d3)

## Where to tune in source

- `STAGE_HOURS` — re-weight the schedule (#9) and salary readiness (#13)
- `AI_PRICING` — update LLM costs as providers change prices (#7)
- `SALARY_ROLES` / `SALARY_LOCATIONS` — adjust ranges/multipliers (#13)
- `STARTER_CARDS` — add or edit SRS card content (#2)
- `RESUME_TEMPLATES` — change the auto-generated bullet shape (#14)
- `GLOSSARY` — add/remove tooltip terms (#11)
- `pickTodaysFocus()` — A/B/C algorithm variants for "what to study next" (#12)

Everything else flows from `DATA` (the existing v2 topic structure), so no per-feature data files to maintain.

## Accessibility (Phase 6)

All modal dialogs and clickable divs are now keyboard-navigable and screen-reader friendly.

### What's implemented

**Modal focus management** — every overlay (topic modal, practice modal, onboarding) saves the previously-focused element on open, moves focus into the modal, traps Tab cycling inside, and restores focus on close. The implementation lives in three small helpers:
- `saveAndMoveFocusInto(container)` — called by each open*() function
- `restoreFocus()` — called by each close*() function
- `handleFocusTrap(e)` — global Tab handler that wraps last→first and first→last

**ARIA roles & properties:**
- `role="dialog" aria-modal="true" aria-labelledby="..."` on `#overlay`, `#practiceModal`, `#onbOverlay`
- `aria-hidden` toggled on open/close (proper screen-reader state)
- `role="status" aria-live="polite"` on dynamic indicators (`#noteStatus`, `#journalStatus`)
- `aria-pressed` on toggleable buttons (vote 👍/👎, note Edit/Preview)
- `aria-current="step"` on the current-stage quick-jump dot
- `aria-label` on every icon-only button (streak pill, Pomodoro fab, qj-help, qj-dots, copy-link, flashcards, try-code, vote-btns, modal-close)

**Keyboard-activate clickable divs** — `.topic`, `.tf-item`, `.fc-review-card`, `.diff-review-item`, `.journal-result` all have `role="button" tabindex="0"` and respond to **Enter** or **Space** via a single global keydown handler:

```js
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  if (e.target.getAttribute('role') === 'button' && e.target.tabIndex === 0) {
    e.preventDefault();
    e.target.click();
  }
});
```

This pattern means any future clickable div just needs `role="button" tabindex="0"` to become keyboard-accessible.

**ESC unwinding** — pressing Escape closes (in priority order): difficulty prompt → onboarding overlay → practice modal → topic modal. Existing keyboard shortcuts (`0-8` jump, `/` search, `?` help) still work and are gated when typing in inputs.

**`prefers-reduced-motion: reduce`** — system preference automatically disables transitions, animations, and smooth-scroll. Independent of the in-app "Reduce animations" toggle (#21 Settings), so either source can opt out.

**`:focus-visible`** — keyboard focus rings (3px accent-color outline) on every focusable element. Mouse clicks don't trigger the ring; only keyboard navigation does, so the visual is targeted.

### Tested keyboard flow

1. Open file → onboarding modal opens, focus lands on the first "What's your goal?" option.
2. Tab through options, Enter to select, Tab to "Next →", Enter.
3. After onboarding: Tab cycles through header buttons → quick-jump dots → search → topics → stages.
4. Focus a `.topic` card → press Enter (or Space) → modal opens, focus moves to the first interactive element inside.
5. Tab through modal: cycles within the dialog (focus trap).
6. ESC → modal closes, focus restored to the original `.topic` card.

The full sequence above is automated in the Phase 6 Playwright test, verifying every step including the focus restore.

### WCAG 2.1 AA coverage

All 5 known gaps from the first a11y pass are now closed:

| Item | Status | Details |
|---|---|---|
| Color contrast | ✅ Fixed | Light-mode `--text-mute` darkened from `#888880` (3.36:1, failed AA) to `#5e5e58` (**6.15:1**). Dark mode kept at `#888880` on `#14141a` (~5:1, already passing). |
| Reduce motion on d3 graph | ✅ Fixed | When `state.settings.reduceMotion` or OS `prefers-reduced-motion` is set, the force simulation runs synchronously (`sim.tick(300)`) and stops — final positions are identical, but no animation frames. |
| Comprehensive `aria-live` | ✅ Fixed | Added a shared SR-only `#liveAnnounce` (`role="status" aria-live="polite"`). `announce()` helper wired into: topic mark-complete/uncomplete, streak count change, Pomodoro phase transitions. Note-saved and journal-saved keep their existing dedicated live regions. |
| Modal stacking focus | ✅ Fixed | `restoreFocus()` now finds the topmost still-open dialog and redirects focus into it if the popped focus target is gone or outside that dialog. Stack-of-modals (e.g., onboarding opened from inside Settings) Just Works™. |
| Skip-to-content link | ✅ Fixed | `<a class="skip-link" href="#roadmap">Skip to roadmap</a>` at the top of `<body>`. Off-screen by default, visible on keyboard focus. First Tab from page load reveals it. |

## Phase 7 — Project acceptance criteria

The "Project Ideas" card on each stage band now renders structured project entries with concrete, checkable acceptance criteria — the highest-leverage gap compared to professional roadmaps (The Odin Project, boot.dev) which use graded projects as their core retention mechanism.

### What's there

**41 projects** across all 9 stages (Stage 0 = 1 setup project, Stages 1-8 = 5 projects each). Each project has **3-5 specific acceptance criteria**, totaling **205 individual checkboxes** across the whole roadmap.

### How it works

| Action | Behavior |
|---|---|
| Click project header | Expands/collapses the criteria checklist |
| Click a criterion checkbox | Toggles its done state, persists to `state.projectCriteria`, updates `N/5 done` progress indicator, fires streak activity |
| All criteria checked | Progress turns green with "5/5 done" |
| Page reload | Checkbox state, progress labels, and complete styling all restore from localStorage |

### State shape

```js
state.projectCriteria = { "stageId::projectIdx::criterionIdx": true, ... }
```

### Example criteria (Stage 3, Pokédex)

- TypeScript strict mode, no `any`
- Types generated or hand-written from PokéAPI schema
- Server Components for list, Client Components for interactivity
- Responsive grid: 1 col mobile, 2 col tablet, 4+ col desktop
- Lighthouse score ≥ 90, deployed to Vercel

The full set of criteria lives in `PROJECT_IDEAS` near the top of the script block. Easy to edit per project.

### Why this matters

Comparing this roadmap to The Odin Project and boot.dev, the single biggest gap was **graded projects** — concrete, specific criteria that signal "done" rather than vague project ideas. Self-taught learners who only mark "I built a thing" tend to ship shallow projects. Self-taught learners who check off "✓ Type-safe API client · ✓ Lighthouse ≥ 90 · ✓ Deployed" ship projects that interviewers actually look at.

This brings the roadmap from a B+ to roughly A- on competitive grading (see "Competitive position" section below).

### Remaining caveats (best-effort, not gaps)

- Color contrast verified for the most-used pair (`--text-mute` on `--bg`). Per-feature combinations (e.g., `tier-ref` badge on `--bg-card` in print mode) were not exhaustively audited.
- `prefers-reduced-motion` honored globally via CSS plus the d3 simulation. Other animations (`onb-overlay` open transition, `modal` scale-in) are CSS transitions and already gated by the global media query.
- `announce()` is throttled implicitly by browser screen-reader queueing; rapid-fire announcements (e.g., grading 5 flashcards in 3 seconds) may queue up and not all be spoken. This matches normal screen-reader behavior, not a bug.
