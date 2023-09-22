import styled from "styled-components";
import Text from "./Text";

const ListCard = (props) => {
  return (
    <CardWrapper onClick={props.onClick}>
      <CardCover src={props.img} alt="no" />
      <CardFooter>
        <Text text={props.clubName} fontSize="headline1" fontWeight="headline1" color="black" />
      </CardFooter>
    </CardWrapper>
  );
};

export default ListCard;

const CardWrapper = styled.div`
  width: 20.8125rem;
  height: 22.5rem;
  flex-shrink: 0;
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
  width: 333px;
  height: 183px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;
