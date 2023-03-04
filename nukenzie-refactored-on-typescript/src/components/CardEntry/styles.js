import styled from 'styled-components';


export const StyledCardEntry = styled.div`

    display         : flex;
    width           : 100%;
    height          : 87px;
    background-color: aliceblue;
    border          : 1px solid rgba(0,0,0,0.05);
    border-radius   : 5px;
    .entryCard {
        border-left: 4px solid var(--color-secondary);
    }
    .expenseCard {
        border-left: 4px solid red;
    }
    .card-container {
        display        : flex;
        justify-items  : flex-start;
        justify-content: space-between;
        width          : 100%;
        margin         : 1px solid red;
        border-radius  : 5px;
    }
    .card-texts {
        display        : flex;
        align-items    : center;
        flex-direction : column;
        justify-content: space-around;
        width          : 45%;
        height         : 100%;
        margin-left    : 2px solid green;
        margin         : 2px solid red;
    }
    
    .amount-container {
        display        : flex;
        justify-content: space-around;
        width          : 40%;
        height         : 100%;
        align-items    : center;
        margin-left    : 2px solid green;
    }
    ul {
        gap: 1rem;
    }
    .trash-btn {
        display        : flex;
        justify-content: center;
        align-items    : center;
        height         : 3.5rem;
        width          : 3.5rem;
        :hover {
            background-color: var(--color-grey-3);
            
        }
    }

`