import React, { useState } from "react";
import styled from "styled-components";
import rectangle from "../icon/rectangle.png";

const RequiredMaterials = ({ textbook }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleAccordion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <RequiredMaterialsBox>
      <RequiredMaterialsHeader onClick={toggleAccordion}>
        <span>Required Materials</span>
        <ExpandIcon isExpanded={isExpanded}>
          <img src={rectangle} alt="rectangle" width="24" height="14"/>
        </ExpandIcon>
      </RequiredMaterialsHeader>
      <RequiredMaterialsDetails isExpanded={isExpanded}>
        {textbook && <div>{textbook}</div>}
      </RequiredMaterialsDetails>
    </RequiredMaterialsBox>
  );
};

export default RequiredMaterials;

const RequiredMaterialsBox = styled.div`
  border: 2px solid #ccc;
  margin-bottom: 20px;
  width: 100%;
  align-items: left;
`;

const RequiredMaterialsHeader = styled.div`
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

const RequiredMaterialsDetails = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  text-align: left;
  margin-left:1rem;
  margin-bottom: 1rem;
`;
