import { useState } from 'react'
import './Header.css'

const navigationLinks = [
  {
    label: '記事ページサンプル',
    href: 'https://xeory.jp/extension/sample',
  },
  {
    label: 'テーマをダウンロード',
    href: 'https://xeory.jp/template/xeory-extension/',
  },
]

export interface HeaderProps {
  brand?: string
  title?: string
  description?: string
}

function Header({
  brand = 'XeoryExtension',
  title = 'Xeory Extension',
  description = 'コンテンツを中心に情報を届ける、シンプルなワンカラムのサイトデザインです。',
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="xeory-page">
      <header className="xeory-header">
        <div className="xeory-header-inner">
          <a className="xeory-header-brand" href="#top">
            {brand}
          </a>
          <nav
            className={`xeory-header-nav${menuOpen ? ' is-open' : ''}`}
            aria-label="メインナビゲーション"
            id="xeory-navigation"
          >
            {navigationLinks.map((link) => (
              <a className="xeory-header-nav-link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            aria-controls="xeory-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            className="xeory-header-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <main className="xeory-hero" id="top">
        <div className="xeory-hero-content">
          <h1 className="xeory-hero-title">{title}</h1>
          <p className="xeory-hero-description">{description}</p>
        </div>
      </main>
    </div>
  )
}

export default Header
