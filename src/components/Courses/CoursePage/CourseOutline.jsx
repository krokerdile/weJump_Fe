import React, { useState } from "react";
import styled from "styled-components";
import assignment from "../icon/assignment.png";
import video from "../icon/video.png";
import read from "../icon/read.png";
import rectangle from "../icon/rectangle.png";
import EditButton from "../../common/Button/EditButton";
import DoneButton from "../../common/Button/DoneButton";

const tableData = [
  {
    Title: "Introduction to React",
    Assignment: "Assignment 1",
    Video: "Video 1",
    Read: "Read 1",
  },
  {
    Title: "Components and Props",
    Assignment: "Assignment 2",
    Video: "Video 2",
    Read: "Read 2",
  },
  {
    Title: "State and Lifecycle",
    Assignment: "Assignment 3",
    Video: "Video 3",
    Read: "Read 3",
  },
];

const Table = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [weeks, setWeeks] = useState([]);
  const [newWeekNumber, setNewWeekNumber] = useState(4);

  const [editedTitle, setEditedTitle] = useState("");
  const [editedRowIndex, setEditedRowIndex] = useState(null);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleAddWeek = () => {
    const newWeek = {
      Title: "New Week " + newWeekNumber,
      Assignment: "New Assignment",
      Video: "New Video",
      Read: "New Read",
    };

    setWeeks((prevWeeks) => [...prevWeeks, newWeek]);
    setNewWeekNumber(newWeekNumber + 1);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);

    if (!isEditing) {
      setWeeks((prevWeeks) =>
        prevWeeks.map((week, index) => {
          if (index === editedRowIndex) {
            return { ...week, Title: editedTitle };
          }
          return week;
        })
      );
    }
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const startEditingTitle = (index) => {
    setEditedRowIndex(index);
    setEditedTitle(weeks[index].Title);
    setIsEditing(true);
  };

  return (
    <div>
      <OutlineWrapper>
        <ScheduleHeader>
          <span>Course Outline</span>
          {isEditing ? (
            <DoneButton onClick={toggleEditing} />
          ) : (
            <EditButton onClick={toggleEditing} />
          )}
          <ExpandIcon isExpanded={isExpanded} onClick={toggleAccordion}>
            <img src={rectangle} alt="rectangle" width="24" height="14" />
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
                  <td>{index + 1}</td>
                  <td className="detail">
                    {isEditing && editedRowIndex === index ? (
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={handleTitleChange}
                      />
                    ) : (
                      <span onClick={() => startEditingTitle(index)}>
                        {row.Title}
                      </span>
                    )}
                  </td>
                  <td>
                    {row.Assignment && (
                      <img src={assignment} alt="Assignment" />
                    )}
                    {row.Video && (
                      <img src={video} alt="Video" />
                    )}
                    {row.Read && (
                      <img src={read} alt="Read" />
                    )}
                  </td>
                </tr>
              ))}
              {weeks.map((week, index) => (
                <tr key={index}>
                  <td>{index + tableData.length + 1}</td>
                  <td className="detail">
                    {isEditing && editedRowIndex === index ? (
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={handleTitleChange}
                      />
                    ) : (
                      week.Title
                    )}
                  </td>
                  <td>
                    {week.Assignment && (
                      <img src={assignment} alt="Assignment" />
                    )}
                    {week.Video && (
                      <img src={video} alt="Video" />
                    )}
                    {week.Read && (
                      <img src={read} alt="Read" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {isEditing && (
          <AddWeekButton onClick={handleAddWeek}>
            Add Week
          </AddWeekButton>
        )}
      </TableWrapper>
    </div>
  );
};

export default Table;

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

  .detail {
    display: flex;
    flex-direction: row;
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
