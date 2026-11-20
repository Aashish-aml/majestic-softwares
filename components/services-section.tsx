import {
  Activity, AppWindow, Blocks, Braces, Cloud, Code2, Database, Gauge, GitBranch,
  LayoutDashboard, Rocket, ShieldCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const services: { number: string; icon: LucideIcon; title: string; description: string }[] = [
  { number: '01', icon: Code2, title: 'Custom software development', description: 'Purpose-built software shaped around your workflows, customers, and long-term goals.' },
  { number: '02', icon: AppWindow, title: 'Full-stack web development', description: 'End-to-end web applications, from polished interfaces through robust backend services.' },
  { number: '03', icon: Blocks, title: 'Enterprise applications', description: 'Maintainable, secure systems designed for connected teams and complex operations.' },
  { number: '04', icon: Braces, title: 'PHP & Symfony development', description: 'Reliable PHP platforms, modern Symfony applications, and ongoing product support.' },
  { number: '05', icon: LayoutDashboard, title: 'React & Next.js development', description: 'Fast, accessible digital experiences built for the modern web.' },
  { number: '06', icon: Code2, title: 'WordPress development', description: 'Flexible publishing platforms, custom themes, and integrations built to scale.' },
  { number: '07', icon: GitBranch, title: 'API development & integration', description: 'Well-structured APIs that connect products, data, and third-party services.' },
  { number: '08', icon: Cloud, title: 'AWS cloud solutions', description: 'Cloud architectures that balance resilience, performance, and cost.' },
  { number: '09', icon: Activity, title: 'DevOps & infrastructure automation', description: 'Repeatable delivery pipelines and infrastructure managed with confidence.' },
  { number: '10', icon: Database, title: 'Database design & optimization', description: 'Thoughtful data models and query tuning for dependable applications.' },
  { number: '11', icon: ShieldCheck, title: 'QA & automation testing', description: 'Manual and automated quality practices that catch issues before release.' },
  { number: '12', icon: Gauge, title: 'Performance & scalability', description: 'Targeted improvements to load times, responsiveness, and platform headroom.' },
]

export function ServicesSection() {
  return (
    <section className="services-section section-pad" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow"><span className="eyebrow__line" /> What we do</p>
            <h2 id="services-title">From first commit<br />to <span>what&apos;s next.</span></h2>
          </div>
          <p className="section-heading__aside">
            A considered, collaborative approach at every stage—from exploring a new idea to evolving
            a platform that already serves millions.
          </p>
        </div>

        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description }) => (
            <article className="service-item" key={number}>
              <div className="service-item__meta"><span>{number}</span><Icon size={19} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <span className="services-cta__icon"><Rocket size={19} aria-hidden="true" /></span>
          <p>Have a challenge that doesn&apos;t fit a box? <span>Let&apos;s build the right team around it.</span></p>
          <a href="#contact" aria-label="Tell us about your project">Tell us about your project <Rocket size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
