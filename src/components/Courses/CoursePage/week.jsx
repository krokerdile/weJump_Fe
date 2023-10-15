import React, { useState } from "react";
import styled from "styled-components";
import WeekMaterial from "./weekmaterial";
import rectangle from "../icon/rectangle.png";

const WeekData = [
  {
    "lessonId": 1,
    "week": 1,
    "start": "2023-09-25",
    "video": "helloworld",
    "assignmentResponseDTO": {
      "assignmentId": 1,
      "title": "learning print",
      "description": "submit until 09-26",
      "end": "2023-09-26"
    },
  },
  {
    "lessonId": 2,
    "week": 2,
    "start": "2023-09-25",
    "video": "helloworld",
    "assignmentResponseDTO": null,
  },
];

const Week = ({ weekNum }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isWeekExpanded, setIsWeekExpanded] = useState(false);

  const toggleWeekExpand = () => {
    e.stopPropagation();
    setIsWeekExpanded((prevState) => !prevState);
  };

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <WeekBox>
        <WeekHeader onClick={toggleWeekExpand}>
          <span>Week {weekNum}</span>
          <ExpandIcon isExpanded={isWeekExpanded} onClick={toggleAccordion}>
            <img src={rectangle} alt="rectangle" width="24" height="14" />
          </ExpandIcon>
        </WeekHeader>
      </WeekBox>
      <WeekDetails isExpanded={isExpanded}>
        {WeekData.map((data, index) => (
          <div key={index}>
            <WeekMaterial
              key={`${index}-video`}
              category="Video"
              weekData={data.video}
            />
            {data.assignmentResponseDTO && (
              <WeekMaterial
                key={`${index}-assignment`}
                category="Assignment"
                weekData={data}
              />
            )}
          </div>
        ))}
      </WeekDetails>
    </div>
  );
};

export default Week;

const WeekBox = styled.div`
  border: 2px solid #ccc;
  width: 100%;
  align-items: left;
`;

const WeekHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const WeekDetails = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  margin-bottom: 1rem;
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) =>
    props.isExpanded ? "rotate(0deg) scaleY(-1)" : "rotate(0deg)"};
  transition: transform 0.3s ease-in-out;
`;
