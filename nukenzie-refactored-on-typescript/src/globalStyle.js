import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    font-family: Arial, Helvetica, sans-serif, 'Nunito', sans-serif;
    :root{
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@font-weight&display=swap');
    --color-primary1 : #FD377E;
    --color-primary2 : #E34981;
    --color-secondary: #03B898;
    --color-grey-1   : #F8F9FA;
    --color-grey-2   : #E9ECEF;
    --color-grey-3   : #868E96;
    --color-grey-4   : #212529;
    font-size        : 60%;
}
        
    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }
    * {
        margin    : 0;
        padding   : 0;
        outline   : 0;
        box-sizing: border-box;
    }
    body, html {
        justify-content: center;
        width          : 100vw;
        height         : 100vh;
          /* background-color: #212529; */
    }
    body {
        font-family: Nunito;
        font-size  : 1.6rem;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: none;
    }
    .main-container {
        margin-top      : 2rem;
        display         : flex;
        justify-content : center;
        align-items     : center;
        gap             : 4rem;
        background-color: var(--color-grey-1);
    }
    .title1 {
        font-weight: bold;
        font-size  : 3.8rem;
        line-height: 2.8rem;
        color      : var(--color-grey-4);
    }
    .title2 {
        font-family: 'Nunito' sans-serif;
        font-weight: bold;
        font-size  : 2rem;
        color      : var(--color-grey-4);
    }
    .title3 {
        font-weight: bold;
        font-size  : 1.6rem;
        line-height: 2.2rem;
        color      : rgba(0,0,0,0.5);
    }
    .title4 {
        font-family: Nunito;
        font-weight: 800;
        font-size  : 3.5rem;
        line-height: 2.8rem;
        color      : var(--color-primary1);
    }
    .headline{
        font-weight: 400;
        font-size  : 1.6rem;
        color      : red;
    }
    .placeholderText {
        font-weight: 400;
        font-size  : 1.624rem;
        line-height: 2.639rem;
    }
    .buttonText {
        font-weight: 500;
        font-size  : 1.6rem;
        line-height: 2.639rem;
    }
    @media ( max-width: 900px ){
        .main-container {
            flex-direction: column;
            margin: 0 auto;
        }
    }

`