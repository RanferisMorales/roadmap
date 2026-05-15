# Changelog

All notable changes to this project. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) loosely; dates are when the corresponding GitHub Pages deploy went live.

The roadmap is a single-file static HTML app (`roadmap_v3.html`). Versions are deploy-tagged rather than semver because there's no API to break.

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
