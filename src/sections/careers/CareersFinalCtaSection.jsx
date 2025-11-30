// src/sections/careers/CareersFinalCtaSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/CareersFinalCtaSection/CareersFinalCtaSection.scss";
import useGsapCareersCta from "../../animations/gsap/useGsapCareersCta";

function CareersFinalCtaSection() {
  const sectionRef = useRef(null);

  useGsapCareersCta(sectionRef);

  return (
    <section className="careers-cta" ref={sectionRef}>
      <div className="careers-cta__inner">
        <div className="careers-cta__glow" />
        <div className="careers-cta__content">
          <h2 className="careers-cta__title">Ready to build with us?</h2>
          <p className="careers-cta__subtitle">
            We&apos;re always looking for passionate creators who care about feel,
            craft, and players.
          </p>
          <div className="careers-cta__actions">
            <a
              href="#open-positions"
              className="careers-cta__btn careers-cta__btn--primary"
            >
              View open roles
            </a>
            <a
              href="mailto:jobs@yourstudio.dev"
              className="careers-cta__btn careers-cta__btn--ghost"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersFinalCtaSection;
