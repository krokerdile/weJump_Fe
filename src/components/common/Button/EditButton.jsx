import DefaultSmallButton from "./DefaultSmallButton";

const EditButton = ({onClick}) => {
    return (
     <DefaultSmallButton onClick={onClick} text="Edit" background="grey1" />
    )
};

export default EditButton;