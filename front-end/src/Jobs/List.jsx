import React from "react";

function List({ list, selectedJobId, onSelect }) {
  return (
    <div className="jobitems">
      <p className="subheader">Jobs in System</p>
      <hr className="divider" />
      <div className="jobitems-list">
        {list.map((j) => {
          const isSelectedJob = selectedJobId === j.job_id;
          return (
            <p
              key={j.job_id}
              onClick={onSelect(j)}
              className={`jobitems-link ${isSelectedJob ? "active" : ""}`}
            >
              {j.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default List;
