import { useEffect, useState } from 'react'
import { business } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function WhatsAppButton() {
  const [nearFooter, setNearFooter] = useState(false)

  useEffect(() => {
    const footerBottom = document.querySelector('.footer-bottom')
    if (!footerBottom || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: '0px 0px 80px 0px' },
    )
    observer.observe(footerBottom)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      className={`whatsapp-float${nearFooter ? ' is-hidden' : ''}`}
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Abacus on WhatsApp at ${business.whatsappDisplay}`}
    >
      <WhatsAppIcon width={24} height={24} />
      <span>WhatsApp us</span>
    </a>
  )
}
