import { ArrowRight, ArrowUpRight, Boxes, Braces, Database, Layers3 } from 'lucide-react'

const architectureNodes = [
  { icon: Braces, label: 'Web applications', detail: 'React · Next.js', className: 'architecture-card--web' },
  { icon: Boxes, label: 'APIs & services', detail: 'Flexible by design', className: 'architecture-card--api' },
  { icon: Database, label: 'Data platforms', detail: 'Built for scale', className: 'architecture-card--data' },
]

export function MajesticHero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow__line" /> Remote engineering, India-based</p>
            <h1 id="hero-title">Building scalable digital experiences that <span>drive growth.</span></h1>
            <p className="hero-copy__description">
              A close-knit team of experienced developers, designers, and QA engineers helping ambitious
              businesses build software that lasts.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">
                Let&apos;s discuss your project <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button button--text" href="#services">
                Explore our expertise <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true">
                <span>DE</span><span>UX</span><span>QA</span>
              </div>
              <p><strong>17 professionals</strong><span>One collaborative, remote-first team</span></p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of a connected software platform">
            <div className="hero-art__topline">
              <span className="status-dot" /> Engineering systems, thoughtfully connected
              <span className="hero-art__index">MS / 01</span>
            </div>
            <div className="architecture-board">
              <div className="architecture-board__label"><Layers3 size={15} aria-hidden="true" /> PLATFORM ARCHITECTURE</div>
              <div className="architecture-board__core">
                <div className="architecture-core__mark"><span>m</span><span className="core-spark" /></div>
                <strong>Digital products</strong>
                <span>Made to move forward</span>
              </div>
              <div className="architecture-connectors" aria-hidden="true">
                <span /><span /><span />
              </div>
              <div className="architecture-nodes">
                {architectureNodes.map(({ icon: Icon, label, detail, className }) => (
                  <div className={`architecture-card ${className}`} key={label}>
                    <span className="architecture-card__icon"><Icon size={16} aria-hidden="true" /></span>
                    <span><strong>{label}</strong><small>{detail}</small></span>
                    <span className="architecture-card__arrow" aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
              <div className="architecture-board__footer">
                <span>Built for reliability</span><span className="footer-mark" /><span>Ready to scale</span>
              </div>
            </div>
            <div className="hero-art__note"><span>17</span><span>minds behind<br />what&apos;s next</span></div>
            <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
            <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          </div>
        </div>

        <div className="hero-footnote">
          <span>Experience shaped by complex, high-traffic digital platforms</span>
          <a href="#experience">See the work behind our experience <ArrowRight size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  )
}
