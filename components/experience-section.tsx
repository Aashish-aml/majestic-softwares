import { Globe2, Layers3, RadioTower, Workflow } from 'lucide-react'

const experiencePoints = [
  { icon: Globe2, title: '45+ websites', text: 'Experience across a wide Spanish digital publishing ecosystem.' },
  { icon: RadioTower, title: 'Millions of visitors', text: 'Platforms serving large, diverse audiences at scale.' },
  { icon: Workflow, title: 'Complex systems', text: 'Content platforms, backend services, and connected APIs.' },
  { icon: Layers3, title: 'Performance in production', text: 'Practical work on reliability, optimization, and cloud infrastructure.' },
]

export function ExperienceSection() {
  return (
    <section className="experience-section section-pad" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="experience-intro">
          <div>
            <p className="eyebrow eyebrow--light"><span className="eyebrow__line" /> Experience at scale</p>
            <h2 id="experience-title">Big-platform experience.<br /><span>Thoughtful engineering.</span></h2>
          </div>
          <p className="experience-intro__copy">
            Our team brings hands-on experience from work on major Spanish digital publishing platforms—
            building, maintaining, and improving products used by millions.
          </p>
        </div>

        <div className="experience-grid">
          {experiencePoints.map(({ icon: Icon, title, text }, index) => (
            <article className="experience-point" key={title}>
              <div className="experience-point__top"><Icon size={18} aria-hidden="true" /><span>0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
