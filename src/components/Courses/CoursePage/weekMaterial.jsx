import React, { useState } from "react";
import styled from "styled-components";
import rectangle from "../icon/rectangle.png";
import circle from "../icon/circle.png";
import greenCircle from "../icon/greenCircle.png";

const weekData = [
  {
    "lesonId": 1,
    "week": 1,
    "start": "2023-09-25",
    "video": "helloworld",
    "assignmentResponseDTO": {
        "assignmentId": 1,
        "title": "learning print",
        "description": "submit until 09-26",
        "end": "2023-09-26"
        }
    },
    {
        "lessonId": 2,
        "week": 2,
        "start": "2023-09-25",
        "video": "helloworld",
        "assignmentResponseDTO": null
    }
];

const weekMaterial = ({ category, weekData }) => {
  if (!weekData) {
    return null;
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { lessonId, week, start, video, assignmentResponseDTO } = weekData;

  const renderMaterialDeadline = () => {
    if (category === "Assignment" && assignmentResponseDTO) {
      const deadlineDate = assignmentResponseDTO.end.replace("Submit by: ", "");
      const parsedDeadline = new Date(deadlineDate);
      const month = String(parsedDeadline.getMonth() + 1).padStart(2, "0");
      const day = String(parsedDeadline.getDate()).padStart(2, "0");
      const formattedDeadline = `${month}/${day}`;

      return <MaterialDeadline>{`${formattedDeadline}`}</MaterialDeadline>;
    }
    return null;
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    // isSubmitted를 한 번이라도 isExpanded가 true가 된 적이 있으면 true로 유지
    if (!isExpanded) {
      setIsSubmitted(true);
    }
  };

  return (
    <MaterialWrapper>
      <TitleWrapper>
        <MaterialTitle>{category}</MaterialTitle>
        <Wrapper>
          {renderMaterialDeadline()}
          <MaterialCheck>
            {isSubmitted ? <img src={greenCircle} alt="Green Circle" /> : <img src={circle} alt="Circle" />}
          </MaterialCheck>
          <ExpandIcon isExpanded={isExpanded} onClick={toggleExpand}>
            <img src={rectangle} alt="rectangle" width="24" height="14" />
          </ExpandIcon>
        </Wrapper>
      </TitleWrapper>
      {isExpanded && (
        <MaterialDetail isExpanded={isExpanded}>
          {category === "Assignment" ? `${assignmentResponseDTO.title}\n${assignmentResponseDTO.end}` : `Video: ${video}`}
        </MaterialDetail>
      )}
    </MaterialWrapper>
  );
};

export default weekMaterial;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

const MaterialWrapper = styled.div`
  width: 100%;
`;

const MaterialTitle = styled.div`
  display: flex;
  padding: 0.51rem;
  font-weight: bold;
`;

const MaterialDeadline = styled.div`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const MaterialCheck = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  margin-right: 1rem;
`;

const ExpandIcon = styled.span`
  font-size: 20px;
  transform: ${(props) => (props.isExpanded ? "rotate(0deg) scaleY(-1)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const MaterialDetail = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  text-align: left;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;