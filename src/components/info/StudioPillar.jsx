// src/components/info/StudioPillar.jsx
import "./StudioPillar/studio_pillar.scss";

function StudioPillar({ icon, label, description, innerRef }) {
  return (
    <article className="studio-pillar" ref={innerRef}>
      <div className="studio-pillar__icon-wrap">
        {icon && <img src={icon} alt={label} className="studio-pillar__icon" />}
        <span className="studio-pillar__glow" />
      </div>
      <div className="studio-pillar__body">
        <h3 className="studio-pillar__label">{label}</h3>
        <p className="studio-pillar__description">{description}</p>
      </div>
    </article>
  );
}

export default StudioPillar;
