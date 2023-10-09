import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WeekList from "./weekList";

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

const CoursePageAnnouncements = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지에 따라 startIndex 계산
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentNotice = Notice.slice(startIndex, endIndex);

  const pageCount = Math.ceil(Notice.length / pageSize);

  return (
    <CoursePageAnnouncementWrapper>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
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

      <Pagination>
        {Array.from({ length: pageCount }, (_, index) => (
          <PageNumber key={index + 1} onClick={() => setCurrentPage(index + 1)} active={currentPage === index + 1}>
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>
    </CoursePageAnnouncementWrapper>
  );
};

export default CoursePageAnnouncements;

const CoursePageAnnouncementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-right: 1rem;
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
  justify-content: center;
  gap: 8px;
`;

const PageNumber = styled.span`
  cursor: pointer;
  color: ${(props) => (props.active ? "blue" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
`;
