import { useParams } from "react-router-dom";
import styled from "styled-components";
import Text from "@components/common/Text";
import test from "/assets/image/test.png";
import ClubTab from "@components/clubs/ClubTab";
import useClubTabStore from "@store/useClubTabStore";
import ClubNotice from "./ClubNotice";
import ClubMember from "./ClubMember";

const tabComponent = {
  Notice: ClubNotice,
  Member: ClubMember,
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
`;

const BannerBox = styled.div`
  width: 100%;
  height: 10%;
`;

const ClubMainBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
