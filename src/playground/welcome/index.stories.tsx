import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArrowRightIcon, PlusIcon } from 'lucide-react'
import { toast } from 'sonner'

import './tokens.css'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'
import { Toaster } from '@/components/ui/sonner'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/**
 * Welcome showcase — single-page composition exercising every primitive.
 * Copy reflects the Lia Creative parent brand position. Source:
 * Lia Vault `Company/Strategy/lia-1-pager-v2-2026-05-14.md` +
 * `Company/Strategy/vision-mission-values.md`.
 */
function Welcome() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="playground-welcome mx-auto flex max-w-3xl flex-col gap-12 p-8">
        <header className="flex items-center justify-between">
          <Logo className="h-8 w-auto" />
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button size="sm" variant="ghost">
                    Docs
                  </Button>
                }
              />
              <TooltipContent>Component reference</TooltipContent>
            </Tooltip>
            <Button size="sm" variant="outline">
              Sign in
            </Button>
            <Button size="sm">
              <PlusIcon data-icon="inline-start" />
              New
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Lia Creative
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight">
            Build a more creative world.
          </h1>
          <p className="text-lg text-muted-foreground">
            We empower people to create, through tools, education, and spaces.
            A creative company building things that solve real problems and
            feel like gifts.
          </p>
          <div className="mt-2 flex gap-2">
            <Button>
              Get started
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button variant="ghost">View on GitHub</Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Our values
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>We are creative.</CardTitle>
                <CardDescription>
                  When reality shifts, so do we. First principles. Ideate always.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>We are brave.</CardTitle>
                <CardDescription>
                  We back ourselves, and we show up unafraid.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>We are collaborative.</CardTitle>
                <CardDescription>
                  We listen and learn. From creators, from customers, from each
                  other.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>We are practical.</CardTitle>
                <CardDescription>
                  We provide solutions through action. Real problems, real
                  products, real people.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="sm:col-span-2">
              <CardHeader>
                <CardTitle>We build to last.</CardTitle>
                <CardDescription>
                  Care drives quality. Quality earns trust. Trust means we stick
                  around.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Vision · Mission · Values
          </p>
          <Card>
            <CardContent className="grid gap-4 px-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Vision
                </p>
                <p className="text-sm text-foreground">
                  Build a more creative world.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Mission
                </p>
                <p className="text-sm text-foreground">
                  Empower people to create, through tools, education, and spaces.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Pillars
                </p>
                <p className="text-sm text-foreground">
                  Spirit. Texture. Signature.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Try the patterns
          </p>
          <Card>
            <CardHeader>
              <CardTitle>The nine primitives, in context</CardTitle>
              <CardDescription>
                Tap a button to see the toast. Open the dialog to see how forms
                compose with Label + Input. Toggle theme in the top-right.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3 px-4">
              <Button
                variant="outline"
                onClick={() => toast.success('Captured to inbox')}
              >
                Toast
              </Button>

              <Dialog>
                <DialogTrigger render={<Button variant="outline">Dialog</Button>} />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Quick capture</DialogTitle>
                    <DialogDescription>
                      Logging this in your inbox for the daily sweep to process.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-2 px-6">
                    <Label htmlFor="welcome-note">Note</Label>
                    <Input
                      id="welcome-note"
                      placeholder="What did you just learn?"
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose
                      render={<Button variant="ghost">Cancel</Button>}
                    />
                    <DialogClose
                      render={
                        <Button onClick={() => toast.success('Captured to inbox')}>
                          Capture
                        </Button>
                      }
                    />
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="outline">Tooltip</Button>}
                />
                <TooltipContent>
                  Button · Card · Dialog · Input · Label · Logo · Sonner ·
                  Theme Toggle · Tooltip
                </TooltipContent>
              </Tooltip>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Every atom on this page lives in{' '}
              <code className="text-foreground">src/components/ui/</code>.
            </CardFooter>
          </Card>
        </section>

        <footer className="flex items-center justify-between border-t border-border pt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Logo variant="icon" className="size-5" />
            <span>Lia Creative</span>
          </div>
          <span className="italic">Life in adventure.</span>
        </footer>
      </div>
    </TooltipProvider>
  )
}

const meta = {
  title: 'Playground/Welcome',
  component: Welcome,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Welcome>

export default meta
type Story = StoryObj<typeof meta>

export const StoryDefault: Story = { name: 'Default' }
