import { images } from '../data/site'
import { ArrowIcon, CheckIcon } from './Icons'

const items = [
  'New boiler installation & replacement',
  'Boiler servicing, repairs & power flushing',
  'Central heating & radiator upgrades',
  'Underfloor heating & heating controls',
  'Gas fires, cookers & hobs',
  'Landlord gas safety certificates',
]

export function HeatingFeature() {
  return (
    <section className="feature">
      <div className="wrap feature-grid">
        <div className="feature-copy">
          <span className="eyebrow eyebrow-light">Heating &amp; boilers</span>
          <h2>Heating solutions that keep your home comfortable</h2>
          <p>
            Whether your boiler needs a repair or your home is ready for a new heating system, you get clear
            advice and a tidy, professional installation from start to finish.
          </p>
          <ul className="check-list">
            {items.map((item) => (
              <li key={item}>
                <CheckIcon width={18} height={18} /> {item}
              </li>
            ))}
          </ul>
          <a className="btn" href="#contact">
            Discuss your heating requirements <ArrowIcon width={18} height={18} />
          </a>
        </div>

        <div className="feature-media">
          <img
            src={images.radiator}
            alt="Abacus engineer fitting a heated towel radiator"
            loading="lazy"
          />
          <div className="feature-float">
            <strong>Emergency call-outs</strong>
            <span>Fast response when your heating fails</span>
          </div>
        </div>
      </div>
    </section>
  )
}
