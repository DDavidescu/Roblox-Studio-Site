// src/sections/about/StudioTeamSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/about_sections_scss/StudioTeamSection/StudioTeamSection.scss";

import { studioStats, studioTeam } from "../../data/studio";
import useGsapAboutStudioTeam from "../../animations/gsap/useGsapAboutStudioTeam";

function StudioTeamSection() {
  const sectionRef = useRef(null);
  useGsapAboutStudioTeam(sectionRef);

  return (
    <section className="studio-team" ref={sectionRef}>
      <div className="studio-team__inner">
        <header className="studio-team__header">
          <p className="studio-team__eyebrow">The studio</p>
          <h2 className="studio-team__title">A focused, global, multidisciplinary team</h2>
          <p className="studio-team__intro">
            We work as a remote-first studio with collaborators across time zones. Designers,
            engineers, artists, and producers align around clear goals and thoughtful production
            rhythms.
          </p>
        </header>

        <div className="studio-team__stats-row">
          {studioStats.map((stat) => (
            <div key={stat.id} className="studio-team__stat">
              <div className="studio-team__stat-value">
                {stat.value}
                {stat.suffix && <span className="studio-team__stat-suffix">{stat.suffix}</span>}
              </div>
              <div className="studio-team__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="studio-team__grid">
          {studioTeam.map((member) => (
            <article key={member.id} className="studio-team__member-card">
              <div className="studio-team__avatar-placeholder">
                <span className="studio-team__avatar-initial">
                  {member.name.charAt(0)}
                </span>
              </div>
              <div className="studio-team__member-body">
                <h3 className="studio-team__member-name">{member.name}</h3>
                <p className="studio-team__member-role">{member.role}</p>
                <p className="studio-team__member-blurb">{member.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioTeamSection;
