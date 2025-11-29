// src/sections/games/GamesGridSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/games_sections_scss/GameGridSection/GameGridSection.scss";
import GameCard from "../../components/cards/GameCard";
import GamesFilterBar from "../../components/filters/GameFilterBar";
import useGsapGamesGridSection from "../../animations/gsap/useGsapGamesGridSection";

function GamesGridSection({
  games,
  sortBy,
  onSortByChange,
  genres,
  genreFilter,
  onGenreFilterChange,
  platformFilter,
  onPlatformFilterChange,
}) {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useGsapGamesGridSection(sectionRef, gridRef);

  return (
    <section className="games-grid-section" ref={sectionRef}>
      <div className="games-grid-section__inner">
        <div className="games-grid-section__header">
          <div>
            <p className="games-grid-section__eyebrow">Game library</p>
            <h2 className="games-grid-section__title">All games</h2>
          </div>
          <GamesFilterBar
            primaryFilter="all"
            onPrimaryFilterChange={() => {}}
            genres={genres}
            genreFilter={genreFilter}
            onGenreFilterChange={onGenreFilterChange}
            sortBy={sortBy}
            onSortByChange={onSortByChange}
            platformFilter={platformFilter}
            onPlatformFilterChange={onPlatformFilterChange}
          />
        </div>

        <div className="games-grid-section__grid" ref={gridRef}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          {games.length === 0 && (
            <div className="games-grid-section__empty">
              No games match your filters yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default GamesGridSection;
