'use client';

import { useContact } from '../../components/ContactProvider';
import MediaSlider from '../../components/MediaSlider';
import { services } from '../../data/content';

function ServiceCard({ service }) {
  return (
    <article className="service-detail">
      <img
        src={service.image}
        alt=""
        width={640}
        height={360}
        loading="lazy"
        aria-hidden="true"
      />
      <div>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <ul className="service-detail__points">
          {service.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const { openContact } = useContact();

  return (
    <>
      <section className="page-hero" aria-labelledby="services-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Services</p>
          <h1 id="services-title">Capabilities matched to real product work.</h1>
          <p className="page-hero__lede">
            Engage us for a focused workstream or an end-to-end build. Every engagement includes senior
            oversight, accessible delivery, and a handoff your team can own.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="services-list">
        <div className="container">
          <h2 id="services-list" className="sr-only">
            Service offerings
          </h2>

          <ul className="services-detail services-detail--desktop">
            {services.map((service) => (
              <li key={service.id}>
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>

          <div className="services-slider-wrap">
            <MediaSlider
              label="Services"
              trackClassName="services-slider-track"
              itemClassName="services-slider-item"
            >
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </MediaSlider>
          </div>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="services-cta">
        <div className="container cta-band__inner">
          <h2 id="services-cta">Not sure which service fits?</h2>
          <p>Describe the outcome. We will recommend a shape of engagement — or tell you who else to call.</p>
          <button type="button" className="btn btn--primary" onClick={openContact}>
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}
