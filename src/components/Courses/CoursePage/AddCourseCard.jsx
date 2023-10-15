import styled from "styled-components";

const AddCourseCard = () => {
  return (
    <CardWrapper>
      <div>+</div>
    </CardWrapper>
  );
};

export default AddCourseCard;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 20.8125rem;
  height: 15rem;
  flex-shrink: 0;
  border: dashed 1px black;
  border-radius: 1rem;
  flex-basis: 25%;
  justify-content: center;
  font-size: 5rem;
  text-align: center;
  align-items: center;
`;
