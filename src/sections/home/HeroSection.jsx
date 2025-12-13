import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "../../styles/sections_scss/home_sections_scss/heroSection/hero_section.scss";
import placeholderImg from "../../assets/images/games/placeholder.webp";

const HeroSection = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const imageWrapRef = useRef(null); 
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const ctx = gsap.context(() => {
      // --- Entrance Animations ---
      const leftItems = leftRef.current
        ? leftRef.current.querySelectorAll('[data-animate="left"]')
        : [];
      const rightItems = rightRef.current
        ? rightRef.current.querySelectorAll('[data-animate="right"]')
        : [];

      const tl = gsap.timeline({
        defaults: { duration: 1.2, ease: "power3.out" },
      });

      tl.from(leftItems, { y: 50, opacity: 0, stagger: 0.15 })
        .from(
          rightItems, 
          { x: 50, opacity: 0, scale: 0.95, filter: "blur(10px)" }, 
          0.2
        )
        .from(scrollRef.current, { y: 20, opacity: 0 }, "-=0.5");
    }, heroEl);

    // ---  Text Magnetic Effect  ---
    let heroBounds = heroEl.getBoundingClientRect();
    const pointer = {
      x: heroBounds.left + heroBounds.width / 2,
      y: heroBounds.top + heroBounds.height / 2,
    };
    const pointerSmooth = { ...pointer };

    const titleEl = leftRef.current ? leftRef.current.querySelector(".title") : null;
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

      const letterEls = Array.from(titleEl.querySelectorAll(".titleChar"));
      const rebuildLetterMeta = () => {
        letterMeta = letterEls.map((el) => {
          const rect = el.getBoundingClientRect();
          return { el, cx: rect.left + rect.width / 2, cy: rect.top + rect.height / 2 };
        });
      };
      rebuildLetterMeta();
      const onResize = () => {
        heroBounds = heroEl.getBoundingClientRect();
        rebuildLetterMeta();
      };
      window.addEventListener("resize", onResize);
    }

    // ---  Combined Pointer Logic ---
    const onPointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;


      if (imageWrapRef.current) {
        const { left, top, width, height } = imageWrapRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const percentX = (e.clientX - centerX) / (width / 2);
        const percentY = (e.clientY - centerY) / (height / 2);

        const tiltX = gsap.utils.clamp(-10, 10, percentY * -8); 
        const tiltY = gsap.utils.clamp(-10, 10, percentX * 8);  

        gsap.to(imageWrapRef.current, {
          rotationX: tiltX,
          rotationY: tiltY,
          duration: 0.5,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    heroEl.addEventListener("pointermove", onPointerMove);

    // --- Ticker for Text Animation ---
    const updateTicker = () => {
      pointerSmooth.x += (pointer.x - pointerSmooth.x) * 0.12;
      pointerSmooth.y += (pointer.y - pointerSmooth.y) * 0.12;

      if (letterMeta.length) {
        const maxLetterRadius = 250; 
        letterMeta.forEach(({ el, cx, cy }) => {
          const dx = pointerSmooth.x - cx;
          const dy = pointerSmooth.y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = Math.max(0, 1 - dist / maxLetterRadius);
          const lift = -10 * falloff;
          const z = 20 * falloff;
          const hue = 220 + 40 * falloff; 

          gsap.to(el, {
            y: lift,
            z,
            color: `hsl(${hue}, 95%, ${65 + 15 * falloff}%)`,
            duration: 0.35,
            ease: "power2.out",
            transformPerspective: 600,
            force3D: true,
            overwrite: "auto",
          });
        });
      }
    };
    gsap.ticker.add(updateTicker);

    return () => {
      heroEl.removeEventListener("pointermove", onPointerMove);
      gsap.ticker.remove(updateTicker);
      ctx.revert();
    };
  }, []);

  const handleScrollClick = () => {
    const el = document.getElementById("next-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-heading">
      <div className="inner">
        <div className="content" ref={leftRef}>
          <p className="eyebrow" data-animate="left">
            Karpath Games
          </p>

          <h1 className="title" id="hero-heading" data-animate="left">
            Lorem ipsum dolor sit amet.
          </h1>

          <p className="subtitle" data-animate="left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum
            doloremque porro maiores eveniet.
          </p>

          <div className="ctaRow" data-animate="left">
            <motion.button
              type="button"
              className="ctaButton"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Play Now
            </motion.button>
            <motion.button
              type="button"
              className="secondaryButton"
              whileHover={{ x: 5 }}
            >
               View Trailer <span style={{marginLeft: 8}}>→</span>
            </motion.button>
          </div>
        </div>

        <div className="visual" ref={rightRef} aria-hidden="true">
          <div className="heroImageWrap" ref={imageWrapRef} data-animate="right">
            <div className="glow-effect"></div>
            <img
              className="heroImage"
              src={placeholderImg}
              alt="Game Screenshot"
              draggable="false"
            />
             <div className="overlay-gradient"></div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="scrollIndicator"
        onClick={handleScrollClick}
        ref={scrollRef}
        aria-label="Scroll down"
      >
        <span className="scrollMouse">
            <span className="scrollWheel"></span>
        </span>
        <span className="scrollText">Scroll</span>
      </button>
    </section>
  );
};

export default HeroSection;