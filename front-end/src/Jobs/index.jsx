import List from "./List";
import SingleJob from "./SingleJob";
import "./jobs.css";

function Jobs({ selectedJob, list, handleSelect }) {
  return (
    <div className="App-Row jobs-main">
      {selectedJob && (
        <>
          <SingleJob job={selectedJob} />
          <List
            list={list}
            selectedJobId={selectedJob?.job_id}
            onSelect={handleSelect}
          />
        </>
      )}
    </div>
  );
}

export default Jobs;
