// src/animations/gsap/useGsapAboutTimeline.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapAboutTimeline(sectionRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".story-timeline__item");

      gsap.from(".story-timeline__line-inner", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
      });

      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.05,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}

export default useGsapAboutTimeline;
