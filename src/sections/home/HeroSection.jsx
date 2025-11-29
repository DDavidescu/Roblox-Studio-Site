import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "../../styles/sections_scss/home_sections_scss/heroSection/hero_section.scss";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

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

      // idle float for cards / pills / tags
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

      // idle float for orbs (no cursor interaction)
      const orbEls = rightRef.current
        ? rightRef.current.querySelectorAll("[data-orb]")
        : [];

      orbEls.forEach((el, index) => {
        gsap.to(el, {
          y: index % 2 === 0 ? -18 : 20,
          x: index % 2 === 0 ? -10 : 14,
          duration: 4 + index * 0.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // parallax on scroll for whole visual cluster
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
    }, heroEl);

    // headline per-letter interaction (kept)
    let heroBounds = heroEl.getBoundingClientRect();
    const pointer = {
      x: heroBounds.left + heroBounds.width / 2,
      y: heroBounds.top + heroBounds.height / 2,
    };
    const pointerSmooth = { ...pointer };

    const titleEl = leftRef.current
      ? leftRef.current.querySelector(".title")
      : null;

    let letterMeta = [];

    if (titleEl) {
      const text = titleEl.textContent || "";
      titleEl.innerHTML = "";

      const words = text.split(" ");

      words.forEach((word, wIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add("titleWord");

        word.split("").forEach((char, charIndex) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add("titleChar");
          span.dataset.index = String(charIndex);
          wordSpan.appendChild(span);
        });

        titleEl.appendChild(wordSpan);

        if (wIndex < words.length - 1) {
          titleEl.appendChild(document.createTextNode(" "));
        }
      });

      const letterEls = Array.from(
        titleEl.querySelectorAll(".titleChar")
      );

      const rebuildLetterMeta = () => {
        letterMeta = letterEls.map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            el,
            cx: rect.left + rect.width / 2,
            cy: rect.top + rect.height / 2,
          };
        });
      };

      rebuildLetterMeta();
      requestAnimationFrame(rebuildLetterMeta);

      const onPointerMove = (e) => {
        pointer.x = e.clientX;
        pointer.y = e.clientY;
      };

      const onResize = () => {
        heroBounds = heroEl.getBoundingClientRect();
        rebuildLetterMeta();
      };

      heroEl.addEventListener("pointermove", onPointerMove);
      window.addEventListener("resize", onResize);

      const updateFromPointer = () => {
        pointerSmooth.x += (pointer.x - pointerSmooth.x) * 0.16;
        pointerSmooth.y += (pointer.y - pointerSmooth.y) * 0.16;

        if (!letterMeta.length) return;

        const maxLetterRadius = 200;

        letterMeta.forEach(({ el, cx, cy }) => {
          const dx = pointerSmooth.x - cx;
          const dy = pointerSmooth.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = Math.max(0, 1 - dist / maxLetterRadius);

          const lift = -6 * falloff;
          const z = 18 * falloff;
          const hue = 220 + 30 * falloff;

          gsap.to(el, {
            y: lift,
            z,
            color: `hsl(${hue}, 95%, ${60 + 10 * falloff}%)`,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 600,
            force3D: true,
            overwrite: "auto",
          });
        });
      };

      gsap.ticker.add(updateFromPointer);

      return () => {
        heroEl.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", onResize);
        gsap.ticker.remove(updateFromPointer);
        ctx.revert();
      };
    }

    return () => {
      ctx.revert();
    };
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
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </h1>

          <p className="subtitle" data-animate="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            laborum doloremque porro maiores eveniet, soluta corporis quo! Odio,
            totam deserunt.
          </p>

          <div className="ctaRow" data-animate="left">
            <motion.button
              type="button"
              className="ctaButton"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97, y: 0 }}
            >
              Lorem, ipsum.
            </motion.button>
          </div>
        </div>

        <div
          className="visual"
          ref={rightRef}
          aria-hidden="true"
        >
          <div className="glow" data-animate="right" />

          <div
            className="orbPrimary"
            data-animate="right"
            data-orb
            data-depth="0.3"
          />

          <div
            className="orbSecondary"
            data-animate="right"
            data-orb
            data-depth="0.22"
          />

          <div className="cardMain" data-animate="right" data-float>
            <span className="cardLabel">Lorem, ipsum.</span>
            <span className="cardValue">Lorem ipsum dolor sit.</span>
          </div>

          <div className="pill" data-animate="right" data-float>
            <span className="pillDot" />
            <span className="pillText">Lorem, ipsum dolor.</span>
          </div>

          <div className="tagCluster">
            <span className="tag" data-animate="right" data-float>
              Lorem, ipsum.
            </span>
            <span className="tag" data-animate="right" data-float>
              Lorem, ipsum.
            </span>
            <span className="tag" data-animate="right" data-float>
              Lorem, ipsum.
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
