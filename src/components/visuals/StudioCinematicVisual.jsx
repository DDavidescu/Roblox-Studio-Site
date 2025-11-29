import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../../assets/images/games/placeholder.webp";
import "./StudioCinematicVisual/studio_cinematic_visual.scss";

function StudioCinematicVisual() {
  const navigate = useNavigate();
  const visualRef = useRef(null);

  return (
    <div className="studio-visual" ref={visualRef}>
      <div className="studio-visual__content">
        <p className="studio-visual__eyebrow">Careers</p>
        <h3 className="studio-visual__title">Build Your Future With Us</h3>
        <p className="studio-visual__text">
          Join a tight-knit Roblox studio where you can grow as a creator,
          learn from seniors, and ship experiences played by millions.
        </p>

        <button
          className="studio-visual__btn"
          onClick={() => navigate("/careers")}
        >
          Explore Careers
          <span className="arrow">→</span>
        </button>
      </div>

      <div className="studio-visual__image-wrapper">
        <img
          src={placeholder}
          alt="Team members at the studio"
          className="studio-visual__image"
        />
        <div className="studio-visual__image-gradient" />
      </div>
    </div>
  );
}

export default StudioCinematicVisual;
