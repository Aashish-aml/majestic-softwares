'use client';

import Link from 'next/link';
import { useContact } from '../components/ContactProvider';
import { projects, services } from '../data/content';

export default function HomePage() {
  const { openContact } = useContact();
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero" aria-labelledby="hero-brand">
        <div className="hero__media">
          <img
            src="/beta/images/hero.webp"
            alt="Abstract atmospheric studio backdrop with warm studio light"
            className="hero__image"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__content">
          <h1 id="hero-brand" className="hero__brand">
            MajesticSoftwares
          </h1>
          <p className="hero__headline">Software that feels inevitable.</p>
          <p className="hero__lede">
            A remote-first studio crafting websites, applications, and interfaces for teams who refuse generic.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={openContact}>
              Start a project
            </button>
            <Link href="/work" className="btn btn--ghost">
              View our work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="home-approach">
        <div className="container split">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 id="home-approach" className="section-title">
              Fewer screens. Stronger signal.
            </h2>
          </div>
          <p className="section-copy">
            We pair product strategy with senior engineering so your launch looks considered, loads quickly,
            and stays maintainable after the champagne. No purple templates. No mystery process.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="home-work">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="home-work" className="section-title">
                Recent collaborations
              </h2>
            </div>
            <Link href="/work" className="text-link">
              All projects
            </Link>
          </div>
          <ul className="work-grid">
            {featured.map((project, index) => (
              <li key={project.id} className={`work-card work-card--home delay-${index}`}>
                <Link href="/work" className="work-card__link">
                  <div className="media-frame">
                    <img
                      src={project.image}
                      alt={`Cover for ${project.title}`}
                      width={1200}
                      height={750}
                      loading="lazy"
                    />
                  </div>
                  <div className="work-card__meta">
                    <h3>{project.title}</h3>
                    <p>
                      {project.category} · {project.year}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="home-services">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="home-services" className="section-title">
                What we ship
              </h2>
            </div>
            <Link href="/services" className="text-link">
              Full services
            </Link>
          </div>
          <ul className="service-list">
            {services.slice(0, 4).map((service) => (
              <li key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="home-cta">
        <div className="container cta-band__inner">
          <h2 id="home-cta">Have a product that deserves better craft?</h2>
          <p>Tell us what you are building. We will tell you honestly if we are the right fit.</p>
          <button type="button" className="btn btn--primary" onClick={openContact}>
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}
