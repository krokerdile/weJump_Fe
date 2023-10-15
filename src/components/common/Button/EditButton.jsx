import DefaultButton from "./DefaultButton";

const EditButton = ({onClick}) => {
    return (
     <DefaultButton onClick={onClick} text="Edit" background="grey1" />
    )
};

export default EditButton;