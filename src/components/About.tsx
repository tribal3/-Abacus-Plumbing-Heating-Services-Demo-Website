import { BathIcon, BoltIcon, ClockIcon, FlameIcon, ShieldIcon, WrenchIcon } from './Icons'

const reasons = [
  {
    icon: ShieldIcon,
    title: 'Gas Safe Registered',
    description: 'All gas work is carried out by a qualified, insured Gas Safe registered engineer.',
  },
  {
    icon: WrenchIcon,
    title: 'Plumbing & Heating Experts',
    description: 'Everyday repairs through to full heating installations, handled by experienced tradespeople.',
  },
  {
    icon: FlameIcon,
    title: 'Boiler Specialists',
    description: 'Installation, replacement, servicing and breakdown support for combi and system boilers.',
  },
  {
    icon: BathIcon,
    title: 'Bathrooms & Kitchens',
    description: 'Complete refurbishment, tiling and fitting for bathrooms, wet rooms and kitchens.',
  },
  {
    icon: ClockIcon,
    title: 'Fast, Local Response',
    description: 'Based in Edgeley, Stockport, with emergency call-outs across Greater Manchester.',
  },
  {
    icon: BoltIcon,
    title: 'Family-Run & Trusted',
    description: 'A well-run family business with a 12-month workmanship guarantee and NHS staff discounts.',
  },
]

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Why choose Abacus</span>
          <h2>One trusted team for your plumbing, heating &amp; home improvements</h2>
          <p className="lead">
            Abacus is a family-owned boiler supplier and plumbing and heating business based in Stockport. From
            boiler supply and installation to a leaking tap or a complete bathroom or kitchen, one call can cover
            several jobs around your property — done properly, priced fairly and backed by a workmanship
            guarantee.
          </p>
        </div>

        <div className="reason-grid">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article className="reason-card" key={title}>
              <span className="reason-icon">
                <Icon width={24} height={24} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
