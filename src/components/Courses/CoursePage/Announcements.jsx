import React, { useState } from "react";
import styled from "styled-components";
import rightButton from "../icon/rightButton.png";
import leftButton from "../icon/leftButton.png";

const pageSize = 4; // 한 페이지당 보여질 항목 수

const Notice = [
  {
    Title: "Notice of Change Course Time 1",
    Date: "2023-08-21",
    Hits: 15,
  },
  {
    Title: "Notice of Change Course Time 2",
    Date: "2023-08-21",
    Hits: 5,
  },
  {
    Title: "Notice of Change Course Time 3",
    Date: "2023-08-21",
    Hits: 3,
  },
  {
    Title: "Notice of Change Course Time 4",
    Date: "2023-08-21",
    Hits: 8,
  },
  {
    Title: "Notice of Change Course Time 5",
    Date: "2023-08-21",
    Hits: 10,
  },
  {
    Title: "Notice of Change Course Time 6",
    Date: "2023-08-21",
    Hits: 10,
  },
];

Notice.reverse();

const Announcements = () => {
  const [startIndex, setStartIndex] = useState(0);

  const currentNotice = Notice.slice(startIndex, startIndex + pageSize);

  const goBack = () => {
    if (startIndex >= pageSize) {
      setStartIndex(startIndex - pageSize);
    }
  };

  const goForward = () => {
    if (startIndex + pageSize < Notice.length) {
      setStartIndex(startIndex + pageSize);
    }
  };

  return (
    <AnnouncementWrapper>
      <Pagination>
        <Button onClick={goBack}>
          <img src={leftButton} alt="Previous" />
        </Button>
        <CurrentPage>{startIndex / pageSize + 1}</CurrentPage>
        <Button onClick={goForward}>
          <img src={rightButton} alt="Next" />
        </Button>
      </Pagination>
      <table>
        <thead>
          <TableHead>
            <th>No.</th>
            <th>Title</th>
            <th>Date</th>
            <th>Hits</th>
          </TableHead>
        </thead>
        <tbody>
          {currentNotice.map((item, index) => (
            <tr key={index}>
              <td>{Notice.length - (startIndex + index)}</td>
              <td>{item.Title}</td>
              <td>{item.Date}</td>
              <td>{item.Hits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AnnouncementWrapper>
  );
};

export default Announcements;

const AnnouncementWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-right: 1rem;
  table {
    width: 100%;
    border-collapse: collapse;
  }

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

const Pagination = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
`;

const CurrentPage = styled.span`
  color: ${(props) => props.theme.color["bodycopy"]};
  font-weight: bold;
  margin: 0 8px;
  margin-bottom : 4px;
`;

const TableHead = styled.tr`
  background-color: #f2f2f2;
`;
