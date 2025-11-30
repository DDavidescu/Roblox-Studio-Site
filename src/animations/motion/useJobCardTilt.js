// src/animations/motion/useJobCardTilt.js
import { useRef } from "react";

export default function useJobCardTilt() {
  const cardRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -6;
    const rotateY = ((x - midX) / midX) * 6;

    cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
  };

  return { cardRef, handleMouseMove, handleMouseLeave };
}
