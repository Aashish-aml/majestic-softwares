import { projects } from '../../data/content';

export default function WorkPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="work-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Work</p>
          <h1 id="work-title">Portfolio with a point of view.</h1>
          <p className="page-hero__lede">
            Sample engagements that show how we balance brand presence, product clarity, and technical durability.
            Names and details are representative studio examples.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-list">
        <div className="container">
          <h2 id="work-list" className="sr-only">
            Project list
          </h2>
          <ul className="portfolio-list">
            {projects.map((project) => (
              <li key={project.id} className="portfolio-item">
                <article>
                  <div className="media-frame">
                    <img
                      src={project.image}
                      alt={`Project cover for ${project.title}`}
                      width={1200}
                      height={750}
                      loading="lazy"
                    />
                  </div>
                  <div className="portfolio-item__body">
                    <p className="portfolio-item__meta">
                      {project.category} · {project.year}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
