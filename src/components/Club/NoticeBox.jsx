import styled from "styled-components";
import Text from "@components/common/Text";

const NoticeBox = ({ title, text, user, date }) => {
  return (
    <BoxWrapper>
      <Text text={title} fontSize="headline1" fontWeight="headline1" color="black" />
      <Text text={text} fontSize="bodycopy" fontWeight="bodycopy" color="black" />
      <BoxFooter>
        <Text text={user} fontSize="bodycopy" fontWeight="bodycopy" color="grey-2" />
        <Text text={date} fontSize="bodycopy" fontWeight="bodycopy" color="grey-2" />
      </BoxFooter>
      <Divider />
    </BoxWrapper>
  );
};

export default NoticeBox;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`;

const Divider = styled.div`
  width: 100%;
  border: solid 0.5px #444;
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
