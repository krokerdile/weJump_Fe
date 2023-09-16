import React, { useState } from "react";
import styled from "styled-components";

const tableData = [
  {
    No: 1,
    LearningContents: "Week 1: Introduction to React",
    Assignments: "Assignment 1",
    Notice: "Important announcement regarding Assignment 1 deadline",
  },
  {
    No: 2,
    LearningContents: "Week 2: Components and Props",
    Assignments: "Assignment 2",
    Notice: "Assignment 2 submission guidelines",
  },
  {
    No: 3,
    LearningContents: "Week 3: State and Lifecycle",
    Assignments: "Assignment 3",
    Notice: "Discussion forum created for Assignment 3",
  },
];

const Table = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <TableWrapper>
      <ScheduleHeader onClick={toggleAccordion}>
        <span>Textbook & Other References</span>
        <ExpandIcon isExpanded={isExpanded}>+</ExpandIcon>
      </ScheduleHeader>
      {isExpanded && (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Learning Contents</th>
              <th>Assignments</th>
              <th>Notice</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.No}</td>
                <td>{row.LearningContents}</td>
                <td>{row.Assignments}</td>
                <td>{row.Notice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </TableWrapper>
  );
};

export default Table;

const TableWrapper = styled.div`
    border: 2px solid #ccc;
    margin-bottom: 20px;
    width: 100%;
    align-items: left;
    
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

const ScheduleHeader = styled.div`
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
