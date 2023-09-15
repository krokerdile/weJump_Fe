import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/weJump_Fe/">
        <Logo src="/assets/image/Logo.png" />
      </Link>
      <Link to="/weJump_Fe/Courses">
        <p>Courses</p>
      </Link>
      <Link to="/weJump_Fe/Clubs">
        <p>Clubs</p>
      </Link>
      <Link to="/weJump_Fe/Event">
        <p>Event</p>
      </Link>
      <Link to="/weJump_Fe/Account">
        <p>Account</p>
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 2rem;
  height: 2rem;
`;
