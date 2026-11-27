import type { Meta, StoryObj } from '@storybook/react-vite'
import Company from './Company'

const meta = {
  title: 'Sections/Company',
  component: Company,
} satisfies Meta<typeof Company>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
