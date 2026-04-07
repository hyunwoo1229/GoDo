import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: '작품', href: '#portfolio' },
  { label: '서비스', href: '#services' },
  { label: '스튜디오', href: '#about' },
  { label: '문의', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <a href="#" className="navbar__logo" onClick={close}>
            GO<span>DO</span>
          </a>

          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta">촬영 문의</a>

          <button
            className={`navbar__toggle${menuOpen ? ' navbar__toggle--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="메뉴 열기/닫기"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={label} style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}>
              <a href={href} onClick={close}>{label}</a>
            </li>
          ))}
          <li style={{ transitionDelay: menuOpen ? '0.24s' : '0s' }}>
            <a href="#contact" className="navbar__mobile-cta" onClick={close}>
              촬영 문의
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
