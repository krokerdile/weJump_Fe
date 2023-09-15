import styled from "styled-components";
import Text from "./Text";

const ListCard = (props) => {
  return (
    <CardWrapper onClick={props.onClick}>
      <CardCover src={props.img} alt="no" />
      <CardFooter>
        <Text>{props.clubName}</Text>
        <Text>{props.index}</Text>
      </CardFooter>
    </CardWrapper>
  );
};

export default ListCard;

const CardWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  border: solid 1px black;
  border-radius: 1rem;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  padding: 1rem;
`;

const CardCover = styled.img`
  width: 14rem;
  height: 7rem;
  border-radius: 1rem 1rem 0 0;
`;
