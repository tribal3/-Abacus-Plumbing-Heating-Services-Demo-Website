import { business } from '../data/site'
import { ArrowIcon, PhoneIcon, WhatsAppIcon } from './Icons'

export function Cta() {
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <span className="eyebrow eyebrow-light">Ready when you are</span>
        <h2>Planning a plumbing, heating or renovation project?</h2>
        <p>
          Get in touch with Abacus for friendly advice and a free, no-obligation quote. Call us or send an
          enquiry — we&apos;ll take it from there.
        </p>
        <div className="cta-actions">
          <a className="btn" href={business.phoneHref}>
            <PhoneIcon width={18} height={18} /> Call {business.phoneDisplay}
          </a>
          <a className="btn btn-ghost" href="#contact">
            Request a Quote <ArrowIcon width={18} height={18} />
          </a>
          <a
            className="btn btn-whatsapp"
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width={18} height={18} /> WhatsApp us
          </a>
        </div>
      </div>
    </section>
  )
}
