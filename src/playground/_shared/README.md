# Playground shared

Tools used by playground prototypes. Not part of the production design system.

## What lives here

Anything that helps you iterate inside the sandbox but shouldn't ship to consumers of `@/components/ui/`. Versioning chrome, comparison harnesses, prototype-only utilities.

## VersionTabs

`version-tabs.tsx` keeps every iteration of a prototype side-by-side as a tab. Each prototype's `index.stories.tsx` wraps its content in `<VersionTabs versions={[…]} />`.

### Convention

- **v1 is the baseline.** Once shipped, don't edit it. Every later version is added alongside it so the baseline stays comparable.
- **New iterations get added as v2, v3, …** with a short `note` describing the delta ("Figtree + paper shadow", "denser layout", "warmer palette").
- **Default tab is the latest version** unless `defaultId` overrides it.

### Where the visual delta lives

Versions can differ in any combination of:

| Layer | Lives in | Best for |
| --- | --- | --- |
| Scoped tokens | `tokens.css` under `.playground-<slug>--v<n>` | Font, colour, radius, shadow — anything driven by CSS vars or descendant selectors |
| JSX | The version's `render` callback returns different markup | Structural or content changes between versions |
| Mixed | Both | Most real iterations |

The cleanest comparison is when **the JSX is identical and only the scoped tokens differ** — the difference is then purely about the design language, not the layout.

### Example

```tsx
import { VersionTabs } from '../_shared/version-tabs'

function Surface({ scopeClass }: { scopeClass: string }) {
  return (
    <div className={`${scopeClass} min-h-svh bg-background`}>
      { /* prototype content */ }
    </div>
  )
}

function Prototype() {
  return (
    <VersionTabs
      versions={[
        {
          id: 'v1',
          label: 'v1',
          note: 'baseline',
          render: () => <Surface scopeClass="playground-thing playground-thing--v1" />,
        },
        {
          id: 'v2',
          label: 'v2',
          note: 'Figtree + paper shadow',
          render: () => <Surface scopeClass="playground-thing playground-thing--v2" />,
        },
      ]}
    />
  )
}
```

With matching scoped overrides in `tokens.css`:

```css
.playground-thing--v1 { /* baseline, untouched */ }

.playground-thing--v2 {
  --font-sans: 'Figtree', ui-sans-serif, system-ui, sans-serif;
}

.playground-thing--v2 [data-slot="card"] {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
```
