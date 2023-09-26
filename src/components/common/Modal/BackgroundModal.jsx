import useModalStore from "@store/useModalStore";
import { flexCenter } from "@styles/flexCenter";
import styled from "styled-components";

const BackgroundModal = ({ children, onClick }) => {
  const { setShowModal } = useModalStore();

  const closeModal = () => {
    if (onClick) {
      onClick();
    } else {
      setShowModal(false);
    }
  };

  return (
    <BackgroundWrapper onClick={closeModal}>
      <div>{children}</div>
    </BackgroundWrapper>
  );
};

const BackgroundWrapper = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default BackgroundModal;
