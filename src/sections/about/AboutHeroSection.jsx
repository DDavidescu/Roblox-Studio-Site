// src/sections/about/AboutHeroSection.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/sections_scss/about_sections_scss/AboutHeroSection/AboutHeroSection.scss";

import { aboutHeroContent } from "../../data/studio";
import useGsapAboutHero from "../../animations/gsap/useGsapAboutHero";
import useStudioCoreParallax from "../../animations/motion/useStudioCoreParallax";

function AboutHeroSection() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  useGsapAboutHero(sectionRef, visualRef);

  const { style, handleMove, handleLeave } = useStudioCoreParallax();

  return (
    <section className="about-hero" ref={sectionRef}>
      <div className="about-hero__inner">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">Inside the studio</p>
          <h1 className="about-hero__title">{aboutHeroContent.title}</h1>
          <p className="about-hero__subtitle">{aboutHeroContent.subheading}</p>
          <p className="about-hero__intro">{aboutHeroContent.intro}</p>
        </div>

        <div
          className="about-hero__visual-wrapper"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <motion.div
            className="about-hero__visual"
            ref={visualRef}
            style={style}
          >
            <div className="about-hero__core-orbit about-hero__core-orbit--outer" />
            <div className="about-hero__core-orbit about-hero__core-orbit--inner" />
            <div className="about-hero__core">
              <span className="about-hero__core-fragment about-hero__core-fragment--one" />
              <span className="about-hero__core-fragment about-hero__core-fragment--two" />
              <span className="about-hero__core-fragment about-hero__core-fragment--three" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="about-hero__bg-noise" />
    </section>
  );
}

export default AboutHeroSection;
