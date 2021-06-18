import React, { useState, useEffect } from "react";

import "./App.css";
import Jobs from "./Jobs";

export const API_URL = "http://localhost:3050";
function App() {
  const [list, setJobsList] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelect = (job) => () => {
    setSelectedJob(job);
  };

  const getPreviousJob = () => {
    let index = selectedJob.index;
    // If first job is active then now we show the last job.
    if (selectedJob.index === 0) {
      index = list.length - 1;
    } else {
      index -= 1;
    }
    const jobToSelect = list.find((j) => j.index === index);
    setSelectedJob(jobToSelect);
  };

  const getNextJob = () => {
    let index = selectedJob.index;
    // If last job is active then now we show the first job.
    if (selectedJob.index === list.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    const jobToSelect = list.find((j) => j.index === index);
    setSelectedJob(jobToSelect);
  };

  useEffect(() => {
    fetch(`${API_URL}/list`)
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        const jobsList = resJson.data.map((j, i) => {
          return { ...j, index: i };
        });
        setJobsList(jobsList);
        setSelectedJob(jobsList[0]);
      })
      .catch((err) => {
        console.log("error fetching jobs list: ", err);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-Body">
        <header className="App-header">Funnel Rolodex (MiniDash)</header>
        <div className="App-Card">
          <Jobs
            selectedJob={selectedJob}
            list={list}
            handleSelect={handleSelect}
          />
        </div>
        <div className="App-Footer">
          <p className="App-Link" onClick={getPreviousJob}>
            Previous
          </p>
          <p className="App-Link" onClick={getNextJob}>
            Next
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
