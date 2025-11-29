// src/animations/gsap/useGsapFooterSection.js

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && gsap && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function useGsapFooterSection(footerRef, columnRefs) {
  useEffect(() => {
    const footerEl = footerRef.current;
    const columns = columnRefs.current.filter(Boolean);

    if (!footerEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerEl,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerEl,
            start: "top bottom-=12%",
            once: true,
          },
        }
      );

      if (columns.length) {
        gsap.from(columns, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          delay: 0.05,
          scrollTrigger: {
            trigger: footerEl,
            start: "top bottom",
            once: true,
          },
        });
      }
    }, footerEl);

    return () => ctx.revert();
  }, [footerRef, columnRefs]);
}
