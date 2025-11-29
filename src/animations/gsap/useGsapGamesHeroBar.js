// src/animations/gsap/useGsapGamesHeroBar.js
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapGamesHeroBar(sectionRef, titleRef, controlsRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current?.children || [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      }).from(
        controlsRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.25"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, titleRef, controlsRef]);
}

export default useGsapGamesHeroBar;
