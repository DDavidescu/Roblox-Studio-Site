// src/components/cards/GameCard.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useTiltParallax } from "../../animations/motion/useTiltParallax";
import "./GameCard_css/GameCard.scss";
import placeholderImg from "../../assets/images/games/placeholder.webp";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

const ctaVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.04, y: -1 },
  tap: { scale: 0.98, y: 0 },
};

function GameCard({ game }) {
  if (!game) return null;

  const { cardRef, motionStyle, handleMouseMove, handleMouseLeave } =
    useTiltParallax();

  const {
    title = "Untitled game",
    description = "",
    thumbnail,
    tags,
    ctaLabel = "Play now",

    playerCount: rawPlayerCount,
    players: rawPlayers,
    visits: rawVisits,
    likes: rawLikes,
  } = game;

  const toSafeNumber = (value, fallback = 0) =>
    typeof value === "number" && !Number.isNaN(value) ? value : fallback;

  const playerCount = toSafeNumber(rawPlayerCount ?? rawPlayers, 0);
  const visits = toSafeNumber(rawVisits, 0);
  const likes = toSafeNumber(rawLikes, 0);

  const safeTags = Array.isArray(tags) ? tags : [];

  return (
    <motion.article
      ref={cardRef}
      className="game-card"
      style={motionStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="game-card__spotlight" />
      <div className="game-card__glow" />

      <div className="game-card__media-layer">
        <div className="game-card__media">
          <img
            src={thumbnail || game.heroImage || placeholderImg}
            alt={title}
            loading="lazy"
            className="game-card__media-img"
            onError={(e) => {
              e.currentTarget.src = placeholderImg;
            }}
          />

          <div className="game-card__media-gradient" />
        </div>
      </div>

      <div className="game-card__content">
        {safeTags.length > 0 && (
          <div className="game-card__tags">
            {safeTags.map((tag) => (
              <span key={tag} className="game-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="game-card__title">{title}</h3>

        {description && (
          <p className="game-card__description">{description}</p>
        )}

        <div className="game-card__footer">
          <div className="game-card__stats">
            <div className="game-card__stat">
              <span className="game-card__stat-label">Playing</span>
              <span className="game-card__stat-value">
                {playerCount.toLocaleString()}
              </span>
            </div>
            <div className="game-card__stat">
              <span className="game-card__stat-label">Visits</span>
              <span className="game-card__stat-value">
                {visits.toLocaleString()}
              </span>
            </div>
            <div className="game-card__stat">
              <span className="game-card__stat-label">Likes</span>
              <span className="game-card__stat-value">
                {likes.toLocaleString()}
              </span>
            </div>
          </div>

          <motion.button
            className="game-card__cta"
            variants={ctaVariants}
            whileTap="tap"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            type="button"
          >
            <span className="game-card__cta-label">{ctaLabel}</span>
            <span className="game-card__cta-orbit" />
            <span className="game-card__cta-glow" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    playerCount: PropTypes.number,
    players: PropTypes.number,
    visits: PropTypes.number,
    likes: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    ctaLabel: PropTypes.string,
  }),
};

export default GameCard;
