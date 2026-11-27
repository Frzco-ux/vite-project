import './Footer.css'

const links = [
  { href: '#top', label: 'トップ' },
  { href: '#features', label: '特徴' },
  { href: '#services', label: 'サービス' },
  { href: '#company', label: '会社紹介' },
  { href: '#inquiry', label: 'お問い合わせ' },
]

function Footer() {
  return (
    <footer className="xeory-footer">
      <div className="xeory-footer-inner">
        <a className="xeory-footer-brand" href="#top">
          XeoryExtension
        </a>
        <nav aria-label="フッターナビゲーション" className="xeory-footer-nav">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <small className="xeory-footer-copyright">
          Copyright © Xeory Extension
        </small>
      </div>
    </footer>
  )
}

export default Footer
