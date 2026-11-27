import './Hero.css'

export interface HeroProps {
  title?: string
  description?: string
}

function Hero({
  title = 'Xeory Extension',
  description = 'コンテンツを中心に情報を届ける、シンプルなワンカラムのサイトデザインです。',
}: HeroProps) {
  return (
    <section aria-labelledby="xeory-hero-title" className="xeory-hero" id="top">
      <div className="xeory-hero-content">
        <h1 className="xeory-hero-title" id="xeory-hero-title">
          {title}
        </h1>
        <p className="xeory-hero-description">{description}</p>
      </div>
    </section>
  )
}

export default Hero
