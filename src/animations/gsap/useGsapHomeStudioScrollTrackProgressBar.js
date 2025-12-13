// src/animations/gsap/useGsapHomeStudioScrollTrackProgressBar.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useGsapHomeStudioScrollTrackProgressBar(sectionRef) {
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const root = sectionRef.current;
      const fill = root.querySelector(".studio-scroll__progress-fill");
      const slides = gsap.utils.toArray(".studio-scroll__slide", root);

      if (!fill || !slides.length) return;

      gsap.set(fill, { scaleX: 0, transformOrigin: "left center" });

      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => gsap.set(fill, { scaleX: self.progress }),
      });

      slides.forEach((slide, index) => {
        const heading = slide.querySelector(".studio-scroll__heading");
        const body = slide.querySelector(".studio-scroll__body");

        gsap.from([heading, body].filter(Boolean), {
          scrollTrigger: {
            trigger: slide,
            start: "top 75%",
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

export default useGsapHomeStudioScrollTrackProgressBar;
