import React from 'react'
import logo from './../../assets/img/logo.png'
import illustration from './../../assets/img/illustration.svg'
import { StyledIndex } from './styles'


const Index = ( {setLogin} ) => {
    return (
        <StyledIndex>
            <div className = 'mainContainer'>
            <div className = 'left-container'>
            <img src       = {logo} alt = 'logo' />
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button type = 'button' onClick = {() => setLogin(true)}>Iniciar</button>
            </div>
            <div className = 'IndexRightContainer'>
            <img className = 'right-img' src = {illustration} alt = 'NAOACHEIAMERDADAIMAGEM' />
            </div>
            </div>
        </StyledIndex>
    )
}

export default Index