import { business } from '../data/site'
import { ArrowIcon, PinIcon } from './Icons'

const areas = [
  'Stockport',
  'Edgeley',
  'Cheadle',
  'Bramhall',
  'Hazel Grove',
  'Marple',
  'Romiley',
  'Poynton',
  'Wilmslow',
  'Reddish',
  'Denton',
  'Manchester',
]

export function Areas() {
  return (
    <section className="area-section">
      <div className="wrap area-grid">
        <div>
          <span className="eyebrow">Where we work</span>
          <h2>Serving Stockport &amp; the surrounding areas</h2>
          <p className="lead">
            Based in Edgeley, Stockport, we cover Stockport and much of Greater Manchester and the North West.
            Not sure if we reach you? Give us a call — we&apos;re happy to check.
          </p>

          <ul className="area-chips">
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <div className="area-address">
            <PinIcon width={20} height={20} />
            <div>
              <strong>{business.address}</strong>
              <span>Free quotes · No call-out charge for quotations</span>
            </div>
          </div>

          <a className="btn" href="#contact">
            Check your area <ArrowIcon width={18} height={18} />
          </a>
        </div>

        <div className="area-ring" aria-hidden="true">
          <div className="area-ring-inner">
            <span>Based in</span>
            <b>Stockport</b>
            <span>Greater Manchester</span>
          </div>
          <div className="area-ring-dot area-ring-dot-1" />
          <div className="area-ring-dot area-ring-dot-2" />
          <div className="area-ring-dot area-ring-dot-3" />
        </div>
      </div>
    </section>
  )
}
