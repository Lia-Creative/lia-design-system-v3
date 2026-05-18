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
