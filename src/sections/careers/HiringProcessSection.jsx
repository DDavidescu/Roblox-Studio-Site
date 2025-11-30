// src/sections/careers/HiringProcessSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/HiringProcessSection/HiringProcessSection.scss";
import useGsapCareersProcess from "../../animations/gsap/useGsapCareersProcess";

function HiringProcessSection({ steps }) {
  const sectionRef = useRef(null);

  useGsapCareersProcess(sectionRef);

  return (
    <section className="careers-process" ref={sectionRef}>
      <div className="careers-process__inner">
        <header className="careers-process__header">
          <p className="careers-process__eyebrow">Hiring process</p>
          <h2 className="careers-process__title">How we hire.</h2>
          <p className="careers-process__subtitle">
            Clear, predictable steps. No endless rounds. We respect your time and
            make sure you know where you stand.
          </p>
        </header>

        <div className="careers-process__timeline">
          <div className="careers-process__line" />
          <div className="careers-process__line-fill" />
          <div className="careers-process__steps">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="careers-process__step"
                data-step-index={index}
              >
                <div className="careers-process__step-marker" />
                <div className="careers-process__step-body">
                  <h3 className="careers-process__step-title">{step.title}</h3>
                  <p className="careers-process__step-text">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HiringProcessSection;
