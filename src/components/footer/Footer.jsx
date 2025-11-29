// src/components/footer/FooterSection.jsx

import { useRef } from "react";
import "./Footer_css/Footer.scss";

import { footerData } from "../../data/footer";
import useGsapFooterSection from "../../animations/gsap/useGsapFooterSection";

function FooterSection() {
  const footerRef = useRef(null);
  const columnRefs = useRef([]);

  useGsapFooterSection(footerRef, columnRefs);

  const year = new Date().getFullYear();

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__energy-bar" />

      <div className="footer__background-layer footer__background-layer--stars" />
      <div className="footer__background-layer footer__background-layer--nebula" />

      <div className="footer__inner">
        <div
          className="footer__column footer__column--brand"
          ref={(el) => (columnRefs.current[0] = el)}
        >
          <div className="footer__logo-wrap">
            <div className="footer__logo-orbit">
              <span className="footer__logo-initials">HOLD</span>
            </div>
            <div className="footer__logo-text-group">
              <span className="footer__logo-name">{footerData.brand.name}</span>
              <span className="footer__logo-subtitle">Roblox Games Studio</span>
            </div>
          </div>

          <p className="footer__description">{footerData.brand.description}</p>

          <p className="footer__made-with">{footerData.brand.locationTagline}</p>
        </div>

        <div
          className="footer__column footer__column--nav"
          ref={(el) => (columnRefs.current[1] = el)}
        >
          <h4 className="footer__heading">Studio</h4>
          <ul className="footer__link-list">
            {footerData.studioLinks.map((link) => (
              <li key={link.label} className="footer__link-item">
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="footer__column footer__column--worlds"
          ref={(el) => (columnRefs.current[2] = el)}
        >
          <h4 className="footer__heading">Worlds</h4>
          <ul className="footer__worlds-list">
            {footerData.worlds.map((world) => (
              <li key={world.name} className="footer__world-item">
                <span className="footer__world-name">{world.name}</span>
                <span className="footer__world-tag">{world.tag}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="footer__column footer__column--connect"
          ref={(el) => (columnRefs.current[3] = el)}
        >
          <h4 className="footer__heading">Connect</h4>

          <div className="footer__social-row">
            {footerData.socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className={`footer__social-link footer__social-link--${social.id}`}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <span className="footer__social-icon">
                  {social.id === "x" && "X"}
                  {social.id === "youtube" && "▶"}
                  {social.id === "tiktok" && "♪"}
                  {social.id === "discord" && "☰"}
                </span>
              </a>
            ))}
          </div>

          <form
            className="footer__newsletter"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="footer__newsletter-label">
              Stay in sync with new worlds.
            </label>
            <div className="footer__newsletter-fields">
              <input
                className="footer__newsletter-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <button className="footer__newsletter-button" type="submit">
                Join
              </button>
            </div>
            <p className="footer__newsletter-hint">
              No spam. Only launch updates and dev logs.
            </p>
          </form>
        </div>
      </div>

      <div className="footer__lower">
        <div className="footer__lower-left">
          <span className="footer__copyright">
            © {year} {footerData.brand.name}. All rights reserved.
          </span>
        </div>

        <div className="footer__lower-right">
          {footerData.legalLinks.map((link, index) => (
            <span key={link.label} className="footer__legal-item">
              <a href={link.href} className="footer__legal-link">
                {link.label}
              </a>
              {index < footerData.legalLinks.length - 1 && (
                <span className="footer__legal-separator">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
