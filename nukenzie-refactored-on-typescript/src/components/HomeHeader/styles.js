import styled from 'styled-components';


export const StyledHomeHeader = styled.header`

    width           : 100%;
    height          : 5rem;
    display         : flex;
    justify-content : center;
    align-items     : center;
    background-color: var(--color-grey-1);
    box-shadow      : 0px 2px 5px rgba(0, 0, 0, 0.18);
    .header-container {
        width          : 80%;
        height         : 100%;
        display        : flex;
        justify-content: space-between;
        align-items    : center;
    }
    .logo {
        
    }

    .header-button {
        padding      : 1rem 2rem;
        border       : none;
        border-radius: 0.5rem;
        font-weight  : bold;
        :hover {
            background-color: var(--color-grey-3);
            color           : var(--color-grey-1);
        }
    }
`