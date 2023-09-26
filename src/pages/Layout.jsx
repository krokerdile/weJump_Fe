import Navbar from "@components/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useEffect, Suspense } from "react";
import LoginModal from "../components/common/Modal/LoginModal";
import useModalStore from "../store/useModalStore";

const modalTable = { LoginModal: <LoginModal /> };
const Layout = () => {
  const { setShowModal, showModal, modalType } = useModalStore();
  const component = modalType ? modalTable[modalType] : null;
  useEffect(() => {
    setShowModal(false);
  }, []);
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
      {showModal && <Suspense fallback={null}>{component}</Suspense>}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  width: 100%;
`;
