import styled from "styled-components"



export const StyledAddValues = styled.div`

    width: 363px;
    height: 351px;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    .addValuesContainer {
        height: 80%;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .description-container {
        width: 100%;
    }
    .description-input-container {
        width: 100%;
        height: 52.8px;
    }
    .description-input {
        width: 100%;
        height: 100%;
        border: 2px solid #F8F9FA;
        border-radius: 8px;
    }
    .description-values-container {
        width: 100%;
        height: 70px;
        display: flex;
    }
    .values-container {
        background-color: red;
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    .values {
        width: 150px;
        height: 48px;
        border: 2px solid F8F9FA;
        border-radius: 8px;
        /* padding: 0px 16px; */
        background-color: blue;
    }
    button {
        cursor: pointer;
        width: 100%;
        height: 48px;
        background-color: #FD377E;
        border: 2px solid #FD377E;
        border-radius: 8px;
        padding: 13px 20px;
        color: white;
    }












`