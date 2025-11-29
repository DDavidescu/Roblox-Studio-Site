// src/animations/gsap/useGsapGamesGridSection.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapGamesGridSection(sectionRef, gridRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.children;

      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 28,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, gridRef]);
}

export default useGsapGamesGridSection;
