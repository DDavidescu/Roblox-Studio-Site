// src/animations/gsap/useGsapAboutProcess.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapAboutProcess(sectionRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".process__step");

      gsap.from(".process__progress-fill", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
      });

      gsap.from(steps, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}

export default useGsapAboutProcess;
