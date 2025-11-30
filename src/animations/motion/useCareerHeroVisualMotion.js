// src/animations/motion/useCareerHeroVisualMotion.js
export default function useCareerHeroVisualMotion() {
  const floatingVariants = {
    initial: { scale: 0.9, opacity: 0.9 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, y: 8 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + index * 0.08,
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2 + index * 0.1,
      },
    }),
  };

  return { floatingVariants, particleVariants };
}
