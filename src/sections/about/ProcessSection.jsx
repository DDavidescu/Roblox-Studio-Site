// src/sections/about/ProcessSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/about_sections_scss/ProcessSection/ProcessSection.scss";

import { processSteps } from "../../data/studio";
import useGsapAboutProcess from "../../animations/gsap/useGsapAboutProcess";

function ProcessSection() {
  const sectionRef = useRef(null);
  useGsapAboutProcess(sectionRef);

  return (
    <section className="process" ref={sectionRef}>
      <div className="process__inner">
        <header className="process__header">
          <p className="process__eyebrow">How we build</p>
          <h2 className="process__title">From spark to live universe</h2>
          <p className="process__intro">
            Our production pipeline balances experimentation with reliable delivery, so we can
            iterate quickly without losing focus.
          </p>
        </header>

        <div className="process__track">
          <div className="process__progress">
            <div className="process__progress-fill" />
          </div>

          <div className="process__steps">
            {processSteps.map((step, index) => (
              <div key={step.id} className="process__step">
                <div className="process__step-index">
                  <span>{index + 1}</span>
                </div>
                <div className="process__step-icon">{step.icon}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
