import React, { useState } from "react";
import AddJob from "./AddJob";
import { useEffect,useCallback } from "react";

function JobList() {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const dummyJobs = ["software developer", "ux designer"];
    setJobList(dummyJobs);
  }, []); // empty dependency → runs only once

  const deleteJob = (idx) => {
    setJobList(
      jobList.filter((_, index) => {
        //_ is a placeholder for the element when you don’t need it.
        return index != idx;
      }),
    );
  };

  const addJob = useCallback((jobName) => {
    
 console.log("job lidt", jobList,jobName);
    setJobList((prev)=>[...prev, jobName]);
    console.log("job lidt", jobList,jobName);

    // setState always expects a single value, not multiple arguments.

    // For arrays, you must wrap wyith [ ]:
  },[])

  return (
    <div>
      <h2>Job List</h2>
      <AddJob addJobFn={addJob} />
      <ul>
        {jobList.map((job, idx) => (
          <li key={idx}>
            {job}{" "}
            <button
              onClick={() => {
                deleteJob(idx); //You cannot do {deleteTask(index)} inside JSX directly, because it would call the function immediately when rendering, instead of on click.
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default JobList;
