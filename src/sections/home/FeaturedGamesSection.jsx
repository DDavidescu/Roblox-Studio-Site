// src/sections/home/FeaturedGamesSection.jsx
import { useRef } from "react";
import { games } from "../../data/games";
import { useGsapFeaturedGamesSection } from "../../animations/gsap/useGsapFeaturedGameSection";
import GameCard from "../../components/cards/GameCard";
import "../../styles/sections_scss/home_sections_scss/featuredGamesSection/featuredGamesSection.scss";

function FeaturedGamesSection() {
  const sectionRef = useRef(null);
  useGsapFeaturedGamesSection(sectionRef);

  return (
    <section className="featured-games" ref={sectionRef} id="featured-games">
      <div className="featured-games__bg-layer featured-games__bg-layer--glow" />
      <div className="featured-games__bg-layer featured-games__bg-layer--grid" />
      <div className="featured-games__bg-layer featured-games__bg-layer--particles" />

      <div className="featured-games__inner">
        <header className="featured-games__header">
          <div className="featured-games__eyebrow">Featured Games</div>
          <h2 className="featured-games__title">Our Worlds</h2>
          <p className="featured-games__subtitle">
            Step into handcrafted Roblox universes built for replayability,
            cinematic atmosphere, and unforgettable moments with friends.
          </p>
        </header>

        <div className="featured-games__grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedGamesSection;
