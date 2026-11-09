import { images } from '../data/site'
import { ArrowIcon } from './Icons'

const panels = [
  {
    image: images.bathroomMain,
    alt: 'Refurbished bathroom with twin basins and walk-in shower',
    title: 'Bathroom Refurbishments',
    text: 'Contemporary bathrooms, walk-in showers, wet rooms and well-chosen fixtures with quality tiling.',
  },
  {
    image: images.kitchenWhite,
    alt: 'Modern fitted white kitchen with island and breakfast bar',
    title: 'Kitchen Refurbishments',
    text: 'Modern kitchen interiors, cabinetry, worktops and finishing details fitted with care.',
  },
]

export function Improvements() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">More than plumbing</span>
          <h2>Home improvements made easier</h2>
          <p className="lead">
            Refresh the rooms that matter most. We coordinate the plumbing, heating and fitting work so your
            project runs smoothly from first visit to final finish.
          </p>
        </div>

        <div className="improvement-grid">
          {panels.map((panel) => (
            <a className="improvement-card" href="#contact" key={panel.title}>
              <img src={panel.image} alt={panel.alt} loading="lazy" />
              <div className="improvement-overlay">
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
                <span className="text-link text-link-light">
                  Start planning <ArrowIcon width={16} height={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
