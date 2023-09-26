import styled from "styled-components";
import Text from "@components/common/Text";
import MiniLogo from "./MiniLogo";

const ClubJoinLeaveStatus = () => {
  return (
    <ManageWrapper>
      <ManageBox>
        <Text text="Join Reqeusts" fontSize="category" fontWeight="category" color="black" />
        <MemberListBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
        </MemberListBox>
      </ManageBox>
      <ManageBox>
        <Text text="Leave Requests" fontSize="category" fontWeight="category" color="black" />
        <MemberListBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
        </MemberListBox>
      </ManageBox>
      <ManageBox>
        <Text text="All Members" fontSize="category" fontWeight="category" color="black" />
        <MemberListBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
          <MemberBox>
            <MiniLogo />
            <Text text="Member Name" fontSize="caption" fontWeight="caption" color="black" />
            <CheckBox>
              <Text text="체크" fontSize="caption" fontWeight="caption" color="black" />
              <Text text="거절" fontSize="caption" fontWeight="caption" color="black" />
            </CheckBox>
          </MemberBox>
        </MemberListBox>
      </ManageBox>
    </ManageWrapper>
  );
};

export default ClubJoinLeaveStatus;

const ManageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ManageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const MemberListBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const MemberBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
