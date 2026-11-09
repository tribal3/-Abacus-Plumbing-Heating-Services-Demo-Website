import { services } from '../data/site'
import { ArrowIcon } from './Icons'

export function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Complete plumbing, heating &amp; home improvement services</h2>
          <p className="lead">
            As a boiler supplier and installer, we cover domestic and light commercial work across Stockport and
            the North West — from emergency repairs to planned installations.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-media">
                <img src={service.image} alt={service.alt} loading="lazy" />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a className="text-link" href="#contact">
                  {service.cta} <ArrowIcon width={16} height={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="section-note">
          Also available: power flushing, gas fires &amp; surrounds, gas cookers and hobs, underfloor heating,
          steam rooms &amp; hot tubs, wet rooms, tiling and landlord electrical safety checks.
        </p>
      </div>
    </section>
  )
}
