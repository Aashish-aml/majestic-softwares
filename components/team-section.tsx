import { ArrowRight, Code2, Layers3, MessageCircle, Palette, ShieldCheck, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const team = [
  { count: '11', role: 'Software developers', description: 'Experienced engineers across frontend, backend, and full-stack development.', icon: Code2, tag: 'Engineering' },
  { count: '03', role: 'UI/UX designers', description: 'Thoughtful designers creating clear, accessible digital experiences.', icon: Palette, tag: 'Product design' },
  { count: '03', role: 'QA engineers', description: 'Quality specialists bringing rigor to release and reliability.', icon: ShieldCheck, tag: 'Quality' },
]

const principles: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Sparkles, title: 'Senior-minded collaboration', description: 'Experienced people working as one team, from discovery to delivery.' },
  { icon: Layers3, title: 'Built to keep working', description: 'Scalable architecture and maintainable code, without unnecessary complexity.' },
  { icon: ShieldCheck, title: 'Quality in the process', description: 'A quality-first mindset, with review and testing built into delivery.' },
  { icon: MessageCircle, title: 'Clear, remote collaboration', description: 'Open communication and practical agile teamwork across time zones.' },
]

export function TeamSection() {
  return (
    <section className="team-section section-pad" id="team" aria-labelledby="team-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow"><span className="eyebrow__line" /> The people behind the work</p>
            <h2 id="team-title">Small enough to care.<br /><span>Experienced enough to scale.</span></h2>
          </div>
          <p className="section-heading__aside">
            Distributed across India, our remote-first team brings design, engineering, and quality together
            around the outcomes that matter to you.
          </p>
        </div>

        <div className="team-grid">
          {team.map(({ count, role, description, icon: Icon, tag }) => (
            <article className="team-card" key={role}>
              <div className="team-card__top"><span>{tag}</span><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></div>
              <p className="team-card__count">{count}</p>
              <h3>{role}</h3>
              <p className="team-card__description">{description}</p>
            </article>
          ))}
        </div>

        <div className="remote-note">
          <div className="remote-note__icon" aria-hidden="true"><span /><span /></div>
          <p><strong>Remote by nature. Close by collaboration.</strong><span>Our India-based team works as a connected extension of yours.</span></p>
          <a href="#contact">Meet your next team <ArrowRight size={15} aria-hidden="true" /></a>
        </div>

        <div className="principles-grid" aria-label="Why work with Majestic Softwares">
          {principles.map(({ icon: Icon, title, description }) => (
            <article className="principle" key={title}>
              <Icon size={18} aria-hidden="true" />
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
