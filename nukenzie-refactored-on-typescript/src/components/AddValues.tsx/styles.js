import styled from "styled-components"


export const StyledAddValues = styled.div`

    width: 35.5rem;
    height: 43.4rem;
    border: 1px solid #0000003a;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    .addValuesContainer {
        height: 95%;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
        border: 1px solid var(--color-grey-3);
        border-radius: 8px;
        background-color: var(--color-grey-2);
    }
    .description-values-container {
        width: 100%;
        height: 70px;
        display: flex;
    }
    .values-container {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    .values {
        width: 85%;
        height: 48px;
        border: 1px solid var(--color-grey-3);
        border-radius: 8px;
        background-color: var(--color-grey-2);
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