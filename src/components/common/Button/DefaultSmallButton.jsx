import styled from "styled-components";

const DefaultSmallButton = ({ text, onClick, color, background, fontWeight }) => {
  return (
    <ButtonWrapper color={color} onClick={onClick} background={background} fontWeight={fontWeight}>
      {text}
    </ButtonWrapper>
  );
};

export default DefaultSmallButton;

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 4px;
  border: 1px solid;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: ${(props) => props.theme.color[props.background]};
  color: ${(props) => props.theme.color[props.color]};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};
  min-height: 1rem;
  margin-left : 0.5rem;
`;
