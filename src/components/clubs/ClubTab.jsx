import styled from "styled-components";
import Text from "../common/Text";
import useClubTabStore from "../../store/useClubTabStore";

const ClubTab = () => {
  const { setClubTabStatus, clubTabStatus } = useClubTabStore();

  const handleTabStatus = (status) => {
    setClubTabStatus(status);
  };
  return (
    <TabBox>
      <button onClick={() => handleTabStatus("Member")}>Member</button>
      <button onClick={() => handleTabStatus("Notice")}>Notice</button>
      <button onClick={() => handleTabStatus("Join/Leave Status")}>Join/Leave Status</button>
      <Text>{clubTabStatus}</Text>
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
