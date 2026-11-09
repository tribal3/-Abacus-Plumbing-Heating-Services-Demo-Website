import { reviews } from '../data/site'
import { StarIcon } from './Icons'

export function Reviews() {
  return (
    <section className="reviews">
      <div className="wrap">
        <div className="section-head section-head-center">
          <span className="eyebrow eyebrow-light">What customers say</span>
          <h2>Trusted by homeowners across Stockport</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <div className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} width={16} height={16} />
                ))}
              </div>
              <blockquote>&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
