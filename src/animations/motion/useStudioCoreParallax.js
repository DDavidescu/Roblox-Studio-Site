// src/animations/motion/useStudioCoreParallax.js
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useCallback } from "react";

function useStudioCoreParallax() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);

  const rX = useSpring(rotateX, { stiffness: 120, damping: 18, mass: 0.4 });
  const rY = useSpring(rotateY, { stiffness: 120, damping: 18, mass: 0.4 });
  const tX = useSpring(translateX, { stiffness: 120, damping: 18, mass: 0.4 });
  const tY = useSpring(translateY, { stiffness: 120, damping: 18, mass: 0.4 });

  const handleMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    const rotateAmount = 10;
    const translateAmount = 12;

    rotateX.set((-y / rect.height) * rotateAmount);
    rotateY.set((x / rect.width) * rotateAmount);
    translateX.set((x / rect.width) * translateAmount);
    translateY.set((y / rect.height) * translateAmount);
  }, [rotateX, rotateY, translateX, translateY]);

  const handleLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    translateX.set(0);
    translateY.set(0);
  }, [rotateX, rotateY, translateX, translateY]);

  const style = {
    rotateX: rX,
    rotateY: rY,
    x: tX,
    y: tY,
  };

  return { style, handleMove, handleLeave };
}

export default useStudioCoreParallax;
