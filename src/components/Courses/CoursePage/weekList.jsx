import React, { useState } from "react";
import Week from "./week";
import styled from "styled-components";

const WeekList = ({ weeks }) => {
  const [adminCheck, setAdminCheck] = useState(true);
  const [updatedWeeks, setUpdatedWeeks] = useState(weeks); // Use a new state variable to store updated weeks

  const handleAddWeek = () => {
    const newWeekData = {
      weekNum: updatedWeeks.length + 1, // Use updatedWeeks instead of weeks
      video: "New Video",
      assignment: "New Assignment",
      discussion: "New Discussion",
    };

    setUpdatedWeeks((prevWeeks) => [...prevWeeks, newWeekData]);
  };

  return (
    <WeekListWrapper>
      {updatedWeeks.map((weekData, index) => (
        <Week
          key={index}
          weekNum={weekData.weekNum}
          video={weekData.video}
          assignment={weekData.assignment}
          discussion={weekData.discussion}
        />
      ))}
      {adminCheck && (
        <AddWeekButton onClick={handleAddWeek}>
          Add Week
        </AddWeekButton>
      )}
    </WeekListWrapper>
  );
};

export default WeekList;

const WeekListWrapper = styled.div`
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const AddWeekButton = styled.button`
  margin: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;