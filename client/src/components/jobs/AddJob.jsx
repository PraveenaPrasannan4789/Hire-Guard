import React, { useState, useRef, useEffect } from "react";

function AddJob({ addJobFn }) {
  const [jobName, setJobName] = useState("");
  const jobRef = useRef(null);

  useEffect(() => {
    jobRef.current.focus();
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault(); //// stops the page from reloading
    console.log("jobname", jobName.trim());
    if (jobName.trim()=== "") {
      return;
    }
    addJobFn(jobName);
    setJobName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setJobName(e.target.value)}
        value={jobName}
        placeholder="Add a new Job"
        ref={jobRef}
      ></input>
      <button type="submit">Add Job</button>
    </form>
  );
}

export default AddJob;
