// src/sections/home/OurStudioSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/home_sections_scss/OurStudioSection/ourStudioSection.scss";

import StudioPillar from "../../components/info/StudioPillar";
import StudioCinematicVisual from "../../components/visuals/StudioCinematicVisual";

import { studioSection, studioPillars } from "../../data/studio";
import useGsapOurStudioSection from "../../animations/gsap/useGsapOurStudioSection";

function OurStudioSection() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const pillarsRef = useRef([]);

  useGsapOurStudioSection(sectionRef, pillarsRef, visualRef);

  return (
    <section className="our-studio" ref={sectionRef} id="our-studio">
      <div className="our-studio__inner">
        <div className="our-studio__content">
          <p className="our-studio__eyebrow">{studioSection.eyebrow}</p>
          <h2 className="our-studio__title">{studioSection.title}</h2>
          <p className="our-studio__subtitle">{studioSection.subtitle}</p>
          <p className="our-studio__description">{studioSection.description}</p>

          <div className="our-studio__pillars">
            {studioPillars.map((pillar, i) => (
              <StudioPillar
                key={pillar.id}
                icon={pillar.icon}
                label={pillar.label}
                description={pillar.description}
                innerRef={(el) => (pillarsRef.current[i] = el)}
              />
            ))}
          </div>
        </div>

        <div className="our-studio__visual-wrapper" ref={visualRef}>
          <StudioCinematicVisual />
        </div>
      </div>
    </section>
  );
}

export default OurStudioSection;
