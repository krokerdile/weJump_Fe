import { useParams } from "react-router-dom";
import styled from "styled-components";
import Text from "@components/common/Text";
import test from "/assets/image/test.png";
import ClubTab from "@components/Club/ClubTab";
import useClubTabStore from "@store/useClubTabStore";
import ClubNotice from "@components/Club/ClubNotice";
import ClubMember from "@components/Club/ClubMember";
import ClubJoinLeaveStatus from "@components/Club/ClubJoinLeaveStatus";

const tabComponent = {
  Notice: ClubNotice,
  Member: ClubMember,
  JoinLeaveStatus: ClubJoinLeaveStatus,
};

const getBodyByStatus = (clubTabStatus) => {
  const Component = tabComponent[clubTabStatus];
  return <Component />;
};
const ClubDetail = () => {
  const { clubId } = useParams();
  const { clubTabStatus } = useClubTabStore();

  return (
    <>
      <Banner>
        <BannerBox>
          <Text>Club Name: {clubId}</Text>
          <Text text="ClubName" fontSize="headline1" fontWeight="headline1" color="white" />
          <Text text={clubId} fontSize="headline1" fontWeight="headline1" color="white" />
          <Text>Hello</Text>
        </BannerBox>
      </Banner>
      <ClubMainBox>
        <ClubTab />
        {getBodyByStatus(clubTabStatus)}
      </ClubMainBox>
    </>
  );
};

export default ClubDetail;

const Banner = styled.div`
  width: 100%;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
  background-image: url(${test});
`;

const BannerBox = styled.div`
  width: 100%;
  height: 31.25rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const ClubMainBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
