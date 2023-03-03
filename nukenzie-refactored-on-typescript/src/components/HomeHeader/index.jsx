import React from 'react'
import { StyledHomeHeader } from './styles'
import logo from './../../assets/img/NuKenzie.png'


const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <div    className = 'header-container'>
            <img    src       = {logo} alt = "logo" />
            <button className = 'header-button'>
                    início
                </button>
            </div>
        </StyledHomeHeader>
    )
}

export default HomeHeader