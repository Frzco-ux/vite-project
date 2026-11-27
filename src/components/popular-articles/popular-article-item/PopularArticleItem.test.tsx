import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PopularArticleItem from './PopularArticleItem'

describe('PopularArticleItem', () => {
  it('renders the article title, category, and rank', () => {
    render(
      <PopularArticleItem
        category="Category #1"
        image="/article.jpg"
        rank={1}
        title="Test post"
      />,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Test post' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Category #1')).toBeInTheDocument()
    expect(screen.getByLabelText('Number 1')).toBeInTheDocument()
  })
})
