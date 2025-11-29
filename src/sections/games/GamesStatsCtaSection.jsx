// src/sections/games/GamesStatsCtaSection.jsx
import { useRef } from "react";
import "../../styles/sections_scss/games_sections_scss/GamesStatsCtaSection/GamesStatsCtaSection.scss";
import useGsapGamesStatsCtaSection from "../../animations/gsap/useGsapGamesStatsCtaSection";

function GamesStatsCtaSection({ stats }) {
  const sectionRef = useRef(null);

  useGsapGamesStatsCtaSection(sectionRef);

  return (
    <section className="games-stats-cta" ref={sectionRef}>
      <div className="games-stats-cta__inner">
        <div className="games-stats-cta__stats">
          <div className="games-stats-cta__stat">
            <span className="games-stats-cta__stat-label">Total players</span>
            <span className="games-stats-cta__stat-value">
              {stats.totalPlayers.toLocaleString()}
            </span>
          </div>
          <div className="games-stats-cta__stat">
            <span className="games-stats-cta__stat-label">Total visits</span>
            <span className="games-stats-cta__stat-value">
              {stats.totalVisits.toLocaleString()}
            </span>
          </div>
          <div className="games-stats-cta__stat">
            <span className="games-stats-cta__stat-label">Games live</span>
            <span className="games-stats-cta__stat-value">
              {stats.totalGames}
            </span>
          </div>
        </div>

        <div className="games-stats-cta__ctas">
          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noreferrer"
            className="games-stats-cta__btn games-stats-cta__btn--primary"
          >
            Play our top games
          </a>
          <a
            href="https://www.roblox.com"
            target="_blank"
            rel="noreferrer"
            className="games-stats-cta__btn games-stats-cta__btn--ghost"
          >
            Follow us on Roblox
          </a>
        </div>
      </div>
    </section>
  );
}

export default GamesStatsCtaSection;
