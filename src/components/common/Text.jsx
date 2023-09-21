import styled from "styled-components";

const Text = ({ text, fontSize, fontWeight, color, onClick }) => {
  return (
    <TextLine fontSize={fontSize} onClick={onClick} fontWeight={fontWeight} color={color}>
      {text}
    </TextLine>
  );
};

export default Text;

const TextLine = styled.p`
  font-size: ${(props) => props.theme.fontSize[props.fontSize]};
  font-weight: ${(props) => props.theme.fontWeight[props.fontWeight]};
  color: ${(props) => props.theme.color[props.color]};
  text-decoration: none;
`;
