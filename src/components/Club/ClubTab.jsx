import styled from "styled-components";
import Text from "@components/common/Text";
import useClubTabStore from "@store/useClubTabStore";

const ClubTab = () => {
  const { setClubTabStatus } = useClubTabStore();

  const handleTabStatus = (status) => {
    setClubTabStatus(status);
  };
  return (
    <TabBox>
      <Text text="Memeber" onClick={() => handleTabStatus("Member")} fontSize="headline1" fontWeight="headline1" color="black" />
      <Text text="Notice" onClick={() => handleTabStatus("Notice")} fontSize="headline1" fontWeight="headline1" color="black" />
      <Text text="Join/LeaveStatus" onClick={() => handleTabStatus("JoinLeaveStatus")} fontSize="headline1" fontWeight="headline1" color="black" />
    </TabBox>
  );
};

export default ClubTab;

const TabBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 1rem;
`;
