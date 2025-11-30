// src/components/cards/JobCard.jsx
import { motion } from "framer-motion";
import "./JobCard/JobCard.scss";

import TagPill from "../ui/TagPill";
import useJobCardTilt from "../../animations/motion/useJobCardTilt";

function JobCard({ job, onClick }) {
  const { cardRef, handleMouseMove, handleMouseLeave } = useJobCardTilt();

  return (
    <motion.article
      ref={cardRef}
      className="job-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25 }}
    >
      <div className="job-card__header">
        <h3 className="job-card__title">{job.title}</h3>
        <p className="job-card__meta">
          <span>{job.department}</span>
          <span>•</span>
          <span>{job.location}</span>
          <span>•</span>
          <span>{job.seniority}</span>
        </p>
      </div>

      <p className="job-card__summary">{job.summary}</p>

      <div className="job-card__footer">
        <div className="job-card__tags">
          {job.tags?.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
        <button className="job-card__cta" type="button">
          View Role
        </button>
      </div>
    </motion.article>
  );
}

export default JobCard;
