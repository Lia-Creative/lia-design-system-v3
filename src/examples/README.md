# Lia Examples

This folder is for **prototype surfaces** — full screens, flows, and feature sketches that compose primitives from `src/components/ui/` into realistic Lia product UI.

## What goes here

- Full-page mocks (musician profile, dashboard, EPK bundler, etc.)
- Multi-component compositions that exercise the design system in context
- "What would this product feel like?" explorations

## What does NOT go here

- New primitives — those live in `src/components/ui/`. If a prototype reveals a useful pattern, **propose backporting** (run `/design-review` after the session).
- One-off styling — if it's only needed for a single prototype, keep the styles inline here. Don't promote it to the system.

## Story title hierarchy

Stories in this folder use the `Lia Examples/<area>/<screen>` title pattern, e.g.:

- `Lia Examples/Musician/Profile`
- `Lia Examples/Dashboard/Tracks`
- `Lia Examples/EPK/Builder`

## Workflow

1. **Vibe-code** the prototype here, composing primitives.
2. **Push to main** — auto-deploys to storybook.lia.build alongside the primitives.
3. **Review changes** with `/design-review` — triage each tweak into: token change, primitive improvement, new primitive, or one-off (stays in prototype).
4. **Propagate** approved changes to the design system + Figma per the propagation matrix in `CLAUDE.md`.
