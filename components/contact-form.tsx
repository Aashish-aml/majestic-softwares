'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label className="form-field">
          <span>Name <span aria-hidden="true">*</span></span>
          <input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="form-field">
          <span>Email <span aria-hidden="true">*</span></span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
      </div>
      <label className="form-field">
        <span>Company</span>
        <input name="company" autoComplete="organization" placeholder="Your company" />
      </label>
      <label className="form-field">
        <span>Project requirements</span>
        <select name="requirements" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Custom software development</option>
          <option>Web application development</option>
          <option>Cloud and DevOps</option>
          <option>QA and automation testing</option>
          <option>Ongoing development support</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="form-field">
        <span>Message <span aria-hidden="true">*</span></span>
        <textarea name="message" rows={4} placeholder="A little about your goals, timeline, or challenges…" required />
      </label>
      <div className="contact-form__footer">
        <button className="button button--form" type="submit">
          Start your project <ArrowRight size={16} aria-hidden="true" />
        </button>
        <p className="contact-form__privacy">* Required fields. This demo form doesn&apos;t send or store your details.</p>
      </div>
      {submitted && (
        <p className="form-status" role="status" aria-live="polite">
          No message was sent or saved. This contact form needs a delivery service before it can accept inquiries.
        </p>
      )}
    </form>
  )
}
