// src/animations/gsap/useGsapAboutHero.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

function useGsapAboutHero(sectionRef, visualRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

      tl.from(".about-hero__eyebrow", { y: 20, opacity: 0 })
        .from(".about-hero__title", { y: 24, opacity: 0 }, "-=0.4")
        .from(".about-hero__subtitle", { y: 20, opacity: 0 }, "-=0.5")
        .from(".about-hero__intro", { y: 18, opacity: 0 }, "-=0.5");

      if (visualRef?.current) {
        gsap.fromTo(
          visualRef.current,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, visualRef]);
}

export default useGsapAboutHero;
