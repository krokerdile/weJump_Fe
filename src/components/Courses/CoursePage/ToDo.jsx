import { Link } from "react-router-dom";
import styled from "styled-components";

const todolist = [
    "week1-assignment1(~9/17)",
    "week2-assignment2(~9/17)",
];

const ToDo = () => {
    return (
        <ToDoWrapper>
            <div className="todo-heading">ToDo</div>
            <div className="todo-list">
                {todolist.map((item, index) => (
                    <Link to={``} key={index} className="todo-item">
                        {item}
                    </Link>
                ))}
            </div>
        </ToDoWrapper>
    );
};

export default ToDo;

const ToDoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    width: fit-content;
    border-radius: 5px;

    .todo-heading {
        font-weight: bold;
        font-size: 1.2rem;
    }

    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;

        .todo-item {
            text-decoration: none;
            color: #333;
            padding: 0.5rem;
        }
    }
`;
