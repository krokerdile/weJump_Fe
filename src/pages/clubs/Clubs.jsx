import { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "@components/common/ListCard";
import Text from "@components/common/Text";
import { useNavigate } from "react-router-dom";
import AddClubCard from "../../components/Club/AddClubCard";

const Clubs = () => {
  const [clubList, setClubList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setClubList([{ name: "WeJump Studio", img: "/assets/image/test.png", user: true, id: 1 }]);
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
              <ListCard onClick={() => handleDetail(club.id)} key={index} clubName={club.name} img={club.img} />
            </>
          ))}
      </ClubListWrapper>
      <ClubListWrapper>
        <Text>All Club</Text>
        <br />
        <ClubList>
          {clubList &&
            clubList.map((club, index) => (
              <>
                <ListCard key={index} clubName={club.name} img={club.img} />
              </>
            ))}
          <AddClubCard />
        </ClubList>
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

const ClubList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`;
