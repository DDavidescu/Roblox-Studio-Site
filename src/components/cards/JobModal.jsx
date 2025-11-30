// src/components/cards/JobModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import "./JobModal/JobModal.scss";
import TagPill from "../ui/TagPill";

function JobModal({ job, onClose }) {
  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="job-modal__backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="job-modal"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
        >
          <button className="job-modal__close" onClick={onClose} type="button">
            ×
          </button>

          <h3 className="job-modal__title">{job.title}</h3>
          <p className="job-modal__meta">
            {job.department} • {job.location} • {job.seniority} • {job.type}
          </p>

          <div className="job-modal__tags">
            {job.tags?.map((tag) => (
              <TagPill key={tag} label={tag} />
            ))}
          </div>

          <div className="job-modal__section">
            <h4>About the role</h4>
            <p>
              Placeholder copy. Describe responsibilities, ownership areas, and
              the kind of player experiences this role directly affects.
            </p>
          </div>

          <div className="job-modal__section">
            <h4>What you&apos;ll do</h4>
            <ul>
              <li>End-to-end ownership of key systems, features, or pipelines.</li>
              <li>Collaborate closely with design, art, and production.</li>
              <li>Prototype, iterate, and polish in tight feedback loops.</li>
              <li>Contribute to best practices, technical direction, and craft.</li>
            </ul>
          </div>

          <div className="job-modal__section">
            <h4>How to apply</h4>
            <p>
              Send us your portfolio, GitHub, or shipped experiences along with a
              short note about what you want to build with us.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default JobModal;
