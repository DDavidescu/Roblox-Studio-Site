// src/sections/about/JoinUsCtaSection.jsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/sections_scss/about_sections_scss/JoinUsCtaSection/JoinUsCtaSection.scss";

import useGsapAboutJoinUs from "../../animations/gsap/useGsapAboutJoinUs";

function JoinUsCtaSection() {
  const sectionRef = useRef(null);
  useGsapAboutJoinUs(sectionRef);

  return (
    <section className="join-us" ref={sectionRef}>
      <div className="join-us__inner">
        <header className="join-us__header">
          <p className="join-us__eyebrow">Next steps</p>
          <h2 className="join-us__title">Build the next world with us</h2>
          <p className="join-us__intro">
            Whether you&apos;re a player, creator, or partner, we&apos;d love to hear how you want
            to be part of our universe.
          </p>
        </header>

        <div className="join-us__grid">
          <article className="join-us__card">
            <h3 className="join-us__card-title">Join the team</h3>
            <p className="join-us__card-text">
              Explore open roles and learn how we work as a remote-first, focused crew building
              ambitious Roblox experiences.
            </p>
            <Link to="/careers" className="join-us__button join-us__button--primary">
              View careers
            </Link>
          </article>

          <article className="join-us__card">
            <h3 className="join-us__card-title">Partner with us</h3>
            <p className="join-us__card-text">
              Collaborate on IP, events, or new experiences. Tell us what you&apos;d like to build
              and we&apos;ll reach back.
            </p>
            <a
              className="join-us__button join-us__button--secondary"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact studio
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default JoinUsCtaSection;
