import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { toast } from 'sonner'

import { Button } from './button'
import { Toaster } from './sonner'

const meta = {
  title: 'UI/Sonner',
  component: Toaster,
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Toaster />
      <Button onClick={() => toast('Tokens synced from Figma')}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success('Pushed to Lia-Creative')}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info('Storybook autodocs regenerated')}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning('3 unmapped Figma variables')}
      >
        Warning
      </Button>
      <Button
        variant="destructive"
        onClick={() => toast.error('Token round-trip failed')}
      >
        Error
      </Button>
    </div>
  ),
}
