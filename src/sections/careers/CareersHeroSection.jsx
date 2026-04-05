// src/sections/careers/CareersHeroSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/CareersHeroSection/CareersHeroSection.scss";

import useGsapCareersHero from "../../animations/gsap/useGsapCareersHero";
import CareersHeroVisual from "../../components/visuals/CareersHeroVisual";
import TagPill from "../../components/ui/TagPill";

function CareersHeroSection({ studioName, badges, openRoleCount }) {
  const sectionRef = useRef(null);
  const hasOpenRoles = openRoleCount > 0;

  useGsapCareersHero(sectionRef);

  const handleViewRolesClick = (event) => {
    event.preventDefault();

    const target = document.getElementById("open-positions");
    if (!target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetY = Math.max(target.getBoundingClientRect().top + window.scrollY - 24, 0);

    if (reducedMotion) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      return;
    }

    const startY = window.scrollY;
    const duration = 1400;
    let startTime = null;

    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const nextY = startY + (targetY - startY) * easeInOutCubic(progress);

      window.scrollTo(0, nextY);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <section className="careers-hero" ref={sectionRef}>
      <div className="careers-hero__bg" />
      <div className="careers-hero__inner">
        <div className="careers-hero__shell">
          <div className="careers-hero__content">
            <p className="careers-hero__eyebrow">Join the studio</p>

            <h1 className="careers-hero__title">Careers at {studioName}</h1>

            <p className="careers-hero__subtitle">
              Join the team creating Roblox universes for millions of players.
            </p>

            <div className="careers-hero__badges">
              {badges.map((badge) => (
                <div key={badge}>
                  <TagPill label={badge} />
                </div>
              ))}
            </div>
          </div>

          <div className="careers-hero__stack">
            <article className="careers-hero__visual-card">
              <div className="careers-hero__panel-copy">
                <p className="careers-hero__panel-eyebrow">Where you fit</p>
                <p className="careers-hero__panel-text">
                  Engineers, artists, designers, and producers shaping high-feel Roblox worlds
                  together across time zones.
                </p>
              </div>

              <div className="careers-hero__visual">
                <CareersHeroVisual />
              </div>
            </article>

            <article className="careers-hero__cta-card">
              <div className="careers-hero__cta-head">
                <h2 className="careers-hero__cta-title">Ready to build with us?</h2>
              </div>

              {hasOpenRoles ? (
                <p className="careers-hero__cta-text">
                  We&apos;re always looking for passionate creators who care about feel, craft,
                  and players.
                </p>
              ) : (
                <div className="careers-hero__cta-note">
                  <p className="careers-hero__cta-text">No open positions right now.</p>
                  <p className="careers-hero__cta-text">
                    But we&apos;re growing, and new roles will be available soon.
                  </p>
                  <p className="careers-hero__cta-text">
                    Got a great idea or think you&apos;d be a good fit? Reach out.
                  </p>
                </div>
              )}

              <div className="careers-hero__actions">
                <a
                  href="#open-positions"
                  className="careers-hero__action careers-hero__action--primary"
                  onClick={handleViewRolesClick}
                >
                  View open roles
                </a>
                <a
                  href="mailto:jobs@karpathgames.dev"
                  className="careers-hero__action careers-hero__action--ghost"
                >
                  Email us
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersHeroSection;
