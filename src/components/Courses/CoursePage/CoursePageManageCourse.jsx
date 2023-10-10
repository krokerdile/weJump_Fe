import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Text from "@components/common/Text";
import DefaultButton from "@components/common/Button/DefaultButton";

const CoursePageManageCourse = () => {
  return (
    <ManageWrapper>
      <Text text="Join Requests" fontSize="headline1" fontWeight="headline1" color="black" />
      <ManageBox>
        <Icon />
        <Text text="member name" fontSize="bodycopy" fontWeight="bodycopy" color="black" />
        <ButtonBox>
          <DefaultButton text="V" />
          <DefaultButton text="X" />
        </ButtonBox>
      </ManageBox>
      <Divider />
      <Text text="All Members" fontSize="headline1" fontWeight="headline1" color="black" />
      <ManageBox>
        <MemberTable>
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
        </MemberTable>
      </ManageBox>
    </ManageWrapper>
  );
};

export default CoursePageManageCourse;

const ManageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: left;
  width: 100%;
  margin-right: 1rem;
`;

const ManageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1rem;
`;

const ButtonBox = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  background-color: black;
  border-radius: 1rem;
`;

const Divider = styled.div`
  width: 100%;
  border: solid 1px #b4b4b4;
`;

const MemberTable = styled.table`
  width: 100%;
  thead th:nth-child(1) {
    width: 25%;
  }

  thead th:nth-child(2) {
    width: 25%;
  }

  thead th:nth-child(3) {
    width: 50%;
    text-align: right;
  }
  tbody td:nth-child(3) {
    text-align: right;
  }
`;

const TableBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;
