import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  ArrowRightIcon,
  FolderTreeIcon,
  Layers3Icon,
  SparklesIcon,
  type LucideIcon,
} from 'lucide-react'
import { useState, type CSSProperties } from 'react'

import './tokens.css'

import { VersionTabs } from '../_shared/version-tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Logo } from '@/components/ui/logo'
import { ThemeToggle } from '@/components/ui/theme-toggle'

type Bet = {
  slug: string
  title: string
  blurb: string
  href: string
  icon: LucideIcon
  tone: 'primary' | 'accent' | 'secondary'
}

const bets: Bet[] = [
  {
    slug: 'file-runner',
    title: 'File Runner',
    blurb:
      'A clean home for the files a song collects. Stems, lyrics, artwork, splits.',
    href: '#file-runner',
    icon: FolderTreeIcon,
    tone: 'primary',
  },
  {
    slug: 'life-balance',
    title: 'Life Balance',
    blurb:
      'Foundation, practice, build. Three layers, one honest read of where things are.',
    href: '#life-balance',
    icon: Layers3Icon,
    tone: 'accent',
  },
  {
    slug: 'lia-assist',
    title: 'Lia Assist',
    blurb:
      'A second brain for creatives. Quiet help staying on track to what matters.',
    href: '#lia-assist',
    icon: SparklesIcon,
    tone: 'secondary',
  },
]

const toneClasses: Record<Bet['tone'], string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
}

// Random tilt range. ±0.5° reads as "precisely placed, just slightly off
// horizontal" — paper that's been put down with intent.
const TILT_RANGE = 0.5
// Minimum magnitude — anything below reads as "not tilted at all", so the
// random generator avoids the zero-neighbourhood.
const TILT_MIN = 0.15

function singleTilt(): number {
  // Magnitude in [TILT_MIN, TILT_RANGE], sign random.
  const sign = Math.random() < 0.5 ? -1 : 1
  const magnitude = TILT_MIN + Math.random() * (TILT_RANGE - TILT_MIN)
  return sign * magnitude
}

// Build a hand-cut-looking border-radius. Each corner gets its own
// horizontal AND vertical radius (slash syntax), so corners are
// ellipses rather than circles. With independent random values it
// reads as paper cut with scissors — no two corners alike.
function jaggedRadius(min: number, max: number): string {
  const r = () => (min + Math.random() * (max - min)).toFixed(1)
  return `${r()}px ${r()}px ${r()}px ${r()}px / ${r()}px ${r()}px ${r()}px ${r()}px`
}

function mixedTilts(count: number): string[] {
  // Generate `count` tilts and guarantee a mix of signs — otherwise three
  // independent samples can easily all land positive (or negative) by
  // chance, which reads as "they're all tilting the same way".
  const out: number[] = [singleTilt()]
  // Force the second entry to be opposite-sign so we always have a mix.
  const firstSign = Math.sign(out[0])
  const magnitude = TILT_MIN + Math.random() * (TILT_RANGE - TILT_MIN)
  out.push(-firstSign * magnitude)
  // Any remaining entries are free random.
  for (let i = 2; i < count; i++) out.push(singleTilt())
  // Shuffle so the guaranteed-opposite isn't always in slot 2.
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out.map((v) => v.toFixed(2))
}

