// src/sections/games/GamesIntroSection.jsx
import { useMemo, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import "../../styles/sections_scss/games_sections_scss/GamesIntroSection/GamesIntroSection.scss";

function useInlineMagneticText({
  containerRef,
  textRef,
  enabled = true,
  radius = 250,
  lift = 10,
  z = 20,
  smooth = 0.12,
  hueBase = 220,
  hueRange = 40,
  lightnessBase = 65,
  lightnessRange = 15,
  wordClass = "titleWord",
  charClass = "titleChar",
} = {}) {
  useLayoutEffect(() => {
    const containerEl = containerRef?.current;
    const textEl = textRef?.current;

    if (!enabled || !containerEl || !textEl) return;

    let containerBounds = containerEl.getBoundingClientRect();

    const pointer = {
      x: containerBounds.left + containerBounds.width / 2,
      y: containerBounds.top + containerBounds.height / 2,
    };
    const pointerSmooth = { ...pointer };

    let letterMeta = [];
    let letterEls = [];

    const splitIntoSpans = () => {
      const raw = textEl.textContent || "";
      textEl.innerHTML = "";

      const words = raw.split(" ");
      words.forEach((word, wIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.classList.add(wordClass);

        word.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.classList.add(charClass);
          wordSpan.appendChild(span);
        });

        textEl.appendChild(wordSpan);
        if (wIndex < words.length - 1) textEl.appendChild(document.createTextNode(" "));
      });

      letterEls = Array.from(textEl.querySelectorAll(`.${charClass}`));
    };

    const rebuildLetterMeta = () => {
      letterMeta = letterEls.map((el) => {
        const rect = el.getBoundingClientRect();
        return { el, cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
      });
    };

    splitIntoSpans();
    rebuildLetterMeta();

    const onResize = () => {
      containerBounds = containerEl.getBoundingClientRect();
      rebuildLetterMeta();
    };

    const onPointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const tick = () => {
      pointerSmooth.x += (pointer.x - pointerSmooth.x) * smooth;
      pointerSmooth.y += (pointer.y - pointerSmooth.y) * smooth;

      if (!letterMeta.length) return;

      letterMeta.forEach(({ el, cx, cy }) => {
        const dx = pointerSmooth.x - cx;
        const dy = pointerSmooth.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const falloff = Math.max(0, 1 - dist / radius);
        const yVal = -lift * falloff;
        const zVal = z * falloff;

        const hue = hueBase + hueRange * falloff;
        const lightness = lightnessBase + lightnessRange * falloff;

        gsap.to(el, {
          y: yVal,
          z: zVal,
          color: `hsl(${hue}, 95%, ${lightness}%)`,
          duration: 0.35,
          ease: "power2.out",
          transformPerspective: 600,
          force3D: true,
          overwrite: "auto",
        });
      });
    };

    containerEl.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);
    gsap.ticker.add(tick);

    return () => {
      containerEl.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tick);
    };
  }, [
    containerRef,
    textRef,
    enabled,
    radius,
    lift,
    z,
    smooth,
    hueBase,
    hueRange,
    lightnessBase,
    lightnessRange,
    wordClass,
    charClass,
  ]);
}

export default function GamesIntroSection({
  title = "WELCOME TO KARPATH\nGAMES UNIVERSE.",
  subtitle = "Explore our diverse collection of immersive Roblox experiences. From high-speed racing to strategic battles and cosmic adventures, dive into worlds filled with story, innovation, and endless fun. Join the community and play now!",
  scrollToId = "games-grid",
  featuredTo = "/games",
}) {
  const prefersReducedMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useInlineMagneticText({
    containerRef: sectionRef,
    textRef: titleRef,
    enabled: !prefersReducedMotion,
    radius: 260,
    lift: 14,
    z: 28,
    smooth: 0.14,
    hueBase: 210,
    hueRange: 55,
    lightnessBase: 68,
    lightnessRange: 16,
    wordClass: "giTitleWord",
    charClass: "giTitleChar",
  });

  useInlineMagneticText({
    containerRef: sectionRef,
    textRef: subtitleRef,
    enabled: !prefersReducedMotion,
    radius: 220,
    lift: 8,
    z: 16,
    smooth: 0.14,
    hueBase: 210,
    hueRange: 40,
    lightnessBase: 72,
    lightnessRange: 10,
    wordClass: "giSubWord",
    charClass: "giSubChar",
  });

  const headline = useMemo(() => {
    const parts = String(title).split("\n").filter(Boolean);
    return (
      <>
        {parts.map((p, i) => (
          <span key={i} className="games-intro__title-line">
            {p}
          </span>
        ))}
      </>
    );
  }, [title]);

  const onExploreClick = (e) => {
    if (!scrollToId) return;
    const el = document.getElementById(scrollToId);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="games-intro games-intro--center"
      aria-label="Games introduction"
      ref={sectionRef}
    >
      <div className="games-intro__bg" aria-hidden="true" />

      <div className="games-intro__inner">
        <motion.header
          className="games-intro__copy games-intro__copy--center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="games-intro__title games-intro__title--center" ref={titleRef}>
            {headline}
          </h1>

          <p className="games-intro__subtitle games-intro__subtitle--center" ref={subtitleRef}>
            {subtitle}
          </p>

          <div className="games-intro__actions games-intro__actions--center">
            <Link className="games-intro__btn games-intro__btn--ghost" to={featuredTo}>
              Play now
            </Link>
          </div>
        </motion.header>
      </div>
    </section>
  );
}
