# Changelog

All notable changes to this project. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) loosely; dates are when the corresponding GitHub Pages deploy went live.

The roadmap is a single-file static HTML app (`roadmap_v3.html`). Versions are deploy-tagged rather than semver because there's no API to break.

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
