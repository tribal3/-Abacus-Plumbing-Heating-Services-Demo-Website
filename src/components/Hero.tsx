import { business, images } from '../data/site'
import { ArrowIcon, PhoneIcon, ShieldIcon, StarIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="home" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Family-run boiler supplier &amp; heating engineers in Stockport</span>
          <h1>
            Reliable plumbing &amp; heating, <em>done properly.</em>
          </h1>
          <p>
            From boiler installations and emergency repairs to bathrooms, kitchens and landlord gas safety,
            Abacus keeps your home warm, safe and working — across Stockport and Greater Manchester.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">
              Request a Quote <ArrowIcon width={18} height={18} />
            </a>
            <a className="btn btn-ghost" href={business.phoneHref}>
              <PhoneIcon width={18} height={18} /> {business.phoneDisplay}
            </a>
          </div>
          <ul className="hero-points">
            <li>
              <ShieldIcon width={18} height={18} /> Gas Safe registered
            </li>
            <li>
              <ShieldIcon width={18} height={18} /> 12-month workmanship guarantee
            </li>
            <li>
              <ShieldIcon width={18} height={18} /> Free, no-obligation quotes
            </li>
          </ul>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <img
              src={images.heroEngineer}
              alt="Abacus heating engineer working on a boiler and hot water cylinder"
              loading="eager"
            />
          </div>

          <div className="hero-rating">
            <div className="hero-rating-score">
              <strong>{business.rating}</strong>
              <div>
                <div className="stars" aria-label={`${business.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} width={15} height={15} />
                  ))}
                </div>
                <small>{business.reviewCount} Google reviews</small>
              </div>
            </div>
          </div>

          <div className="hero-badge">
            <img src={images.gassafeLogo} alt="Gas Safe Register" />
            <div>
              <strong>Gas Safe registered</strong>
              <small>Qualified &amp; insured engineer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
