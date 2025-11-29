// src/animations/gsap/useGsapOurStudioSection.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapOurStudioSection(sectionRef, pillarsRef, visualRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const pillars = (pillarsRef?.current || []).filter(Boolean);
      const visual = visualRef?.current;

      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (pillars.length) {
        gsap.from(pillars, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (visual) {
        gsap.from(visual, {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, pillarsRef, visualRef]);
}

export default useGsapOurStudioSection;
