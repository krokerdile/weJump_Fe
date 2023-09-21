import styled from "styled-components";
import Text from "../common/Text";

const NoticeBox = ({ title, text, user, date }) => {
  return (
    <BoxWrapper>
      <div>Notice Letter</div>
      <Text>{title}</Text>
      <Text>{text}</Text>
      <BoxFooter>
        <Text>{user}</Text>
        <Text>{date}</Text>
      </BoxFooter>
      <Divider />
    </BoxWrapper>
  );
};

export default NoticeBox;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  text-align: left;
`;

const Divider = styled.div`
  width: 100%;
  border: solid 1px #444;
`;

const BoxFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const BoxImg = styled.img`
  width: 20%;
  height: 100%;
`;

const BoxBody = styled.div``;
