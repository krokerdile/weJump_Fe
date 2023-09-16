import React from "react";
import Week from "./week";

const WeekList = ({ weeks }) => {
  return (
    <div>
      {weeks.map((weekData, index) => (
        <Week
          key={index}
          weekNum={weekData.weekNum}
          video = {weekData.video}
          assignment={weekData.assignment}
          discussion={weekData.discussion}
        />
      ))}
    </div>
  );
};

export default WeekList;
