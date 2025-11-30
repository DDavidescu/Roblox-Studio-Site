// src/sections/careers/CareersHeroSection.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import "../../styles/sections_scss/careers_sections_scss/CareersHeroSection/CareersHeroSection.scss";

import useGsapCareersHero from "../../animations/gsap/useGsapCareersHero";
import CareersHeroVisual from "../../components/visuals/CareersHeroVisual";
import TagPill from "../../components/ui/TagPill";

function CareersHeroSection({ studioName, badges }) {
  const sectionRef = useRef(null);

  useGsapCareersHero(sectionRef);

  return (
    <section className="careers-hero" ref={sectionRef}>
      <div className="careers-hero__bg" />
      <div className="careers-hero__inner">
        <div className="careers-hero__content">
          <motion.p
            className="careers-hero__eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Join the studio
          </motion.p>

          <motion.h1
            className="careers-hero__title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            Careers at {studioName}
          </motion.h1>

          <motion.p
            className="careers-hero__subtitle"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Join the team creating Roblox universes for millions of players.
          </motion.p>

          <motion.div
            className="careers-hero__badges"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delayChildren: 0.15,
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            {badges.map((badge) => (
              <motion.div
                key={badge}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <TagPill label={badge} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="careers-hero__visual">
          <CareersHeroVisual />
        </div>
      </div>
    </section>
  );
}

export default CareersHeroSection;
