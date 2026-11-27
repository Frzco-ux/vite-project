import articleCafe from './images/article-cafe.svg'
import articleCoffee from './images/article-coffee.svg'
import articleLaptop from './images/article-laptop.svg'
import articleLaptopBlue from './images/article-laptop-blue.svg'
import articleLaptopDesk from './images/article-laptop-desk.svg'
import PopularArticleItem from './popular-article-item/PopularArticleItem'
import './PopularArticles.css'

const articles = [
  {
    category: 'Category #1',
    image: articleLaptop,
    rank: 1,
    title: 'Test post',
  },
  {
    category: 'Category #1',
    image: articleLaptopBlue,
    rank: 2,
    title: 'Test post',
  },
  { category: 'Category #4', image: articleCafe, rank: 3, title: 'Test post' },
  {
    category: 'Category #2',
    image: articleLaptopDesk,
    rank: 4,
    title: 'Test post',
  },
  {
    category: 'Category #3',
    image: articleCoffee,
    rank: 5,
    title: 'Test post',
  },
]

function PopularArticles() {
  return (
    <section
      aria-labelledby="popular-articles-title"
      className="popular-articles"
    >
      <header className="popular-articles-heading">
        <svg
          aria-hidden="true"
          className="popular-articles-flag"
          viewBox="0 0 24 24"
        >
          <path d="M5 3v18M6 4c5-4 8 4 14 0v10c-6 4-9-4-14 0" />
        </svg>
        <h2 id="popular-articles-title">Popular articles</h2>
      </header>

      <div className="popular-articles-grid">
        {articles.map((article) => (
          <PopularArticleItem key={article.rank} {...article} />
        ))}
      </div>
    </section>
  )
}

export default PopularArticles
