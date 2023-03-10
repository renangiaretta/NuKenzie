import styled from 'styled-components';


export const StyledIndex = styled.div`
    display         : flex;
    justify-content : center;
    align-items     : center;
    width           : 100vw;
    height          : 100vh;
    background-color: #212529;
    position        : fixed;
    top             : 0;
    left            : 0;
    .mainContainer {
        width          : 55rem;
        height         : 37rem;
        display        : flex;
        justify-content: center;
        align-items    : center;
    }
    .left-container {
        width          : 50%;
        height         : 100%;
        display        : flex;
        flex-direction : column;
        justify-content: center;
        margin: 0 auto;
    }
    .left-container img {
        width : 7.625rem;
        height: 1.25rem;
        color : #FFFFFF;

    }
    .left-container h1 {
        font-family: 'Nunito' sans-serif;
        font-weight: 800;
        font-size  : 2.25rem;
        line-height: 3rem;
        color      : #FFFFFF;

    }
    .left-container p {
        font-family: 'Nunito' sans-serif;
        font-weight: 500;
        font-size  : 1rem;
        line-height: 1.625rem;
        color      : #FFFFFF;
    }
    .left-container button {
        background-color: #fd377e;
        width           : 15rem;
        height          : 3rem;
        border          : 2px solid #fd377e;
        border-radius   : 8px;
        color           : #FFFFFF;
        font-family     : 'Inter' sans-serif;
        font-weight     : 600;
        font-size       : 1rem;
        line-height     : 1.5rem;
        cursor          : pointer;
        :hover {
            background-color: #E34981;
        }
    }
    .indexRightContainer {
        height         : 50%;
        width          : 50%;
        display        : flex;
        justify-content: center;
        align-items    : center;
    }
    .right-img {
        width: 95%;
    }
    @media ( max-width: 900px ) {
        height: auto;
        .mainContainer {
            flex-direction: column;
            height: auto;
        }
        .left-container {
            width: 100%;
            align-items: center;
            margin-bottom: 2rem;
            h1 {
                width: 80%;
                text-align: center;
            }
        }
        .right-img {
            height: auto;
            width: 20rem;
        }
    }

`