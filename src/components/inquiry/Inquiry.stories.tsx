import type { Meta, StoryObj } from '@storybook/react-vite'
import Inquiry from './Inquiry'

const meta = {
  title: 'Sections/Inquiry',
  component: Inquiry,
} satisfies Meta<typeof Inquiry>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
