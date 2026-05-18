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

// Random tilt range. ±0.6° reads as "precisely placed, just slightly off
// horizontal" — paper that's been put down with intent. Bigger feels
// scattered; this should look intentional.
const TILT_RANGE = 0.6

function randomTilt() {
  return (Math.random() * TILT_RANGE * 2 - TILT_RANGE).toFixed(2)
}

function LiaLinksSurface({ scopeClass }: { scopeClass: string }) {
  // Random tilt per tiltable element, generated once per mount. The
  // CSS variable --surface-tilt is set on every version's cards/buttons,
  // but only the v3 scope reads it (rotate: var(--surface-tilt)). v1
  // and v2 stay flat.
  const [tilts] = useState(() => ({
    themeToggle: randomTilt(),
    bets: bets.map(() => randomTilt()),
  }))

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
                    } as CSSProperties
                  }
                  className="group/bet relative transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-md focus-within:ring-2 focus-within:ring-ring/40"
                >
                  <CardContent className="flex items-center gap-4">
                    <span
                      aria-hidden
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
