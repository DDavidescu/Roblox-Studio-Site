// src/sections/about/PartnersHighlightsSection.jsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/sections_scss/about_sections_scss/PartnersHighlightsSection/PartnersHighlightsSection.scss";

import { partners, highlights } from "../../data/studio";
import useGsapAboutPartners from "../../animations/gsap/useGsapAboutPartners";

function PartnersHighlightsSection() {
  const sectionRef = useRef(null);
  useGsapAboutPartners(sectionRef);

  return (
    <section className="partners" ref={sectionRef}>
      <div className="partners__inner">
        <header className="partners__header">
          <p className="partners__eyebrow">Partners & highlights</p>
          <h2 className="partners__title">Collaborations and moments we&apos;re proud of</h2>
          <p className="partners__intro">
            We highlight the platform support and community moments helping players discover our
            worlds.
          </p>
        </header>

        <div className="partners__row">
          <div
            className={`partners__logos${
              partners.length === 1 ? " partners__logos--single" : ""
            }`}
          >
            {partners.map((partner) => (
              <div key={partner.id} className="partners__logo">
                <span className="partners__logo-mark">{partner.name}</span>
                <span className="partners__logo-label">{partner.label}</span>
              </div>
            ))}
          </div>

          <div className="partners__highlights">
            {highlights.map((item) => (
              <article key={item.id} className="partners__highlight-card">
                <h3 className="partners__highlight-title">{item.title}</h3>
                <p className="partners__highlight-text">{item.description}</p>
                {item.href && item.isExternal ? (
                  <a
                    className="partners__highlight-button"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.ctaLabel}
                  </a>
                ) : null}
                {item.href && !item.isExternal ? (
                  <Link className="partners__highlight-button" to={item.href}>
                    {item.ctaLabel}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersHighlightsSection;
