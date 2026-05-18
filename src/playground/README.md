# Playground

This folder is for **prototype surfaces** — full screens, flows, and feature sketches that compose primitives from `src/components/ui/` into realistic Lia product UI. The playground is the *source* of prospective design-system changes: pattern emerges here, then gets backported to the system if it's worth keeping.

## What goes here

- Full-page mocks (musician profile, dashboard, EPK builder, etc.)
- Multi-component compositions that exercise the design system in context
- "What would this product feel like?" explorations

## What does NOT go here

- New primitives — those live in `src/components/ui/`. If a prototype reveals a useful pattern, **propose backporting** (run `/design-review` after the session).
- One-off styling — if it's only needed for a single prototype, keep the styles inline here. Don't promote it to the system.

## Story title hierarchy

Stories in this folder use the `Playground/<name>` title pattern, e.g.:

- `Playground/Welcome`
- `Playground/Musician Profile`
- `Playground/EPK Builder`

## Per-prototype change ledger

Each prototype should carry a `<name>.CHANGES.md` next to its `.stories.tsx`. Every change touched during a session gets a row, classified as:

| Bucket | Scope | What it means |
| --- | --- | --- |
| **prototype-only** | This file only | Inline JSX/Tailwind, stays here |
| **token-tweak** | System-wide | Edited `globals.css` — auto-flows to Figma via `pnpm tokens:sync` |
| **primitive-edit** | System-wide | Modified `src/components/ui/<name>.tsx` — affects all consumers |
| **primitive-new** | System-wide (additive) | New file in `src/components/ui/` — needs Code Connect mapping |

The ledger is **not** a sandbox. Only `prototype-only` is genuinely scoped to one prototype. The other three classes have system-wide reach the moment you save — the ledger exists to surface that for `/design-review` triage.

## Workflow

1. **Vibe-code** the prototype here, composing primitives.
2. **Push to main** — auto-deploys to storybook.lia.build alongside the primitives.
3. **Review changes** with `/design-review` — triage each ledger row into: token change, primitive improvement, new primitive, or one-off (stays in prototype).
4. **Propagate** approved changes to the design system + Figma per the propagation matrix in `CLAUDE.md`.
