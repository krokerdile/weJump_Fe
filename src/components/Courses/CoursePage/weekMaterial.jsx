import React, { useState } from "react";
import styled from "styled-components";
import rectangle from "../icon/rectangle.png";
import circle from "../icon/circle.png";
import greenCircle from "../icon/greenCircle.png";

const weekMaterial = ({ category, deadline, detail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // MaterialDeadline은 category가 "assignment" 일 때만 렌더링
  const renderMaterialDeadline = () => {
    if (category === "assignment") {
      return <MaterialDeadline>{deadline}</MaterialDeadline>;
    }
    return null;
  };

  // isSubmitted는 한 번이라도 isExpanded가 true가 된 적이 있으면 true로 유지
  const toggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setIsSubmitted(true);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <MaterialWrapper>
      <MaterialTitle>{category}</MaterialTitle>
      {renderMaterialDeadline()}
      <MaterialCheck>{isSubmitted ? {greenCircle} : {circle}}</MaterialCheck>
      <ExpandIcon isExpanded={isExpanded} onClick={toggleExpand}>
        <img src={rectangle} alt="rectangle" width="24" height="14" />
      </ExpandIcon>
      {isExpanded && (
        <MaterialDetail isExpanded={isExpanded}>
          {detail}
        </MaterialDetail>
      )}
    </MaterialWrapper>
  );
};

export default weekMaterial;

const MaterialWrapper = styled.div`
  /* Add your styling for MaterialWrapper here */
`;

const MaterialTitle = styled.div`
  /* Add your styling for MaterialTitle here */
`;

const MaterialDeadline = styled.div`
  /* Add your styling for MaterialDeadline here */
`;

const MaterialCheck = styled.div`
  /* Add your styling for MaterialCheck here */
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(0deg) scaleY(-1)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const MaterialDetail = styled.div`
  /* Add your styling for MaterialDetail here */
`;
