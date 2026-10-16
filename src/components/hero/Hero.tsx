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
    <main className="xeory-hero" id="top">
      <div className="xeory-hero-content">
        <h1 className="xeory-hero-title">{title}</h1>
        <p className="xeory-hero-description">{description}</p>
      </div>
    </main>
  )
}

export default Hero
