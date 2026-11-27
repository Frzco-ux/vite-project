import './RecentPostItem.css'

export interface RecentPostItemProps {
  category: string
  date: string
  image: string
  title: string
}

function RecentPostItem({
  category,
  date,
  image,
  title,
}: RecentPostItemProps) {
  return (
    <article className="recent-post-item">
      <a className="recent-post-link" href="#">
        <div className="recent-post-image">
          <img src={image} alt="" />
        </div>
        <div className="recent-post-content">
          <div className="recent-post-meta">
            <span className="recent-post-category">{category}</span>
            <time className="recent-post-date" dateTime="2014-10-24">
              {date}
            </time>
          </div>
          <h3 className="recent-post-title">{title}</h3>
        </div>
      </a>
    </article>
  )
}

export default RecentPostItem
