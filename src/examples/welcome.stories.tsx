import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  ArrowRightIcon,
  CheckCircle2Icon,
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
 * Welcome showcase — exercises every primitive in the design system to demonstrate
 * how they compose into a real product surface. Use this as a reference when building
 * actual product prototypes in this folder.
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
            Lia design system v3
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight">
            Modular tools for independent musicians.
          </h1>
          <p className="text-lg text-muted-foreground">
            This is the welcome surface — a showcase of every primitive composed into one
            page. Copy patterns from here when you build the real prototypes.
          </p>
          <div className="mt-2 flex gap-2">
            <Button>
              Get started
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button variant="ghost">View on GitHub</Button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tokens that round-trip</CardTitle>
              <CardDescription>
                Edit <code className="text-foreground">globals.css</code>, run{' '}
                <code className="text-foreground">pnpm tokens:sync</code>, Figma updates.
              </CardDescription>
              <CardAction>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button size="icon-sm" variant="ghost" aria-label="Info">
                        <SparklesIcon />
                      </Button>
                    }
                  />
                  <TooltipContent>Single source of truth</TooltipContent>
                </Tooltip>
              </CardAction>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock components, themed</CardTitle>
              <CardDescription>
                shadcn/studio Pro base-nova primitives with the full Lia palette applied.
              </CardDescription>
              <CardAction>
                <CheckCircle2Icon className="text-primary" />
              </CardAction>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auto-deploy</CardTitle>
              <CardDescription>
                Push to main → Storybook live in 30s at storybook.lia.build.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reach for blocks first</CardTitle>
              <CardDescription>
                Before scratch-building UI, check{' '}
                <a
                  className="underline underline-offset-2 hover:text-foreground"
                  href="https://shadcnstudio.com/blocks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shadcn studio blocks
                </a>
                .
              </CardDescription>
            </CardHeader>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Try the patterns</CardTitle>
            <CardDescription>
              Tap a button to see the toast pattern. Open the dialog to see how forms
              compose with Label + Input.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3 px-4">
            <Button
              variant="outline"
              onClick={() => toast.success('Tokens synced from Figma')}
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
                  <Input id="welcome-note" placeholder="What did you just learn?" />
                </div>
                <DialogFooter>
                  <DialogClose render={<Button variant="ghost">Cancel</Button>} />
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
              <TooltipContent>That's all of them.</TooltipContent>
            </Tooltip>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">
            Built with the eight primitives in <code>src/components/ui/</code>.
          </CardFooter>
        </Card>

        <footer className="flex items-center justify-between text-sm text-muted-foreground">
          <Logo variant="icon" className="size-5" />
          <span>Lia · life in adventure</span>
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
