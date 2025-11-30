// src/sections/careers/CareersFaqSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/careers_sections_scss/CareersFaqSection/CareersFaqSection.scss";
import useGsapCareersFaq from "../../animations/gsap/useGsapCareersFaq";
import Accordion from "../../components/ui/Accordion";

function CareersFaqSection({ items }) {
  const sectionRef = useRef(null);

  useGsapCareersFaq(sectionRef);

  return (
    <section className="careers-faq" ref={sectionRef}>
      <div className="careers-faq__inner">
        <header className="careers-faq__header">
          <p className="careers-faq__eyebrow">FAQ</p>
          <h2 className="careers-faq__title">Questions about joining.</h2>
          <p className="careers-faq__subtitle">
            A few common answers about how we work, how we hire, and what to
            expect when you apply.
          </p>
        </header>

        <Accordion items={items} />
      </div>
    </section>
  );
}

export default CareersFaqSection;
