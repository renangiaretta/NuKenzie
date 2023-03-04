import React from 'react'
import CardEntry from './../CardEntry'


import { StyledFinancialResume } from './styles'

const FinancialResume = ({ valuesList, filtered, setCategory, removeEntry }) => {

    const filterAll = () => {
        setCategory('')
    }
    const filterEntry = () => {
        setCategory('Entrada')
    }
    const filterExpense = () => {
        setCategory('Saída')
    }
    return (
        <StyledFinancialResume>
            <div className = 'financial-container'>
            <div className = 'text-container title2'>
                    <h3>
                        Resumo Financeiro
                    </h3>
                    <div    className = 'buttons-container'>
                    <button onClick   = {filterAll}>Todos</button>
                    <button onClick   = {filterEntry}>Entradas</button>
                    <button onClick   = {filterExpense}>Saídas</button>
                    </div>
                </div>
                    {
                            valuesList.length === 0 ?
                        <h2 className           = 'title3 no-entries'>
                        Você ainda não possui nenhum lançamento.
                        </h2>
                    : 
                    <div className = 'cards-container'>
                        <ul>
                            {
                                filtered.map(( valores, index ) => {
                                    return <CardEntry key = {index} value = {valores} removeEntry = {removeEntry} />
                                })
                            }
                        </ul>
                    </div>
                    }
                
            </div>
        </StyledFinancialResume>
    )
}

export default FinancialResume