import type { Meta, StoryObj } from '@storybook/react-vite'
import articleLaptop from '../images/article-laptop.svg'
import PopularArticleItem from './PopularArticleItem'

const meta = {
  title: 'Components/PopularArticleItem',
  component: PopularArticleItem,
  args: {
    category: 'Category #1',
    image: articleLaptop,
    rank: 1,
    title: 'Test post',
  },
} satisfies Meta<typeof PopularArticleItem>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
