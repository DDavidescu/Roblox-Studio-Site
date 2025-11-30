// src/components/filters/JobsFilterBar.jsx
import "./JobsFilterBar/JobsFilterBar.scss";

function JobsFilterBar({
  department,
  setDepartment,
  location,
  setLocation,
  seniority,
  setSeniority,
}) {
  return (
    <div className="jobs-filter">
      <div className="jobs-filter__field">
        <label>Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Engineering">Engineering</option>
          <option value="Art">Art</option>
          <option value="Design">Design</option>
          <option value="Production">Production</option>
        </select>
      </div>

      <div className="jobs-filter__field">
        <label>Location</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="jobs-filter__field">
        <label>Seniority</label>
        <select
          value={seniority}
          onChange={(e) => setSeniority(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>
  );
}

export default JobsFilterBar;
