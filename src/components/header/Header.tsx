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
}

function Header({ brand = 'XeoryExtension' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="xeory-header">
      <div className="xeory-header-inner">
        <a className="xeory-header-brand" href="/">
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
  )
}

export default Header
