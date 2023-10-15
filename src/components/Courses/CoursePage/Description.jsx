import React, { useState } from "react";
import styled from "styled-components";
import rectangle from "../icon/rectangle.png";
import EditButton from "../../common/Button/EditButton";
import DoneButton from "../../common/Button/DoneButton";

const Description = ({ outline }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedOutline, setEditedOutline] = useState(outline);

  const toggleAccordion = () => {
    if (!isEditing) {
      setIsExpanded((prevState) => !prevState);
    }
  };

  const toggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleOutlineChange = (e) => {
    setEditedOutline(e.target.value);
  };

  const handleDone = () => {
    toggleEdit();
  };

  return (
    <DescriptionBox>
      <DescriptionHeader>
        <span onClick={toggleAccordion}>Description</span>
        {isEditing ? (
          <DoneButton onClick={handleDone} />
        ) : (
          <EditButton onClick={toggleEdit} />
        )}
        <ExpandIcon isExpanded={isExpanded} onClick={toggleAccordion}>
          <img src={rectangle} alt="rectangle" width="24" height="14" />
        </ExpandIcon>
      </DescriptionHeader>
      <DescriptionDetails isExpanded={isExpanded}>
        {isEditing ? (
          <EditBox
            type="text"
            value={editedOutline}
            onChange={handleOutlineChange}
          />
        ) : (
          <div>{editedOutline}</div>
        )}
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


const EditBox = styled.input`
  width: 100%;
  height: 100%;
  overflow: auto;
`