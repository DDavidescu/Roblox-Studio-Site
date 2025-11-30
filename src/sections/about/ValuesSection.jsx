// src/sections/about/ValuesSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/about_sections_scss/ValuesSection/ValuesSection.scss";

import { studioValues } from "../../data/studio";
import useGsapAboutValues from "../../animations/gsap/useGsapAboutValues";

function ValuesSection() {
  const sectionRef = useRef(null);
  useGsapAboutValues(sectionRef);

  return (
    <section className="values" ref={sectionRef}>
      <div className="values__inner">
        <header className="values__header">
          <p className="values__eyebrow">What we believe</p>
          <h2 className="values__title">Values that guide every world we ship</h2>
          <p className="values__intro">
            These principles steer how we design, build, and grow the experiences inside our
            creative universe.
          </p>
        </header>

        <div className="values__grid">
          {studioValues.map((value) => (
            <article key={value.id} className="values__card">
              <div className="values__icon-wrapper">
                <span className="values__icon">{value.icon}</span>
              </div>
              <h3 className="values__card-title">{value.title}</h3>
              <p className="values__card-text">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
