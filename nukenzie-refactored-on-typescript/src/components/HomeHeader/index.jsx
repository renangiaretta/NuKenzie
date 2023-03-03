import React from 'react'
import { StyledHomeHeader } from './styles'

const HomeHeader = () => {
    return (
        <StyledHomeHeader>
            <div className='header-container'>
                <span className='logo'>
                    NUKENZIE
                </span>
                <button className='header-button'>
                    início
                </button>
            </div>
        </StyledHomeHeader>
    )
}

export default HomeHeader