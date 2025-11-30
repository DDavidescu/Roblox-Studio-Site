// src/components/ui/TagPill.jsx
import "./TagPill/TagPill.scss";

function TagPill({ label }) {
  if (!label) return null;

  return <span className="tag-pill">{label}</span>;
}

export default TagPill;
