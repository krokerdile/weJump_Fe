import { Link } from "react-router-dom";
import styled from "styled-components";

const todolist = [
    "week1-assignment1(~9/17)",
    "week2-assignment2(~9/17)",
];

const ToDo = () => {
    return (
        <ToDoWrapper>
            <div>ToDo</div>
            {todolist.map((item, index) => (
                <Link to={``} key={index}>
                    <div>{item}</div>
                </Link>
            ))}
        </ToDoWrapper>
    );
};

export default ToDo;

const ToDoWrapper = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;
