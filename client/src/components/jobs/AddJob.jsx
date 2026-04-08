import React, { useState } from "react";
import AddJobForm from "./AddJobForm"; // your current AddJob component

function JobManager() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);

  const addJobFn = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div>
      <h1>Add a Job </h1>

      {/* Add Job button */}
      {!showForm && <button onClick={() => setShowForm(true)}>Add Job</button>}

      {/* Show form only if showForm is true */}
      {showForm && <AddJobForm addJobFn={addJobFn} />}
    </div>
  );
}

export default JobManager;
