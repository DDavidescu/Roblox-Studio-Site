// src/sections/games/CollectionsSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/games_sections_scss/CollectionsSection/CollectionsSection.scss";
import CollectionCard from "../../components/cards/CollectionCard";
import useGsapGamesGridSection from "../../animations/gsap/useGsapGamesGridSection";

function CollectionsSection({ collections }) {
  const sectionRef = useRef(null);
  const rowRef = useRef(null);

  useGsapGamesGridSection(sectionRef, rowRef);

  return (
    <section className="collections-section" ref={sectionRef}>
      <div className="collections-section__inner">
        <div className="collections-section__header">
          <p className="collections-section__eyebrow">Collections</p>
          <h2 className="collections-section__title">
            Universes and curated sets
          </h2>
        </div>
        <div className="collections-section__row" ref={rowRef}>
          {collections.map((c) => (
            <CollectionCard key={c.id} collection={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollectionsSection;
