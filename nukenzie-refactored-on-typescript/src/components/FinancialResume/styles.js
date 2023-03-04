import styled from 'styled-components';


export const StyledFinancialResume = styled.div`

    display       : flex;
    flex-direction: column;
    width         : 560px;
    height        : 400px;
    .text-container {
        display        : flex;
        justify-content: space-between;
    }
    .buttons-container {
        display        : flex;
        justify-content: space-around;
        width          : 50%;
    }
    .financial-container {
        display       : flex;
        flex-direction: column;
        width         : 100%;
        height        : 80%;
        overflow-y    : scroll;
        ::-webkit-scrollbar {
            width        : 0.5rem;
            color        : green;
            border-radius: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba( 0,0,0,0.2);
            border-radius   : 8px;
            height          : 0.1rem;
            width           : 0.5rem;
        }
    }
    button {
        padding         : 1rem 2rem;
        background-color: var(--color-grey-2);
        border          : none;
        border-radius   : 0.5rem;
        font-family     : 'Nunito' sans-serif;
        font-size       : 1.2rem;
        font-weight     : bold;
        :hover {
            color           : white;
            background-color: var(--color-primary2);
        }
    }
    ul {
        display        : flex;
        align-items    : center;
        flex-direction : column;
        height         : 100%;
        width          : 100%;
        margin-top     : 1rem;
        gap            : 1rem;
        justify-content: center;
    }
`