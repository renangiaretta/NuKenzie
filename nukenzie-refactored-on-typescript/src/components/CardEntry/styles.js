import styled from "styled-components";


export const StyledCardEntry = styled.div`

    display: flex;
    width: 100%;
    height: 87px;
    background-color: black;
    .card-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-left: 2px solid green;
        border-radius: 4px;
        background-color: red;
    }
    .card-texts {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        width: 45%;
        height: 100%;
        background-color: blue;
    }
    
    .amount-container {
        display: flex;
        justify-content: space-around;
        width: 60%;
        height: 100%;
        background-color: yellow;
        align-items: center;
    }

    button {
        cursor: pointer;
    }

`