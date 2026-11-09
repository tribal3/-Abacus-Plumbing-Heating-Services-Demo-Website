import { business, images, navLinks } from '../data/site'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">
              <img src={images.logoBanner} alt="Abacus Plumbing, Heating & Electrical" />
            </span>
            <p>
              Boiler supplier, plumbing, heating and home improvements in Stockport &amp; Greater Manchester.
              Gas Safe registered and family-owned.
            </p>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#services">Boilers &amp; Heating</a>
              </li>
              <li>
                <a href="#services">Plumbing</a>
              </li>
              <li>
                <a href="#services">Bathrooms</a>
              </li>
              <li>
                <a href="#services">Kitchens</a>
              </li>
              <li>
                <a href="#services">Landlord Services</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>
                <a href={business.phoneHref}>
                  <PhoneIcon width={16} height={16} /> {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon width={16} height={16} /> WhatsApp {business.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={business.emailHref}>
                  <MailIcon width={16} height={16} /> {business.email}
                </a>
              </li>
              <li>
                <span>
                  <PinIcon width={16} height={16} /> {business.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Abacus Plumbing &amp; Heating Services. All rights reserved.</p>
          <p>
            Website concept by{' '}
            <a href="https://tribal3.bond" target="_blank" rel="noopener noreferrer">
              TRIBAL³ — Built for Growth
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
