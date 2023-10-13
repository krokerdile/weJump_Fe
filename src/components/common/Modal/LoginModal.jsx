import { useCallback } from "react";
import useModalStore from "../../../store/useModalStore";
import BackgroundModal from "./BackgroundModal";
import styled from "styled-components";
import Text from "../Text";
import DefaultButton from "../Button/DefaultButton";
import GoogleLoginButton from "../Button/GoogleLoginButton";
import { useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const LoginModal = () => {
  const { setShowModal } = useModalStore();
  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    navigate(`${baseURL}/oauth2/authorization/google`);
  };
  return (
    <BackgroundModal>
      <LoginModalWrapper>
        <LoginModalHeader>
          <Text text="Sign In" fontSize="category" fontWeight="category" color="black" />
        </LoginModalHeader>
        <GoogleLoginButton onClick={() => handleGoogleLogin()} />
        <DefaultButton text="Sign In" background="button" fontWeight="category" color="black" />
      </LoginModalWrapper>
    </BackgroundModal>
  );
};

export default LoginModal;

const LoginModalWrapper = styled.div`
  width: 25rem;
  height: 15.25rem;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color["grey2"]};
  background: ${(props) => props.theme.color["white"]};
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 3rem;
`;

const LoginModalHeader = styled.div`
  display: flex;
  justify-content: left;
`;
