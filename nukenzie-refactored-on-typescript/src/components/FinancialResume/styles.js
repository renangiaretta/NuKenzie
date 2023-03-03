import styled from "styled-components";


export const StyledFinancialResume = styled.div`

    display: flex;
    flex-direction: column;
    width: 560px;
    height: 400px;

    .financial-container {
        width: 90%;
        height: 80%;
        overflow-y: scroll;
        ::-webkit-scrollbar {
            width: 0.5rem; 
            color: green;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba( 0,0,0,0.2);
            border-radius: 8px;
            height: 0.1rem;
            width: 0.5rem;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-top: 1rem;
        gap: 1rem;
        justify-content: center;
    }
`