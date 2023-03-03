import styled from "styled-components";


export const StyledCardEntry = styled.div`

    display: flex;
    width: 90%;
    height: 87px;
    background-color: aliceblue;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 5px;
    .entryCard {
        border-left: 4px solid var(--color-secondary);
    }
    .expenseCard {
        border-left: 4px solid red;
    }
    .card-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 1px solid red;
        border-radius: 5px;
        /* background-color: red; */
        /* border-left: 4px solid red; */
    }
    .card-texts {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        width: 45%;
        height: 100%;
        margin-left: 2px solid green;
        margin: 2px solid red;
        /* background-color: blue; */
    }
    
    .amount-container {
        display: flex;
        justify-content: space-around;
        width: 60%;
        height: 100%;
        /* background-color: yellow; */
        align-items: center;
        margin-left: 2px solid green;
    }
    ul {
        gap: 1rem;
    }
    button {
        cursor: pointer;
    }

`