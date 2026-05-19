# Lia Links — change ledger

Sandbox scope class: `.playground-lia-links`
Started: 2026-05-19
Brief: Linktree-style landing surface for lia.build. Mission statement up top, three "bets in flight" link rows (File Runner, Life Balance, Lia Assist), minimal nav with Logo + ThemeToggle, footer with domain and tagline.

## Ledger

| When | Bucket | Change | Status |
|------|--------|--------|--------|
| 2026-05-19 | structure | Prototype scaffolded | live |
| 2026-05-19 | structure | Composed `index.stories.tsx` from Card, Logo, ThemeToggle. Three clickable link rows via stretched-link pattern. Tone slots driven by `bg-primary/10`, `bg-accent`, `bg-secondary` (no scoped token overrides yet). | live |
| 2026-05-19 | token-tweak | Swap `--font-sans` to Figtree (Google Fonts) scoped to `.playground-lia-links`. Imported via `@import` in `tokens.css`. | live |
| 2026-05-19 | structure | Add `shadow-xs` to bet cards (paper-on-surface feel). Hover state retains `shadow-md`. | superseded by v2 scoped CSS |
| 2026-05-19 | structure | Adopt `<VersionTabs>` pattern. v1 = baseline (DM Sans, ring-only Card). v2 = Figtree + paper shadow. JSX identical across versions; deltas live in `tokens.css` under `.playground-lia-links--v<n>`. Moved the shadow-xs from a class in JSX to a scoped CSS rule so v1 stays clean. | live |
| 2026-05-19 | token-tweak | Fix Figtree not applying in v2: `font-family` is inherited as a resolved value from `<html>` and the v2 `--font-sans` override was invisible. Added `font-family: var(--font-sans)` on the shared `.playground-lia-links` scope so the variable re-resolves at the playground boundary. | live |
| 2026-05-19 | structure | Generate a random tilt per bet card on mount (uniform `[-2deg, 2deg]`), inject as inline `--card-tilt` CSS variable. Always set across versions; only v3 reads it. JSX stays effectively identical (just an inline style on each Card). | superseded |
| 2026-05-19 | token-tweak | v3: drop `--background` to `oklch(0.96 0.005 91.4)` (light) and `oklch(0.18 0.01 56)` (dark) so cards visually sit on a surface — paper on a desk, not paper-coloured paper on paper-coloured paper. Also rotates `[data-slot='card']` by `var(--card-tilt)` for the scattered-placement feel. v3 inherits Figtree + paper shadow from v2 via combined selectors. | superseded |
| 2026-05-19 | structure | Tilt scope expanded to buttons (incl. theme toggle) — rename `--card-tilt` → `--surface-tilt`. Tilt range tightened from ±2° to ±0.6° (precisely-placed, not scattered). Inline style now set on ThemeToggle + each bet Card. Nested `[data-slot='button']` inside `[data-slot='card']` resets to 0deg so rotations don't compound. | live |
| 2026-05-19 | token-tweak | v3 background locked to Tailwind Stone: Stone-200 `oklch(0.923 0.003 48.717)` (light), Stone-900 `oklch(0.216 0.006 56.043)` (dark). Replaces the hand-picked hue from the previous v3 token tweak. | superseded |
| 2026-05-19 | structure | Tilt range bumped from ±0.6° to ±1°. ±0.6° was reading as zero — needed more presence to feel like "placed paper". | superseded |
| 2026-05-19 | structure | Tilt back to ±0.6°. Earlier visibility issue was sign-clustering (3 independent uniform samples easily all land same-sign), not magnitude. Generator now (a) enforces minimum magnitude 0.15° so no value reads as flat, (b) guarantees mixed signs across the bet set so they don't all lean the same way. Theme toggle uses the same per-element magnitude floor but no sign constraint (only one element). | live |
| 2026-05-19 | token-tweak | v3 background swapped to Tailwind Olive: Olive-200 `oklch(0.93 0.007 106.5)` (light), Olive-900 `oklch(0.228 0.013 107.4)` (dark). Hue 106 (warm yellow-green) replaces Stone's 48 (warm orange). Lightness near-identical, surface contrast unchanged. | superseded |
| 2026-05-19 | token-tweak | v3 contrast dialled back to one-step-on-Olive: desk = Olive-100 (light) / Olive-900 (dark), card = Olive-50 (light) / Olive-800 (dark). Olive-200 desk on system-default card read as too strong a step — the new pair keeps paper and desk both on Olive with a single named-scale step between them. | live |

## Notes

- Lia Assist copy is a first pass: "AI second brain for creatives". Confirmed framing with Dan 2026-05-19. Iterate as the bet sharpens.
- Bet hrefs are placeholders (`#file-runner`, etc.). Wire to real surfaces when they land.
- No `tokens.css` overrides yet. If we want bet-specific accent tones beyond the three semantic slots, add scoped `--bet-*` vars rather than hard-coding.
- Impeccable context note: `PRODUCT.md` and `DESIGN.md` are not yet present in the repo root. Future Impeccable-driven sessions would benefit from running `/impeccable teach` once.

## Buckets

- **token-tweak** — scoped override in `./tokens.css`. Stays local until backport.
- **primitive-fork** — copied a primitive from `src/components/ui/` into `./components/`. Stays local until backport.
- **primitive-new** — new component file in `./components/`. Stays local until promotion.
- **structure** — story/layout/copy changes to `index.stories.tsx`. Inherently prototype-only.
