// src/components/visuals/CareersHeroVisual.jsx
import { motion } from "framer-motion";
import "./CareersHeroVisual/CareersHeroVisual.scss";
import useCareerHeroVisualMotion from "../../animations/motion/useCareerHeroVisualMotion";

const ROLE_CHIPS = [
  "Roblox Engineers",
  "Technical Artists",
  "World Builders",
  "System Designers",
  "Producers",
];

function CareersHeroVisual() {
  const { floatingVariants, particleVariants } = useCareerHeroVisualMotion();

  return (
    <div className="careers-hero-visual">
      <div className="careers-hero-visual__glow" />
      <motion.div
        className="careers-hero-visual__orb"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      />
      <div className="careers-hero-visual__chips">
        {ROLE_CHIPS.map((chip, index) => (
          <motion.span
            key={chip}
            className="careers-hero-visual__chip"
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={index}
          >
            {chip}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default CareersHeroVisual;
