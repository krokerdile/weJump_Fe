import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Text from "@components/common/Text";

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigete = (url) => {
    navigate(url);
  };
  return (
    <NavbarWrapper>
      <LogoBox onClick={() => handleNavigete("/weJump_Fe/")}>
        <Logo src="/assets/image/Logo.png" />
        <Text text="WeJump" fontSize="headline1" fontWeight="headline1" color="button" />
      </LogoBox>
      <NavRightBox>
        <Text onClick={() => handleNavigete("/weJump_Fe/Courses")} text="Courses" fontSize="headline2" fontWeight="headline2" color="black" />
        <Text onClick={() => handleNavigete("/weJump_Fe/Clubs")} text="Clubs" fontSize="headline2" fontWeight="headline2" color="black" />
        <Text onClick={() => handleNavigete("/weJump_Fe/Event")} text="Event" fontSize="headline2" fontWeight="headline2" color="black" />
        <Text onClick={() => handleNavigete("/weJump_Fe/Account")} text="Account" fontSize="headline2" fontWeight="headline2" color="black" />
      </NavRightBox>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 3.125rem;
  height: 3.125rem;
`;
const NavRightBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-left: auto;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
