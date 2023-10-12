import styled from "styled-components";
import Text from "../common/Text";
import person from "./icon/user.png";

const CourseCard = (props) => {
  console.log(props.registered);
  return (
    <CardWrapper onClick={props.onClick}>
      {props.registered === "1" && (
        <RegisteredCover>
          Registered
        </RegisteredCover>
      )}
      <CardCover src={props.img} alt="no" />
      <CardFooter>
        <Text text={props.courseName} fontSize="headline1" fontWeight="headline1" color="black" />
        <Text text={props.mentorName} fontSize="headline2" fontWeight="headline2" color="black" />
        <Detail>
          <img src={person} alt="person" width="16" height="16" style={{ marginRight: "10px", marginTop: "8px" }} />
          <Text text={` ${props.studentCount} / ${props.studentMaxNum}`} fontSize="caption" fontWeight="caption" color="black" />
        </Detail>
      </CardFooter>
    </CardWrapper>
  );
};

export default CourseCard;

const CardWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  flex-shrink: 0;
  border: solid 1px grey;
  border-radius: 0.8rem;
  flex-basis: 25%;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  padding: 0.4rem;
  margin-left: 0.4rem;
`;

const RegisteredCover = styled.div`
  width: 15rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  border-radius: 0.7rem 0.7rem 0px 0px;
  opacity: 0.9; //투명도 조절
  background-color: ${(props) => props.theme.color["button"]};
  font-size: ${(props) => props.theme.fontSize["caption"]};
  font-weight: ${(props) => props.theme.fontWeight["category"]};
`;

const CardCover = styled.img`
  width: 15rem;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 0.7rem 0.7rem 0px 0px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: row;
`;
