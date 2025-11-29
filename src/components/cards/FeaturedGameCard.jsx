// src/components/cards/FeaturedGameCard.jsx
import { motion } from "framer-motion";
import "./FeaturedGameCard/FeaturedGameCard.scss";
import useGameCardTiltParallax from "../../animations/motion/useGameCardTiltParallax";

function FeaturedGameCard({ game, active }) {
  const { cardRef, motionStyle, handleMouseMove, handleMouseLeave } =
    useGameCardTiltParallax({ maxRotate: 10 });

  return (
    <motion.div
      ref={cardRef}
      className={`featured-game-card ${active ? "featured-game-card--active" : ""}`}
      style={motionStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="featured-game-card__media">
        <img
          src={game.heroImage || game.thumbnail}
          alt={game.title}
          className="featured-game-card__image"
        />
        <div className="featured-game-card__media-overlay" />
      </div>

      <div className="featured-game-card__content">
        <div className="featured-game-card__eyebrow">Spotlight</div>
        <h3 className="featured-game-card__title">{game.title}</h3>
        <p className="featured-game-card__description">{game.description}</p>

        <div className="featured-game-card__tags">
          {game.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="featured-game-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="featured-game-card__stats">
          <div className="featured-game-card__stat">
            <span className="featured-game-card__stat-label">Players</span>
            <span className="featured-game-card__stat-value">
              {game.players.toLocaleString()}
            </span>
          </div>
          <div className="featured-game-card__stat">
            <span className="featured-game-card__stat-label">Visits</span>
            <span className="featured-game-card__stat-value">
              {game.visits.toLocaleString()}
            </span>
          </div>
          <div className="featured-game-card__stat">
            <span className="featured-game-card__stat-label">Rating</span>
            <span className="featured-game-card__stat-value">
              {game.rating.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="featured-game-card__actions">
          <a
            href={game.robloxUrl}
            target="_blank"
            rel="noreferrer"
            className="featured-game-card__btn featured-game-card__btn--primary"
          >
            Play on Roblox
          </a>
          <button
            type="button"
            className="featured-game-card__btn featured-game-card__btn--ghost"
          >
            View details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedGameCard;
