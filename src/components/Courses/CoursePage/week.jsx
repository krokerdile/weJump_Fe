import React, { useState } from "react";

const Week = ({ WeekNum, video, assignment, discussion }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="week">
      <div className="week-header" onClick={toggleAccordion}>
        <span>Week{WeekNum}</span>
        <span className={`expand-icon ${isExpanded ? "expanded" : ""}`}>
          {isExpanded ? "-" : "+"}
        </span>
      </div>
      {isExpanded && (
        <div className="week-details">
          {video && <div>Video: {video}</div>}
          {assignment && <div>Assignment: {assignment}</div>}
          {discussion && <div>Discussion: {discussion}</div>}
        </div>
      )}
    </div>
  );
};

export default Week;
