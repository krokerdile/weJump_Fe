import AttendanceWeek from "./AttendanceWeek";
import styled from "styled-components";

const ManageAttendance = () => {
  const Table = () => {
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Joined Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <TableBox>
              <Icon />
              <Text text="member name" fontSize="bodycopy" fontWeight="bodycopy" color="black" />
            </TableBox>
          </td>
          <td>Ipsum</td>
          <td>Dolor</td>
        </tr>
      </tbody>
    </table>;
  };
  return (
    <>
      <div></div>
      <AttendanceWeek weekNum={1} Content={Table} />
    </>
  );
};

export default ManageAttendance;

const TableBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: black;
  border-radius: 1rem;
`;
