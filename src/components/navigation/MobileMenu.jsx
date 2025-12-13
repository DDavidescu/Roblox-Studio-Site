// src/components/Header/MobileMenu.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import { mainNavLinks } from "../../data/navigation";
import { gsap } from "gsap";
import "./MobileMenu_css/MobileMenu.scss";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    if (!mounted) return;
    if (!overlayRef.current || !panelRef.current) return;

    gsap.set(overlayRef.current, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(panelRef.current, { xPercent: 110 });

    return () => {
      gsap.killTweensOf([overlayRef.current, panelRef.current]);
    };
  }, [mounted]);

  useLayoutEffect(() => {
    if (!mounted) return;
    if (!overlayRef.current || !panelRef.current) return;

    gsap.killTweensOf([overlayRef.current, panelRef.current]);

    if (open) {
      gsap.set(overlayRef.current, { pointerEvents: "auto" });

      gsap.to(overlayRef.current, {
        autoAlpha: 1,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(panelRef.current, {
        xPercent: 0,
        duration: 0.45,
        ease: "power3.out",
      });

      gsap.fromTo(
        panelRef.current.querySelectorAll(".mobileMenu__link"),
        { y: 10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.28,
          stagger: 0.06,
          ease: "power2.out",
          delay: 0.12,
        }
      );
    } else {
      gsap.to(panelRef.current, {
        xPercent: 110,
        duration: 0.32,
        ease: "power3.inOut",
      });

      gsap.to(overlayRef.current, {
        autoAlpha: 0,
        duration: 0.22,
        ease: "power1.in",
        onComplete: () => {
          if (overlayRef.current) gsap.set(overlayRef.current, { pointerEvents: "none" });
        },
      });
    }
  }, [open, mounted]);

  const overlay = (
    <div
      ref={overlayRef}
      id="mobile-menu"
      className="mobileMenu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div ref={panelRef} className="mobileMenu__panel" onMouseDown={(e) => e.stopPropagation()}>
        <div className="mobileMenu__header">
          <span className="mobileMenu__title">Menu</span>
          <button
            className="mobileMenu__close"
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="mobileMenu__nav">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `mobileMenu__link ${isActive ? "is-active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <button
        className={`mobileMenuBtn ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}

export default MobileMenu;
