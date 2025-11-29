// src/animations/motion/useStudioVisualInteraction.js
import { useRef, useCallback } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

function useStudioVisualInteraction() {
  const containerRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const easedX = useSpring(rawX, { stiffness: 140, damping: 20, mass: 0.6 });
  const easedY = useSpring(rawY, { stiffness: 140, damping: 20, mass: 0.6 });

  const intensityBase = useSpring(0, { stiffness: 120, damping: 18, mass: 0.7 });

  const parallaxSmall = {
    x: useTransform(easedX, (v) => v * 8),
    y: useTransform(easedY, (v) => v * 8),
  };

  const parallaxLarge = {
    x: useTransform(easedX, (v) => v * 16),
    y: useTransform(easedY, (v) => v * 16),
  };

  const opacitySoft = useTransform(intensityBase, [0, 1], [0.5, 1]);
  const opacityStrong = useTransform(intensityBase, [0, 1], [0.4, 1]);
  const opacityCaption = useTransform(intensityBase, [0, 1], [0.8, 1]);
  const scaleCore = useTransform(intensityBase, [0, 1], [1, 1.15]);

  const boxShadow = useTransform(
    intensityBase,
    (v) =>
      `0 26px 70px rgba(15,23,42,${0.6 + v * 0.25}), 0 0 0 1px rgba(129,140,248,${
        0.4 + v * 0.25
      })`
  );

  const handleMouseMove = useCallback(
    (event) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      const clampedX = Math.max(-0.5, Math.min(0.5, x));
      const clampedY = Math.max(-0.5, Math.min(0.5, y));

      rawX.set(clampedX * 2);
      rawY.set(clampedY * 2);
      intensityBase.set(1);
    },
    [rawX, rawY, intensityBase]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    intensityBase.set(0);
  }, [rawX, rawY, intensityBase]);

  return {
    containerRef,
    handleMouseMove,
    handleMouseLeave,
    parallaxSmall,
    parallaxLarge,
    intensity: {
      opacitySoft,
      opacityStrong,
      opacityCaption,
      scaleCore,
      boxShadow,
    },
  };
}

export default useStudioVisualInteraction;
