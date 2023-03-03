import React from 'react'
import { StyledCardEntry } from './styles'

const CardEntry = ({ value }) => {
    return (
        <StyledCardEntry>
            <div  className = {value.valueType === 'entrada' ? 'entryCard card-container' : 'expenseCard card-container'} >
                <div  className = 'card-texts'>
                    <span className = 'entry-name title3'>
                        {
                            value.description
                        }
                    </span>
                    <span className = 'type-of-entry'>
                        {
                            value.valueType
                        }
                    </span>
                </div>
                <div  className = 'amount-container'>
                    <span className = 'amount-value'>
                        {
                            value.value
                        }
                    </span>
                    <button>
                        DELTE
                    </button>
                </div>
            </div>
        </StyledCardEntry>
    )
}

export default CardEntry