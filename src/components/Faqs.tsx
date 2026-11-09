import { faqs } from '../data/site'

export function Faqs() {
  return (
    <section id="faqs" className="section section-alt">
      <div className="wrap faq-wrap">
        <div className="faq-intro">
          <span className="eyebrow">FAQs</span>
          <h2>Frequently asked questions</h2>
          <p className="lead">
            Still unsure about something? Call us on <a href="tel:+447966478062">07966 478062</a> and we&apos;ll be
            glad to help.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
