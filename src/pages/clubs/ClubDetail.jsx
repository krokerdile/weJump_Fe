import { useParams } from "react-router-dom";
import styled from "styled-components";
import Text from "../../components/common/Text";
import test from "/assets/image/test.png";
import ClubTab from "../../components/clubs/ClubTab";
import useClubTabStore from "../../store/useClubTabStore";
import ClubMember from "../../components/clubs/ClubMember";
import ClubNotice from "../../components/clubs/ClubNotice";
import ClubInviteStatus from "../../components/clubs/ClubInviteStatus";

const tabComponent = {
  Notice: ClubNotice,
  Member: ClubMember,
  "Join/Leave Status": ClubInviteStatus,
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
          <Text>Hello</Text>
        </BannerBox>
        <BannerButton>Join</BannerButton>
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
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  background-image: url(${test});
  padding: 2rem;
  justify-content: center;
`;

const BannerBox = styled.div`
  height: 10%;
  text-align: left;
  display: flfex;
`;

const ClubMainBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

const BannerButton = styled.button`
  margin-left: auto;
  width: 2rem;
`;
