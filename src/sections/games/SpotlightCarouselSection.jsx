// src/sections/games/SpotlightCarouselSection.jsx
import { useMemo, useRef, useState } from "react";
import "../../styles/sections_scss/games_sections_scss/SpotlightCarouselSection/SpotlightCarouselSection.scss";
import FeaturedGameCard from "../../components/cards/FeaturedGameCard";
import useGsapSpotlightCarousel from "../../animations/gsap/useGsapSpotlightCarousel";

function SpotlightCarouselSection({ featuredGames }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGsapSpotlightCarousel(sectionRef, contentRef);

  const ordered = useMemo(() => {
    if (!featuredGames || featuredGames.length === 0) return [];
    return [...featuredGames].sort((a, b) => b.players - a.players);
  }, [featuredGames]);

  if (!ordered.length) return null;

  const activeGame = ordered[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + ordered.length) % ordered.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ordered.length);
  };

  return (
    <section className="spotlight-carousel" ref={sectionRef}>
      <div className="spotlight-carousel__inner" ref={contentRef}>
        <div className="spotlight-carousel__header">
          <div>
            <p className="spotlight-carousel__eyebrow">Featured worlds</p>
            <h2 className="spotlight-carousel__title">Spotlight carousel</h2>
          </div>
          <div className="spotlight-carousel__controls">
            <button
              type="button"
              className="spotlight-carousel__nav"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              type="button"
              className="spotlight-carousel__nav"
              onClick={handleNext}
            >
              Next
            </button>
            <div className="spotlight-carousel__dots">
              {ordered.map((game, index) => (
                <button
                  key={game.id}
                  type="button"
                  className={`spotlight-carousel__dot ${
                    index === activeIndex ? "spotlight-carousel__dot--active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="spotlight-carousel__content">
          <FeaturedGameCard game={activeGame} active />
        </div>
      </div>
    </section>
  );
}

export default SpotlightCarouselSection;
