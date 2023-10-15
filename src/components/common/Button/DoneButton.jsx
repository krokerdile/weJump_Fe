import DefaultSmallButton from "./DefaultSmallButton";

const DoneButton = ({onClick}) => {
    return (
     <DefaultSmallButton onClick={onClick} text="Done" background="#008354" />
    )
};

export default DoneButton;