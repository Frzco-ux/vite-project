import './PopularArticleItem.css'

type PopularArticleItemProps = {
  category: string
  image: string
  rank: number
  title: string
}

function PopularArticleItem({
  category,
  image,
  rank,
  title,
}: PopularArticleItemProps) {
  return (
    <article className="popular-article-item">
      <div className="popular-article-image">
        <img src={image} alt="" />
        <span
          aria-label={`Number ${rank}`}
          className={`popular-article-rank${rank === 1 ? ' is-first' : ''}`}
        >
          No. {rank}
        </span>
      </div>
      <span className="popular-article-category">{category}</span>
      <h3 className="popular-article-title">{title}</h3>
    </article>
  )
}

export default PopularArticleItem
