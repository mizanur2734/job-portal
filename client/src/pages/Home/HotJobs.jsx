import React, { useEffect, useState } from "react";
import { use } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
    .then((res) => res.json())
    .then(data => setJobs(data))
  }, []);
  return <div>
    <h1 className="text-4xl text-center my-6">Hot Jobs of the Day</h1>
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
            jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
        }
    </div>
  </div>;
};

export default HotJobs;
