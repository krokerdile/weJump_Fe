import { useState, useEffect } from "react";
import { flexCenter } from "../styles/flexCenter";
import styled from "styled-components";
import ListCard from "../components/common/ListCard";

const Clubs = () => {
  const [clubList, setClubList] = useState([]);

  useEffect(() => {
    setClubList([{ name: "WeJump Studio", img: "/assets/image/test.png" }]);
    console.log(clubList);
  }, []);

  return (
    <ClubListWrapper>
      <p>Clubs</p>
      {clubList &&
        clubList.map((club, index) => (
          <>
            <ListCard key={index} clubName={club.name} index={index} img={club.img} />
          </>
        ))}
    </ClubListWrapper>
  );
};

export default Clubs;

const ClubListWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;
