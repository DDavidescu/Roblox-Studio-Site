// src/sections/about/OurStoryTimelineSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/about_sections_scss/OurStoryTimelineSection/OurStoryTimelineSection.scss";

import { timelineMilestones } from "../../data/studio";
import useGsapAboutTimeline from "../../animations/gsap/useGsapAboutTimeline";

function OurStoryTimelineSection() {
  const sectionRef = useRef(null);
  useGsapAboutTimeline(sectionRef);

  return (
    <section className="story-timeline" ref={sectionRef}>
      <div className="story-timeline__inner">
        <div className="story-timeline__header">
          <p className="story-timeline__eyebrow">Our Story</p>
          <h2 className="story-timeline__title">How our worlds came together</h2>
          <p className="story-timeline__intro">
            From late-night prototypes to live universes, our path has been shaped by curiosity,
            experimentation, and a player-first mindset.
          </p>
        </div>

        <div className="story-timeline__body">
          <div className="story-timeline__line">
            <div className="story-timeline__line-inner" />
          </div>
          <div className="story-timeline__items">
            {timelineMilestones.map((item) => (
              <article key={item.year} className="story-timeline__item">
                <div className="story-timeline__year">{item.year}</div>
                <div className="story-timeline__card">
                  <h3 className="story-timeline__item-title">{item.title}</h3>
                  <p className="story-timeline__item-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStoryTimelineSection;
