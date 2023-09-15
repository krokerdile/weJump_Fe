import styled from "styled-components";

const ListCard = (props) => {
  return (
    <CardWrapper>
      <CardCover src={props.clubName} alt="no" />
      <div>
        {props.index}:{props.clubName}
      </div>
    </CardWrapper>
  );
};

export default ListCard;

const CardWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: solid 1px black;
`;

const CardCover = styled.img`
  width: 10rem;
  height: 5rem;
`;
