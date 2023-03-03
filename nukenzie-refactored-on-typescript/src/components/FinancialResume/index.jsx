import React from 'react'
import CardEntry from './../CardEntry'


import { StyledFinancialResume } from './styles'

const FinancialResume = ({ valuesList }) => {

    return (
        <StyledFinancialResume>

            <div className='financial-container'>

                <div className='text-container'>
                    <h3>
                        Resumo Financeiro
                    </h3>
                </div>
                    <h2>
                        Você ainda não possui nenhum lançamento
                    </h2>
                <div className='cards-container'>
                    <ul>
                        {
                            valuesList.map(( valores, index ) => {
                                return <CardEntry key={index} value={valores} />
                            })
                        }
                    </ul>
                </div>

            </div>


        </StyledFinancialResume>
    )
}

export default FinancialResume