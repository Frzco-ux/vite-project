import type { Meta, StoryObj } from '@storybook/react-vite'
import RecentPosts from './RecentPosts'

const meta = {
  title: 'Components/RecentPosts',
  component: RecentPosts,
} satisfies Meta<typeof RecentPosts>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
