import type { Meta, StoryObj } from '@storybook/react-vite'
import articleLaptop from '../popular-articles/images/article-laptop.svg'
import RecentPostItem from './RecentPostItem'

const meta = {
  title: 'Components/RecentPostItem',
  component: RecentPostItem,
  args: {
    category: 'カテゴリー#1',
    date: '2014/10/24',
    image: articleLaptop,
    title: 'テスト投稿',
  },
} satisfies Meta<typeof RecentPostItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
