'use client';

import { useContact } from '../../components/ContactProvider';

export default function AboutPage() {
  const { openContact } = useContact();

  return (
    <>
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">About</p>
          <h1 id="about-title">A studio built for accountable craft.</h1>
          <p className="page-hero__lede">
            MajesticSoftwares is a remote-first product studio. We embed with founders and digital teams
            to design, build, and harden the software customers actually use.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="about-story">
        <div className="container about-grid">
          <div>
            <h2 id="about-story">Why we exist</h2>
            <p>
              Too many digital projects ship as a pile of tickets: pretty mocks that never meet production,
              or engineering that never meets the brand. We started MajesticSoftwares to close that gap —
              senior design and engineering in one room, one roadmap, one definition of done.
            </p>
            <p>
              Our clients are usually Series A–C product companies, ambitious startups, and internal
              innovation groups who need a partner that can own outcomes without absorbing their culture.
            </p>
          </div>
          <figure className="about-figure">
            <img
              src="/beta/images/about.webp"
              alt="Geometric studio composition representing MajesticSoftwares workspace"
              width={800}
              height={500}
              loading="lazy"
            />
            <figcaption>Austin roots · collaborators across North America and Europe</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="about-values">
        <div className="container">
          <h2 id="about-values" className="section-title">
            How we work
          </h2>
          <ul className="value-grid">
            <li>
              <h3>Clarity over theater</h3>
              <p>Weekly demos, written decisions, and estimates you can take to leadership.</p>
            </li>
            <li>
              <h3>Craft with constraints</h3>
              <p>We design for the stack, timeline, and audience you actually have.</p>
            </li>
            <li>
              <h3>Access by default</h3>
              <p>Keyboard paths, semantic structure, and contrast are part of the definition of done.</p>
            </li>
            <li>
              <h3>Leave it better</h3>
              <p>Documentation, tests, and handoff so your team can evolve what we build.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="about-cta">
        <div className="container cta-band__inner">
          <h2 id="about-cta">Curious if we fit your next chapter?</h2>
          <p>Share a brief — even a rough one. We will respond with questions that matter.</p>
          <button type="button" className="btn btn--primary" onClick={openContact}>
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}
