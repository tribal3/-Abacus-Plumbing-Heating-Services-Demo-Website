import { useEffect, useState } from 'react'
import { business, images, navLinks } from '../data/site'
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Boiler supplier · Gas Safe registered · Stockport &amp; Greater Manchester · NHS staff discount</span>
          <a href={business.phoneHref}>
            <PhoneIcon width={15} height={15} />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-inner">
          <a className="brand" href="#home" aria-label="Abacus Plumbing and Heating Services — home">
            <img src={images.logoBanner} alt="Abacus Plumbing, Heating & Electrical" />
          </a>

          <nav className={`main-nav${open ? ' is-open' : ''}`} id="site-nav" aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-cta">
                <a className="btn btn-sm" href="#contact" onClick={() => setOpen(false)}>
                  Request a Quote
                </a>
              </li>
            </ul>
            <div className="nav-mobile-contact">
              <a href={business.phoneHref}>
                <PhoneIcon width={16} height={16} /> {business.phoneDisplay}
              </a>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon width={16} height={16} /> WhatsApp
              </a>
            </div>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>

        <button
          className={`nav-overlay${open ? ' is-open' : ''}`}
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      </header>
    </>
  )
}
