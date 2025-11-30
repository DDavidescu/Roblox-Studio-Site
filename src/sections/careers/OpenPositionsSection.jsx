// src/sections/careers/OpenPositionsSection.jsx
import { useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "../../styles/sections_scss/careers_sections_scss/OpenPositionsSection/OpenPositionsSection.scss";

import useGsapCareersOpenPositions from "../../animations/gsap/useGsapCareersOpenPositions";
import JobsFilterBar from "../../components/filters/JobsFilterBar";
import JobCard from "../../components/cards/JobCard";
import JobModal from "../../components/cards/JobModal";

function OpenPositionsSection({ positions }) {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  const [department, setDepartment] = useState("All");
  const [location, setLocation] = useState("All");
  const [seniority, setSeniority] = useState("All");
  const [activeJob, setActiveJob] = useState(null);

  useGsapCareersOpenPositions(sectionRef, listRef);

  const filteredPositions = useMemo(() => {
    return positions.filter((job) => {
      if (department !== "All" && job.department !== department) return false;
      if (location !== "All" && job.location !== location) return false;
      if (seniority !== "All" && job.seniority !== seniority) return false;
      return true;
    });
  }, [positions, department, location, seniority]);

  return (
    <section className="careers-open" ref={sectionRef}>
      <div className="careers-open__inner">
        <header className="careers-open__header">
          <div>
            <p className="careers-open__eyebrow">Open positions</p>
            <h2 className="careers-open__title">Roles we&apos;re hiring for.</h2>
            <p className="careers-open__subtitle">
              Don&apos;t see a perfect fit? Reach out anyway. We read every
              application and keep a close eye on strong generalists.
            </p>
          </div>
        </header>

        <JobsFilterBar
          department={department}
          setDepartment={setDepartment}
          location={location}
          setLocation={setLocation}
          seniority={seniority}
          setSeniority={setSeniority}
        />

        <div className="careers-open__list" ref={listRef}>
          {filteredPositions.length === 0 && (
            <p className="careers-open__empty">
              No roles match these filters yet. Try expanding your search or
              send us a speculative application.
            </p>
          )}

          <AnimatePresence>
            {filteredPositions.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => setActiveJob(job)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <JobModal job={activeJob} onClose={() => setActiveJob(null)} />
    </section>
  );
}

export default OpenPositionsSection;
