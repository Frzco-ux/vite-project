import articleCafe from '../popular-articles/images/article-cafe.svg'
import articleCoffee from '../popular-articles/images/article-coffee.svg'
import articleLaptop from '../popular-articles/images/article-laptop.svg'
import articleLaptopBlue from '../popular-articles/images/article-laptop-blue.svg'
import articleLaptopDesk from '../popular-articles/images/article-laptop-desk.svg'
import RecentPostItem from './RecentPostItem'
import './RecentPosts.css'

const posts = [
  {
    category: 'カテゴリー#1',
    date: '2014/10/24',
    image: articleLaptop,
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#1',
    date: '2014/10/24',
    image: articleLaptopBlue,
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#4',
    date: '2014/10/24',
    image: articleCafe,
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#3',
    date: '2014/10/24',
    image: articleCoffee,
    title: 'テスト投稿',
  },
  {
    category: 'カテゴリー#2',
    date: '2014/10/24',
    image: articleLaptopDesk,
    title: 'テスト投稿',
  },
]

function RecentPosts() {
  return (
    <section aria-labelledby="recent-posts-title" className="recent-posts">
      <header className="recent-posts-heading">
        <svg
          aria-hidden="true"
          className="recent-posts-clock"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <h2 id="recent-posts-title">最近の投稿</h2>
      </header>

      <div className="recent-posts-grid">
        {posts.map((post, index) => (
          <RecentPostItem key={`${post.category}-${index}`} {...post} />
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
