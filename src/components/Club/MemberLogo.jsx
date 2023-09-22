import styled from "styled-components";
import Text from "@components/common/Text";

const MemberLogo = () => {
  return (
    <Member>
      <Icon src="/assets/image/Logo.png" />
      <Text text="member name" fontSize="bodycopy" fontWeight="bodycopy" color="black" />
    </Member>
  );
};

export default MemberLogo;

const Icon = styled.img`
  width: 11.25rem;
  height: 11.25rem;
`;

const Member = styled.div`
  flex-basis: 20%;
`;
