import './Features.css'
import SectionHeading from '../section-heading/SectionHeading'

const features = [
  {
    description:
      'Xeory Extensionはレスポンシブデザインを採用しています。スマートフォンやタブレットなど各種デバイスで表示が最適化されます。',
    englishTitle: 'Mobile Responsive',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <rect height="34" rx="3" width="23" x="12.5" y="7" />
        <path d="M20 35h8" />
      </svg>
    ),
    number: '01',
    title: 'モバイルレスポンシブ',
  },
  {
    description:
      'Xeory ExtensionはHTML5言語でデザイン及びコーディングがなされています。',
    englishTitle: 'HTML5 Design',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="m11 7 2.5 31L24 42l10.5-4L37 7H11Z" />
        <path d="M18 16h13l-1 6H19l1 7 4 1 4-1 .5-3" />
      </svg>
    ),
    number: '02',
    title: 'HTML5デザイン',
  },
  {
    description:
      'Xeory ExtensionはGoogleのSEOガイドラインに可能な限り沿った構造になっています。必要なのは良質なコンテンツだけです。',
    englishTitle: 'Search Engine Optimized',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <circle cx="21" cy="21" r="12" />
        <path d="m30 30 10 10M16 21l4 4 7-8" />
      </svg>
    ),
    number: '03',
    title: 'SEO最適化',
  },
  {
    description:
      'Xeory Extensionはカスタマイズフリーです。CSS, HTML, PHP の知識があれば自由にカスタマイズすることができます。',
    englishTitle: 'Customizable',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 48 48">
        <path d="m28 8 12 12-20 20H8V28L28 8Z" />
        <path d="m23 13 12 12M8 40h32" />
      </svg>
    ),
    number: '04',
    title: '高いカスタマイズ性',
  },
]

function Features() {
  return (
    <section aria-labelledby="features-title" className="xeory-features" id="features">
      <SectionHeading
        eyebrow="FEATURE"
        id="features-title"
        title="XeoryExtensionの特徴"
      />

      <div className="xeory-features-grid">
        {features.map((feature) => (
          <article className="xeory-feature" key={feature.number}>
            <div className="xeory-feature-icon">{feature.icon}</div>
            <span className="xeory-feature-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p className="xeory-feature-english">{feature.englishTitle}</p>
            <p className="xeory-feature-description">{feature.description}</p>
            <a className="xeory-feature-more" href="#services">
              詳しく見る <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
