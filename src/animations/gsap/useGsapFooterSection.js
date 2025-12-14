// src/animations/gsap/useGsapFooterSection.js

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useGsapFooterSection(footerRef, columnRefs) {
  useLayoutEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const columns = (columnRefs.current || []).filter(Boolean);
    const lower = footerEl.querySelector(".footer__lower");

    const ctx = gsap.context(() => {
      // keep footer background visible at all times
      gsap.set(footerEl, { opacity: 1, y: 0 });

      // animate only content (columns + lower row)
      const targets = lower ? [...columns, lower] : columns;

      if (targets.length) {
        gsap.set(targets, { opacity: 0, y: 28 });
        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: footerEl,
            start: "top bottom-=12%",
            once: true,
          },
        });
      }
    }, footerEl);

    return () => ctx.revert();
  }, []);
}
