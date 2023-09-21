import styled from "styled-components";
import Text from "../common/Text";

const ClubInviteStatus = () => {
  return (
    <InviteBox>
      <StatusBox>
        <Text>Join</Text>
        <LineBox>
          <Text>Logo</Text>
          <Text>Name</Text>
          <Text>Test 1,2,3,4,5</Text>
        </LineBox>
        <Divider />
      </StatusBox>
      <StatusBox>
        <Text>Join</Text>
        <LineBox>
          <Text>Logo</Text>
          <Text>Name</Text>
          <Text>Test 1,2,3,4,5</Text>
        </LineBox>
        <Divider />
      </StatusBox>
      <StatusBox>
        <Text>Join</Text>
        <LineBox>
          <Text>Logo</Text>
          <Text>Name</Text>
          <Text>Test 1,2,3,4,5</Text>
        </LineBox>
      </StatusBox>
    </InviteBox>
  );
};

export default ClubInviteStatus;

const InviteBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e6e4e1;
  padding: 1.5rem;
`;

const StatusBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.5rem;
`;

const LineBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
`;

const Divider = styled.div`
  width: 90%;
  border: solid 1px #444;
  margin-bottom: 1rem;
`;
