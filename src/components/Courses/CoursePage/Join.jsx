import styled from "styled-components";
import DefaultButton from "../../common/Button/DefaultButton";

const Join = () => {
    return (
        <JoinWrapper>
            <p className="request">You must be registered for this course in order to see the course materials and announcements.</p>
            <ButtonWrapper>
                <DefaultButton text="Request to Join" background="button" fontWeight="category" color="black"/>
            </ButtonWrapper>
        </JoinWrapper>
    );
};

export default Join

const JoinWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ccc;
    width: 20rem;
    border-radius: 5px;


    .request{
        text-align: left;
        margin-left:1rem;
    }
`;

const ButtonWrapper = styled.div`
    margin-bottom:0.3rem;
`;