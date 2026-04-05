// src/animations/gsap/useGsapCareersHero.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapCareersHero(sectionRef) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".careers-hero__shell", {
        opacity: 0,
        y: 28,
        duration: 0.7,
      })
        .from(".careers-hero__eyebrow", { opacity: 0, y: 16, duration: 0.35 }, "-=0.45")
        .from(".careers-hero__title", { opacity: 0, y: 24, duration: 0.5 }, "-=0.15")
        .from(".careers-hero__subtitle", { opacity: 0, y: 18, duration: 0.45 }, "-=0.3")
        .from(".careers-hero__badges > *", {
          opacity: 0,
          y: 12,
          stagger: 0.05,
          duration: 0.3,
        }, "-=0.2")
        .from([".careers-hero__visual-card", ".careers-hero__cta-card"], {
          opacity: 0,
          y: 22,
          scale: 0.98,
          stagger: 0.1,
          duration: 0.45,
        }, "-=0.35");
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}

export default useGsapCareersHero;
