import { useState, type ChangeEvent, type FormEvent } from 'react'
import { business } from '../data/site'
import { CheckIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

type FormState = {
  name: string
  phone: string
  email: string
  postcode: string
  service: string
  details: string
}

type Errors = Partial<Record<keyof FormState, string>>

const emptyForm: FormState = {
  name: '',
  phone: '',
  email: '',
  postcode: '',
  service: '',
  details: '',
}

const serviceOptions = [
  'Boiler Installation',
  'Boiler Repair or Service',
  'Plumbing',
  'Central Heating',
  'Bathroom Refurbishment',
  'Kitchen Refurbishment',
  'Landlord Gas Safety',
  'Other',
]

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!/^(\+44|0)[\d\s]{9,13}$/.test(values.phone.trim())) errors.phone = 'Enter a valid UK phone number.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (!/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(values.postcode.trim()))
    errors.postcode = 'Enter a valid UK postcode.'
  if (!values.service) errors.service = 'Please choose a service.'
  if (values.details.trim().length < 10) errors.details = 'Add a few details about the job.'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // INTEGRATION POINT: send `values` to your email service, CRM or backend endpoint here.
    setSubmitted(true)
    setValues(emptyForm)
  }

  const fieldProps = (name: keyof FormState) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contact" className="section contact-section">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&apos;s talk about your project</h2>
          <p className="lead">
            Tell us what you need and we&apos;ll come back to you with advice and a free quotation. For urgent
            problems, calling is the quickest way to reach us.
          </p>

          <ul className="contact-list">
            <li>
              <a href={business.phoneHref}>
                <span className="contact-icon">
                  <PhoneIcon width={20} height={20} />
                </span>
                <span>
                  <small>Call us</small>
                  <strong>{business.phoneDisplay}</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={business.emailHref}>
                <span className="contact-icon">
                  <MailIcon width={20} height={20} />
                </span>
                <span>
                  <small>Email</small>
                  <strong>{business.email}</strong>
                </span>
              </a>
            </li>
            <li>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer">
                <span className="contact-icon contact-icon-whatsapp">
                  <WhatsAppIcon width={20} height={20} />
                </span>
                <span>
                  <small>WhatsApp</small>
                  <strong>{business.whatsappDisplay}</strong>
                </span>
              </a>
            </li>
            <li>
              <span className="contact-icon">
                <PinIcon width={20} height={20} />
              </span>
              <span>
                <small>Based in</small>
                <strong>{business.address}</strong>
              </span>
            </li>
            <li>
              <span className="contact-icon">
                <ClockIcon width={20} height={20} />
              </span>
              <span>
                <small>Availability</small>
                <strong>Mon–Fri · 9am–5pm</strong>
              </span>
            </li>
          </ul>
        </div>

        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input {...fieldProps('name')} autoComplete="name" placeholder="Your name" />
              {errors.name && (
                <p className="error" id="name-error">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input {...fieldProps('phone')} type="tel" autoComplete="tel" placeholder="07…" />
              {errors.phone && (
                <p className="error" id="phone-error">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Email address</label>
              <input {...fieldProps('email')} type="email" autoComplete="email" placeholder="you@example.com" />
              {errors.email && (
                <p className="error" id="email-error">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="field">
              <label htmlFor="postcode">Postcode</label>
              <input {...fieldProps('postcode')} autoComplete="postal-code" placeholder="SK3 9LG" />
              {errors.postcode && (
                <p className="error" id="postcode-error">
                  {errors.postcode}
                </p>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">Service required</label>
            <select {...fieldProps('service')}>
              <option value="">Select a service…</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="error" id="service-error">
                {errors.service}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="details">Project details</label>
            <textarea
              {...fieldProps('details')}
              rows={4}
              placeholder="Tell us a little about the job, the property and any preferred dates."
            />
            {errors.details && (
              <p className="error" id="details-error">
                {errors.details}
              </p>
            )}
          </div>

          <button className="btn btn-block" type="submit">
            Request a Quote
          </button>

          {submitted && (
            <p className="form-success" role="status">
              <CheckIcon width={18} height={18} />
              Thanks — your details look good. This is a demo, so nothing has been sent. Please call{' '}
              {business.phoneDisplay} to book.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
