import React from "react";
import Week from "./week";
import styled from "styled-components";

const WeekList = ({ weeks }) => {
  return (
    <WeekListWrapper>
      {weeks.map((weekData, index) => (
        <Week key={index} weekNum={weekData.weekNum} video={weekData.video} assignment={weekData.assignment} discussion={weekData.discussion} />
      ))}
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
