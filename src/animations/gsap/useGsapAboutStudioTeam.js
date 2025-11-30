// src/animations/gsap/useGsapAboutStudioTeam.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapAboutStudioTeam(sectionRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray(".studio-team__stat");
      const members = gsap.utils.toArray(".studio-team__member-card");

      gsap.from(stats, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.from(members, {
        scrollTrigger: {
          trigger: ".studio-team__grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);
}

export default useGsapAboutStudioTeam;
