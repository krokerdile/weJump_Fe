import styled from "styled-components";
import test from "/assets/image/test.png";
import Text from "../components/common/Text";

const Index = () => {
  return (
    <>
      <Banner />
      <IndexBox>
        <Text>Mission</Text>
        <Text>
          WeJump is a global community that nurtures underserved children to become to tomorrow`&apos` leaders with digital competence and social
          mindfulness
        </Text>
      </IndexBox>
    </>
  );
};

export default Index;

const Banner = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  background-image: url(${test});
`;

const IndexBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
  margin-top: 1rem;
  padding: 3rem;
`;
