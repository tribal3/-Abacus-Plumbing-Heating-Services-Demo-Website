import { steps } from '../data/site'

export function Steps() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Getting your project started is simple</h2>
          <p className="lead">A clear, no-pressure process from your first call to the finished job.</p>
        </div>

        <ol className="step-grid">
          {steps.map((step, index) => (
            <li className="step-card" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
