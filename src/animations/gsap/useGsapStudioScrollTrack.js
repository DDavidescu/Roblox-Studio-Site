// src/animations/gsap/useGsapStudioScrollTrack.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapStudioScrollTrack(sectionRef, trackRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;

      const totalWidth = track.scrollWidth;
      const viewportWidth = section.offsetWidth;
      const distance = totalWidth - viewportWidth;

      if (distance <= 0) return;

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * 2}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 0.8,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, trackRef]);
}

export default useGsapStudioScrollTrack;
