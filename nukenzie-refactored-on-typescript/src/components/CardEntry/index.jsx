import React from 'react'
import { StyledCardEntry } from './styles'
import trash from './../../assets/img/trash.png'

const CardEntry = ({ value, removeEntry }) => {
    return (
        <StyledCardEntry>
            <div  className = {value.valueType === 'entrada' ? 'entryCard card-container' : 'expenseCard card-container'} >
            <div  className = 'card-texts'>
            <span className = 'entry-name title2'>
                        {
                            value.description
                        }
                    </span>
                    <span className = 'type-of-entry title3'>
                        {
                            value.valueType
                        }
                    </span>
                </div>
                <div  className = 'amount-container'>
                <span className = 'amount-value title3'>
                        R$ 
                        {
                            ` ${ value.value}`
                        }
                    </span>
                    <button className = 'trash-btn' onClick = {()=> {removeEntry(value.description)}} >
                    <img    src       = {trash} alt         = '' />
                    </button>
                </div>
            </div>
        </StyledCardEntry>
    )
}

export default CardEntry