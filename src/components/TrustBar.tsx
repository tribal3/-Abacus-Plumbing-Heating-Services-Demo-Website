import { business, stats } from '../data/site'
import { ShieldIcon, StarIcon } from './Icons'

export function TrustBar() {
  return (
    <section className="trust" aria-label="Ratings and credentials">
      <div className="wrap trust-inner">
        <div className="trust-score">
          <div className="trust-score-value">
            <strong>{business.rating}</strong>
            <span>/ 5</span>
          </div>
          <div>
            <div className="stars" aria-label={`${business.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} width={18} height={18} />
              ))}
            </div>
            <p>
              Based on <b>{business.reviewCount} Google reviews</b>
            </p>
          </div>
        </div>

        <div className="trust-stats">
          {stats.map((stat, index) => (
            <div className="trust-stat" key={stat.label}>
              {index === 1 ? (
                <StarIcon width={20} height={20} />
              ) : (
                <ShieldIcon width={20} height={20} />
              )}
              <div>
                <strong>{stat.label}</strong>
                <span>{stat.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
