'use client';

import MediaSlider from '../../components/MediaSlider';
import { team } from '../../data/content';

function TeamCard({ member }) {
  return (
    <article className="team-card">
      <img
        src={member.image}
        alt={`Portrait of ${member.name}`}
        width={640}
        height={520}
        loading="lazy"
      />
      <div className="team-card__body">
        <h3>{member.name}</h3>
        <p className="team-card__role">{member.role}</p>
        <p className="team-card__bio">{member.bio}</p>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="team-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Team</p>
          <h1 id="team-title">People who sweat the details.</h1>
          <p className="page-hero__lede">
            Eighteen specialists across product, design, engineering, and quality — small enough to move,
            senior enough to own outcomes.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="team-grid-title">
        <div className="container">
          <h2 id="team-grid-title" className="sr-only">
            Team members
          </h2>

          <ul className="team-grid team-grid--desktop">
            {team.map((member) => (
              <li key={member.id}>
                <TeamCard member={member} />
              </li>
            ))}
          </ul>

          <div className="team-slider-wrap">
            <MediaSlider label="Team" trackClassName="team-slider-track" itemClassName="team-slider-item">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </MediaSlider>
          </div>
        </div>
      </section>
    </>
  );
}
