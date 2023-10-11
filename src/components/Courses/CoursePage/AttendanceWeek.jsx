import { useState } from "react";
import styled from "styled-components";

const AttendanceWeek = ({ weekNum, Content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <WeekBox>
      <WeekHeader onClick={toggleAccordion}>
        <span>Week {weekNum}</span>
        <ExpandIcon isExpanded={isExpanded}>+</ExpandIcon>
      </WeekHeader>
      <WeekDetails isExpanded={isExpanded}>
        <div>hello</div>
        <Content />
      </WeekDetails>
    </WeekBox>
  );
};

export default AttendanceWeek;

const WeekBox = styled.div`
  border: 2px solid #ccc;
  margin-bottom: 20px;
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

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const WeekDetails = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;
