import styled from "styled-components";

const MiniLogo = () => {
  return (
    <Member>
      <Icon src="/assets/image/Logo.png" />
    </Member>
  );
};

export default MiniLogo;

const Icon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

const Member = styled.div`
  margin-right: 0.5rem;
`;
