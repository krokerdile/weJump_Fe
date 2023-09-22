import MemberLogo from "@components/Club/MemberLogo";
import styled from "styled-components";

const ClubMember = () => {
  return (
    <MemberList>
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
      <MemberLogo />
    </MemberList>
  );
};

export default ClubMember;

const MemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