function LiaLinksSurface({ scopeClass }: { scopeClass: string }) {
  // Random tilt per tiltable element, generated once per mount. The
  // CSS variable --surface-tilt is set on every version's cards/buttons,
  // but only the v3 scope reads it (rotate: var(--surface-tilt)). v1
  // and v2 stay flat.
  const [tilts] = useState(() => ({
    themeToggle: singleTilt().toFixed(2),
    bets: mixedTilts(bets.length),
    icons: mixedTilts(bets.length),
  }))
  // Hand-cut corner radii. Set inline on every card and icon, but only
  // the v5 scope reads them. v3/v4 hardcode `border-radius: 3px` and
  // ignore the inline var. Range chosen so the variation is visible
  // without making any single corner read as "rounded UI".
  const [radii] = useState(() => ({
    cards: bets.map(() => jaggedRadius(2, 10)),
    icons: bets.map(() => jaggedRadius(4, 9)),
  }))
  // Random paper-texture origin per layer (cards + icons in v5). Each
  // physical layer pulls a different section of the source image so its
  // grain looks distinct — three pieces of paper with their own fibres,
  // and three stickers with their own grain, rather than every surface
  // sharing one continuous texture. Range covers the full source image
  // (2048×2048) so layers rarely sample overlapping regions.
  const [paperOffsets] = useState(() => {
    const offset = () =>
      `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px`
    return {
      cards: bets.map(offset),
      icons: bets.map(offset),
    }
  })

  return (
    <div className={`${scopeClass} min-h-svh bg-background text-foreground`}>
      <div className="mx-auto flex max-w-lg flex-col gap-12 px-6 pt-10 pb-16">
        <header className="flex items-center justify-between">
          <Logo className="h-7 w-auto" />
          <ThemeToggle
            style={
              {
                '--surface-tilt': `${tilts.themeToggle}deg`,
              } as CSSProperties
            }
          />
        </header>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            lia.build
          </p>
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight">
            Build a more creative world.
          </h1>
          <p className="text-lg leading-snug text-muted-foreground">
            We empower people to create, through tools, education, and spaces.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Bets in flight
          </p>
          <nav
            aria-label="Lia prototype bets"
            className="flex flex-col gap-3"
          >
            {bets.map((bet, idx) => {
              const Icon = bet.icon
              return (
                <Card
                  key={bet.slug}
                  size="sm"
                  style={
                    {
                      '--surface-tilt': `${tilts.bets[idx]}deg`,
                      '--card-radius': radii.cards[idx],
                      '--paper-offset': paperOffsets.cards[idx],
                    } as CSSProperties
                  }
                  className="group/bet relative transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-md focus-within:ring-2 focus-within:ring-ring/40"
                >
                  <CardContent className="flex items-center gap-4">
                    <span
                      aria-hidden
                      data-slot="bet-icon"
                      style={
                        {
                          '--surface-tilt': `${tilts.icons[idx]}deg`,
                          '--icon-radius': radii.icons[idx],
                          '--paper-offset': paperOffsets.icons[idx],
                        } as CSSProperties
                      }
                      className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${toneClasses[bet.tone]}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <p className="text-base leading-tight font-medium text-foreground">
                        {bet.title}
                      </p>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {bet.blurb}
                      </p>
                    </div>
                    <ArrowRightIcon
                      aria-hidden
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/bet:translate-x-0.5 group-hover/bet:text-foreground"
                    />
                  </CardContent>
                  <a
                    href={bet.href}
                    aria-label={bet.title}
                    className="absolute inset-0 rounded-[inherit] focus:outline-none"
                  />
                </Card>
              )
            })}
          </nav>
        </section>

        <footer className="flex items-center justify-between border-t border-border pt-6 text-sm text-muted-foreground">
          <a
            href="https://lia.build"
            className="transition-colors hover:text-foreground"
          >
            lia.build
          </a>
          <span className="italic">Life in adventure.</span>
        </footer>
      </div>
    </div>
  )
}

function LiaLinks() {
  return (
    <VersionTabs
      versions={[
        {
          id: 'v1',
          label: 'v1',
          note: 'baseline',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v1" />
          ),
        },
        {
          id: 'v2',
          label: 'v2',
          note: 'Figtree + paper shadow',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v2" />
          ),
        },
        {
          id: 'v3',
          label: 'v3',
          note: 'tinted desk + scattered placement',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v3" />
          ),
        },
        {
          id: 'v4',
          label: 'v4',
          note: 'no tinted desk',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v4" />
          ),
        },
        {
          id: 'v5',
          label: 'v5',
          note: 'scissor-cut corners',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v5" />
          ),
        },
        {
          id: 'v6',
          label: 'v6',
          note: 'Olive-0 paper on Olive-50 desk',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v6" />
          ),
        },
        {
          id: 'v7',
          label: 'v7',
          note: 'colour mode',
          render: () => (
            <LiaLinksSurface scopeClass="playground-lia-links playground-lia-links--v7" />
          ),
        },
      ]}
    />
  )
}

const meta = {
  title: 'Playground/Lia Links',
  component: LiaLinks,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof LiaLinks>

export default meta
type Story = StoryObj<typeof meta>

export const StoryDefault: Story = { name: 'Default' }
