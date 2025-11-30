// src/sections/careers/WhyWorkHereSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/WhyWorkHereSection/WhyWorkHereSection.scss";
import useGsapCareersValues from "../../animations/gsap/useGsapCareersValues";

function WhyWorkHereSection({ values }) {
  const sectionRef = useRef(null);

  useGsapCareersValues(sectionRef);

  return (
    <section className="careers-values" ref={sectionRef}>
      <div className="careers-values__inner">
        <header className="careers-values__header">
          <p className="careers-values__eyebrow">Why work here</p>
          <h2 className="careers-values__title">Build worlds that matter.</h2>
          <p className="careers-values__subtitle">
            A small, senior team, cinematic experiences, and Roblox scale. Your
            work ships fast and is felt by millions.
          </p>
        </header>

        <div className="careers-values__grid">
          {values.map((value) => (
            <article key={value.id} className="careers-values__card">
              <div className="careers-values__icon" />
              <h3 className="careers-values__card-title">{value.title}</h3>
              <p className="careers-values__card-text">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWorkHereSection;
