import { ArrowUpRight, Globe2, Mail, MoveUpRight } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow__line" /> A good place to start</p>
            <h2 id="contact-title">Let&apos;s make<br /><span>something matter.</span></h2>
            <p className="contact-copy__description">
              Tell us what you&apos;re working on. We&apos;ll bring the right people and perspective to the conversation.
            </p>
            <div className="contact-details">
              <div><Globe2 size={16} aria-hidden="true" /><span>Remote-first · Based in India</span></div>
              <div><Mail size={16} aria-hidden="true" /><span>Business inquiries welcome</span></div>
            </div>
            <a className="contact-copy__link" href="#top">Back to the top <MoveUpRight size={15} aria-hidden="true" /></a>
            <span className="contact-panel__decoration" aria-hidden="true" />
          </div>
          <div className="contact-form-wrap">
            <div className="contact-form-wrap__heading">
              <span>01 / PROJECT INQUIRY</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
