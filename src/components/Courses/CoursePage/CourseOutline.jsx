import React, { useState } from "react";
import styled from "styled-components";
import assignment from "../icon/assignment.png";
import video from "../icon/video.png";
import read from "../icon/read.png";
import rectangle from "../icon/rectangle.png";

const tableData = [
  {
    Title: "Introduction to React",
    Assignment: "Assignment 1",
    Video: "video 1",
    Read:"read 1",
  },
  {
    Title: "Components and Props",
    Assignment: "Assignment 2",
    Video: "video 2",
    Read:"read 2",
  },
  {
    Title: "State and Lifecycle",
    Assignment: "Assignment 3",
    Video: "video 3",
    Read:"read 3",
  },
];

const Table = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div>
      <OutlineWrapper>
        <ScheduleHeader onClick={toggleAccordion}>
          <span>Course Outline</span>
          <ExpandIcon isExpanded={isExpanded}>
            <img src={rectangle} alt="rectangle" width="24" height="14"/>
          </ExpandIcon>
        </ScheduleHeader>
      </OutlineWrapper>
      <TableWrapper>
        {isExpanded && (
        <table>
          <thead>
            <TableHead>
              <th>Week</th>
              <th>Title</th>
              <th>Course Material</th>
            </TableHead>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{row.Title}</td>
                <td>
                  {row.Assignment && (
                    <img src={assignment} alt="Assignment" /> // Assignment 이미지
                  )}
                  {row.Video && (
                    <img src={video} alt="Video" /> // Video 이미지
                  )}
                  {row.Read && (
                    <img src={read} alt="Read" /> // Read 이미지
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </TableWrapper>
    </div>
    

    
  );
};

export default Table;

const OutlineWrapper = styled.div`
  border: 2px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  align-items: left;
`;

const TableWrapper = styled.div`
    
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;
const TableHead = styled.tr`
  background-color: ${(props) => props.theme.color["highlight"]};
`;

const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(0deg) scaleY(-1)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;
