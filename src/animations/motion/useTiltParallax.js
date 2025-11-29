// src/animations/motion/useTiltParallax.js
import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

const MAX_TILT = 10; // degrees

export const useTiltParallax = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]);

  const motionStyle = {
    rotateX,
    rotateY,
    transformPerspective: 900,
    "--mx": "50%",
    "--my": "50%",
  };

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const ratioX = offsetX / rect.width - 0.5;
    const ratioY = offsetY / rect.height - 0.5;

    x.set(ratioX);
    y.set(ratioY);

    const mx = `${(offsetX / rect.width) * 100}%`;
    const my = `${(offsetY / rect.height) * 100}%`;

    // eslint-disable-next-line no-param-reassign
    motionStyle["--mx"] = mx;
    // eslint-disable-next-line no-param-reassign
    motionStyle["--my"] = my;
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    // reset spotlight to center
    // eslint-disable-next-line no-param-reassign
    motionStyle["--mx"] = "50%";
    // eslint-disable-next-line no-param-reassign
    motionStyle["--my"] = "50%";
  };

  return {
    cardRef,
    motionStyle,
    handleMouseMove,
    handleMouseLeave,
  };
};
