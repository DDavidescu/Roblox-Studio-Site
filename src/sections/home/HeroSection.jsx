import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "../../styles/sections_scss/home_sections_scss/hero_section.css";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const leftItems = leftRef.current
        ? leftRef.current.querySelectorAll('[data-animate="left"]')
        : [];
      const rightItems = rightRef.current
        ? rightRef.current.querySelectorAll('[data-animate="right"]')
        : [];

      const tl = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out" },
      });

      tl.from(leftItems, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
      })
        .from(
          rightItems,
          {
            y: 60,
            opacity: 0,
            stagger: 0.12,
          },
          0.1
        )
        .from(
          scrollRef.current,
          {
            y: 20,
            opacity: 0,
          },
          "-=0.4"
        );

      const floatTargets = rightRef.current
        ? rightRef.current.querySelectorAll("[data-float]")
        : [];

      floatTargets.forEach((el, index) => {
        gsap.to(el, {
          y: index % 2 === 0 ? 12 : -12,
          x: index % 2 === 0 ? -6 : 6,
          rotation: index % 2 === 0 ? 2 : -2,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      if (heroRef.current && rightRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          onUpdate: (self) => {
            gsap.to(rightRef.current, {
              y: self.progress * -40,
              ease: "none",
            });
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollClick = () => {
    const el = document.getElementById("next-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      aria-labelledby="hero-heading"
    >
      <div className="inner">
        <div className="content" ref={leftRef}>
          <p className="eyebrow" data-animate="left">
            Roblox game studio
          </p>

          <h1 className="title" id="hero-heading" data-animate="left">
            Motion-first Roblox experiences that feel premium.
          </h1>

          <p className="subtitle" data-animate="left">
            We design, build, and optimize Roblox games with smooth animation
            systems, responsive UI, and battle-tested live ops tooling.
          </p>

          <div className="ctaRow" data-animate="left">
            <motion.button
              type="button"
              className="ctaButton"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
            >
              Schedule a call
            </motion.button>
          </div>
        </div>

        <div
          className="visual"
          ref={rightRef}
          aria-hidden="true"
        >
          <div className="glow" data-animate="right" data-float />

          <div className="orbPrimary" data-animate="right" data-float />

          <div className="orbSecondary" data-animate="right" data-float />

          <div className="cardMain" data-animate="right" data-float>
            <span className="cardLabel">Session replay</span>
            <span className="cardValue">Every frame, perfectly timed</span>
          </div>

          <div className="pill" data-animate="right" data-float>
            <span className="pillDot" />
            <span className="pillText">60+ FPS gameplay loops</span>
          </div>

          <div className="tagCluster">
            <span className="tag" data-animate="right" data-float>
              #CinematicUX
            </span>
            <span className="tag" data-animate="right" data-float>
              #NetcodeReady
            </span>
            <span className="tag" data-animate="right" data-float>
              #LiveOps
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="scrollIndicator"
        onClick={handleScrollClick}
        ref={scrollRef}
        aria-label="Scroll down to explore more content"
      >
        <span className="scrollLine" />
        <span className="scrollText">Scroll to explore</span>
      </button>
    </section>
  );
};

export default HeroSection;
