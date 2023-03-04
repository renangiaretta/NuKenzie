import React from 'react'
import { StyledHomeHeader } from './styles'
import logo from './../../assets/img/NuKenzie.png'


const HomeHeader = ( {setLogin} ) => {
    
    return (
        <StyledHomeHeader>
            <div    className = 'header-container'>
            <img    src       = {logo} alt              = 'logo' />
            <button className = 'header-button' onClick = {() => setLogin(false)}>
                    Início
                </button>
            </div>
        </StyledHomeHeader>
    )
}

export default HomeHeader