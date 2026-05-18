import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
  },
  args: { placeholder: 'lia@example.com', type: 'email' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="lia@example.com" />
    </div>
  ),
}

export const Invalid: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-2">
      <Label htmlFor="email-invalid">Email</Label>
      <Input
        id="email-invalid"
        type="email"
        defaultValue="not-an-email"
        aria-invalid
      />
    </div>
  ),
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'cannot edit' },
}
