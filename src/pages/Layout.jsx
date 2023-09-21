import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
  height: 100vh;
`;
