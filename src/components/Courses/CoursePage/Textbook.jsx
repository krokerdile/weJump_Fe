import React, { useState } from "react";
import styled from "styled-components";

const Textbook = ({ textbook }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <TextbookBox>
      <TextbookHeader onClick={toggleAccordion}>
        <span>Textbook & Other References</span>
        <ExpandIcon isExpanded={isExpanded}>+</ExpandIcon>
      </TextbookHeader>
      <TextbookDetails isExpanded={isExpanded}>
        {textbook && <div>{textbook}</div>}
      </TextbookDetails>
    </TextbookBox>
  );
};

export default Textbook;

const TextbookBox = styled.div`
  border: 2px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  align-items: left;
`;

const TextbookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  background-color: #f0f0f0;
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const TextbookDetails = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;
