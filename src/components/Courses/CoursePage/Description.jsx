import React, { useState } from "react";
import styled from "styled-components";
import rectangle from "../icon/rectangle.png";

const Description = ({ outline }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <DescriptionBox>
      <DescriptionHeader onClick={toggleAccordion}>
        <span>Description</span>
        <ExpandIcon  isExpanded={isExpanded}>
          <img src={rectangle} alt="rectangle" width="24" height="14"/>
        </ExpandIcon>
      </DescriptionHeader>
      <DescriptionDetails isExpanded={isExpanded}>
        {outline && <div>{outline}</div>}
      </DescriptionDetails>
    </DescriptionBox>
  );
};

export default Description;

const DescriptionBox = styled.div`
  border: 2px solid #ccc;
  margin-bottom: 20px;
  width:100%;
  align-items: left;
`;

const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(0deg) scaleY(-1)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;


const DescriptionDetails = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  text-align: left;
  margin-left:1rem;
  margin-bottom: 1rem;
`;
