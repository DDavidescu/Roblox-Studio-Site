// src/animations/motion/useGameCardTiltParallax.js
import { useCallback, useRef } from "react";
import { useMotionValue, useTransform } from "framer-motion";

function useGameCardTiltParallax({ maxRotate = 8 } = {}) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const motionStyle = {
    transformPerspective: 900,
    rotateX,
    rotateY,
  };

  const handleMouseMove = useCallback(
    (event) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const ratioX = (x - centerX) / centerX;
      const ratioY = (y - centerY) / centerY;

      rotateY.set(-ratioX * maxRotate);
      rotateX.set(ratioY * maxRotate);
    },
    [maxRotate, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return {
    cardRef,
    motionStyle,
    handleMouseMove,
    handleMouseLeave,
  };
}

export default useGameCardTiltParallax;
