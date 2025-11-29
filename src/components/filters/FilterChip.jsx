// src/components/filters/FilterChip.jsx
import "./FilterChip/FilterChip.scss";

function FilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      className={`filter-chip ${active ? "filter-chip--active" : ""}`}
      onClick={onClick}
    >
      <span className="filter-chip__glow" />
      <span className="filter-chip__label">{label}</span>
    </button>
  );
}

export default FilterChip;
