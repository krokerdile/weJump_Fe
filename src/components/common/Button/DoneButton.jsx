import DefaultButton from "./DefaultButton";

const DoneButton = ({onClick}) => {
    return (
     <DefaultButton onClick={onClick} text="Done" background="#008354" />
    )
};

export default DoneButton;