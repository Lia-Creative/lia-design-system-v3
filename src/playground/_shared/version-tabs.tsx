'use client'

import { useState, type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type PrototypeVersion = {
  id: string
  label: string
  note?: string
  render: () => ReactNode
}

type VersionTabsProps = {
  versions: PrototypeVersion[]
  defaultId?: string
}

/**
 * VersionTabs — the playground pattern for keeping iterations side-by-side.
 *
 * Each prototype renders its content inside <VersionTabs versions={[…]} />.
 * The tab strip sits above the canvas, neutral-styled so it doesn't compete
 * with the design under review. Switching tabs swaps the entire surface, so
 * versions can differ in any way — scoped tokens, story copy, JSX structure.
 *
 * Convention:
 *   - v1 is always the baseline (untouched after first ship).
 *   - New iterations get added as v2, v3, … with a short `note` explaining
 *     the delta (e.g. "Figtree + paper shadow", "denser layout").
 *   - Default tab is the latest version.
 */
export function VersionTabs({ versions, defaultId }: VersionTabsProps) {
  const latestId = versions[versions.length - 1]?.id
  const [activeId, setActiveId] = useState(defaultId ?? latestId)
  const active = versions.find((v) => v.id === activeId) ?? versions[0]

  if (!active) return null

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <div className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-screen-md items-center gap-2 overflow-x-auto px-4 py-2">
          <span className="shrink-0 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Versions
          </span>
          <div className="flex items-center gap-1">
            {versions.map((v) => {
              const isActive = v.id === activeId
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActiveId(v.id)}
                  aria-pressed={isActive}
                  className={cn(
                    'flex shrink-0 items-baseline gap-2 rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors',
                    isActive
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  <span>{v.label}</span>
                  {v.note && (
                    <span
                      className={cn(
                        'text-xs font-normal',
                        isActive ? 'opacity-70' : 'opacity-60',
                      )}
                    >
                      {v.note}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex-1">{active.render()}</div>
    </div>
  )
}
