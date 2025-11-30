// src/sections/careers/CulturePerksSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/CulturePerksSection/CulturePerksSection.scss";
import useGsapCareersPerks from "../../animations/gsap/useGsapCareersPerks";

function CulturePerksSection({ perks }) {
  const sectionRef = useRef(null);

  useGsapCareersPerks(sectionRef);

  return (
    <section className="careers-perks" ref={sectionRef}>
      <div className="careers-perks__inner">
        <header className="careers-perks__header">
          <p className="careers-perks__eyebrow">Culture & perks</p>
          <h2 className="careers-perks__title">A studio built for humans.</h2>
          <p className="careers-perks__subtitle">
            No crunch. Clear expectations. Remote-first rituals. We build
            ambitious worlds without burning out the people behind them.
          </p>
        </header>

        <div className="careers-perks__grid">
          {perks.map((perk) => (
            <article key={perk.id} className="careers-perks__item">
              <div className="careers-perks__glyph" />
              <div className="careers-perks__body">
                <h3 className="careers-perks__label">{perk.label}</h3>
                <p className="careers-perks__description">
                  {perk.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CulturePerksSection;
