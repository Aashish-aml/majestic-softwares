import { ArrowDownRight, Check } from 'lucide-react'

const strengths = [
  'Senior-minded developers, designers, and QA engineers',
  'Experience across international, high-traffic platforms',
  'Performance, maintainability, and code quality at the core',
]

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow__line" /> A little about us</p>
          <h2 id="about-title">Good software is built with <span>care.</span></h2>
          <p className="about-copy__lead">
            Majestic Softwares is a remote-first software development and IT consulting team based in India.
            We bring engineering, design, and quality together to take digital products further.
          </p>
          <p className="about-copy__detail">
            From a new product to a complex platform already in motion, we work closely with your team to
            build systems that are useful today, easier to maintain tomorrow, and ready for what comes next.
          </p>
          <a className="about-link" href="#experience">Get to know our experience <ArrowDownRight size={16} aria-hidden="true" /></a>
        </div>

        <div className="about-note">
          <div className="about-note__top"><span>HOW WE WORK</span><span>MS / INDIA</span></div>
          <p className="about-note__statement">Strong fundamentals.<br /><span>Real collaboration.</span><br />Lasting outcomes.</p>
          <ul className="about-strengths">
            {strengths.map((strength) => (
              <li key={strength}><span><Check size={13} aria-hidden="true" /></span>{strength}</li>
            ))}
          </ul>
          <div className="about-note__footer"><span>17 specialists</span><span className="about-note__footer-dot" /><span>One connected team</span></div>
        </div>
      </div>
    </section>
  )
}
