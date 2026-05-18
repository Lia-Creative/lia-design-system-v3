import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  ArrowRightIcon,
  CompassIcon,
  HandshakeIcon,
  PlusIcon,
  SparklesIcon,
} from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

/**
 * Welcome showcase — a single-page composition exercising every primitive in the
 * design system. Copy reflects the Lia Creative house-of-brands position: the
 * parent (Lia) builds tools, education, and spaces; Lia Music is the first
 * vertical. Source: Lia Vault `Company/Strategy/lia-1-pager-v2-2026-05-14.md`.
 */
function Welcome() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="mx-auto flex max-w-3xl flex-col gap-12 p-8">
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
          </div>
        </header>

        <section className="flex flex-col gap-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Lia Music · the first vertical
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight">
            Modular tools for independent musicians.
          </h1>
          <p className="text-lg text-muted-foreground">
            Tools, education, and spaces that help musicians get back to adventure.
            Lia Music is the first vertical of Lia Creative — a creative company
            building things that solve real problems and feel like gifts.
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
            What we believe
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Tools should be gifts.</CardTitle>
                <CardDescription>
                  Deeply understand the person receiving them. It shows in every
                  detail, or it doesn&apos;t.
                </CardDescription>
                <CardAction>
                  <SparklesIcon className="text-primary" />
                </CardAction>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solve it, settle it, move on.</CardTitle>
                <CardDescription>
                  Once you learn a Lia tool, it doesn&apos;t change on you. No
                  feature bloat. Trust is the value exchange.
                </CardDescription>
                <CardAction>
                  <HandshakeIcon className="text-muted-foreground" />
                </CardAction>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Creativity is practical.</CardTitle>
                <CardDescription>
                  Not precious. Showing up, getting curious, making things,
                  especially when your brain won&apos;t cooperate. We design for
                  that posture.
                </CardDescription>
                <CardAction>
                  <CompassIcon className="text-muted-foreground" />
                </CardAction>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hits, not noise.</CardTitle>
                <CardDescription>
                  Every product tested against the &ldquo;hell yeah&rdquo;
                  reaction, not the &ldquo;yeah, interesting&rdquo; reaction.
                </CardDescription>
                <CardAction>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          size="icon-sm"
                          variant="ghost"
                          aria-label="More"
                        >
                          <PlusIcon />
                        </Button>
                      }
                    />
                    <TooltipContent>From the 1-pager</TooltipContent>
                  </Tooltip>
                </CardAction>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            How we work
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Vision · Mission · Values</CardTitle>
              <CardDescription>
                The shape of Lia Creative.
              </CardDescription>
            </CardHeader>
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
                  Values
                </p>
                <p className="text-sm text-foreground">
                  Creative. Brave. Collaborative. Practical. We build to last.
                </p>
              </div>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Spirit · Texture · Signature — the three brand pillars below.
            </CardFooter>
          </Card>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Try the patterns
          </p>
          <Card>
            <CardHeader>
              <CardTitle>The eight primitives, in context</CardTitle>
              <CardDescription>
                Tap a button to see the toast. Open the dialog to see how forms
                compose with Label + Input. Hover the link for a tooltip.
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
                  Tooltip
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
  title: 'Lia Examples/Welcome',
  component: Welcome,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Welcome>

export default meta
type Story = StoryObj<typeof meta>

export const StoryDefault: Story = { name: 'Default' }
