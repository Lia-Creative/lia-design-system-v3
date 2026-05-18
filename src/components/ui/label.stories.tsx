import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email' },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PairedWithInput: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-2">
      <Label htmlFor="email-paired">Email</Label>
      <Input id="email-paired" type="email" placeholder="lia@example.com" />
    </div>
  ),
}
