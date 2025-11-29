// src/animations/gsap/useGsapGamesStatsCtaSection.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapGamesStatsCtaSection(sectionRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const stats = sectionRef.current.querySelectorAll(
        ".games-stats-cta__stat"
      );
      const ctas = sectionRef.current.querySelectorAll(
        ".games-stats-cta__btn"
      );

      gsap.from(stats, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 18,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.08,
      });

      gsap.from(ctas, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 10,
        opacity: 0,
        duration: 0.45,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}

export default useGsapGamesStatsCtaSection;
