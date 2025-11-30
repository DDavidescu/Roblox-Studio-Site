// src/animations/gsap/useGsapCareersOpenPositions.js
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapCareersOpenPositions(sectionRef, listRef) {
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".jobs-filter",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      if (listRef?.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 76%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, listRef]);
}

export default useGsapCareersOpenPositions;
