import './Services.css'
import SectionHeading from '../section-heading/SectionHeading'

const services = [
  {
    description: 'Xeoryを活用したウェブサイトのカスタマイズをご紹介します。',
    englishTitle: 'Xeory Customize',
    href: 'https://xeory.jp/design-examples/',
    linkLabel: 'カスタマイズ事例を見る',
    title: 'Xeoryカスタマイズ',
  },
  {
    description: 'コンテンツを通じたマーケティングの成功事例をご紹介します。',
    englishTitle: 'Content Marketing',
    href: 'https://lucy.ne.jp/bazubu/case',
    linkLabel: 'コンテンツマーケティング成功事例を見る',
    title: 'コンテンツマーケティング',
  },
]

function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="xeory-services"
      id="services"
    >
      <SectionHeading eyebrow="SERVICE" id="services-title" title="サービス紹介" />

      <div className="xeory-services-grid">
        {services.map((service, index) => (
          <article className="xeory-service" key={service.title}>
            <div aria-hidden="true" className="xeory-service-number">
              0{index + 1}
            </div>
            <div className="xeory-service-content">
              <p className="xeory-service-english">{service.englishTitle}</p>
              <h3>{service.title}</h3>
              <p className="xeory-service-description">
                {service.description}
              </p>
              <a
                className="xeory-service-link"
                href={service.href}
                rel="noreferrer"
                target="_blank"
              >
                {service.linkLabel}
                <span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
