import { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../../components/common/ListCard";
import Text from "../../components/common/Text";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
  const [clubList, setClubList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setClubList([{ name: "WeJump Studio", img: "/assets/image/test.png", user: true }]);
  }, []);

  const handleDetail = (index) => {
    navigate(`/weJump_Fe/Clubs/${index}`);
  };

  return (
    <>
      <ClubListWrapper>
        <Text>My Club</Text>
        <br />
        {clubList &&
          clubList.map((club, index) => (
            <>
              <ListCard onClick={() => handleDetail(index)} key={index} clubName={club.name} index={index} img={club.img} />
            </>
          ))}
      </ClubListWrapper>
      <ClubListWrapper>
        <Text>All Club</Text>
        <br />
        {clubList &&
          clubList.map((club, index) => (
            <>
              <ListCard key={index} clubName={club.name} index={index} img={club.img} />
            </>
          ))}
      </ClubListWrapper>
    </>
  );
};

export default Clubs;

const ClubListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 2rem;
  text-align: left;
`;
