import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";
import { useRef, useState } from "react";

const Login = () => {
  const userId = useRef(null);
  const userPw = useRef(null);
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const onLogin = () => {
    console.log(id, pw);
  };
  return (
    <LoginWrapper>
      <div>Login</div>
      <input
        ref={userId}
        onChange={() => {
          setId(userId.current.value);
        }}
      />
      <input
        ref={userPw}
        onChange={() => {
          setPw(userPw.current.value);
        }}
      />
      <button onClick={onLogin}>로그인</button>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
`;
