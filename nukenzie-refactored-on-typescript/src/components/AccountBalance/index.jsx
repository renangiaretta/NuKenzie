import React from 'react'
import { StyledAccountBalance } from './styles'

const AccountBalance = ({ valuesList }) => {
    const sumOfEntries = valuesList.reduce((acc,item) => {
        if (!acc[item.valueType]){
            acc[item.valueType] = 0
        }
        acc[item.valueType] += item.value
        return acc
    }, {})
    const entradas = sumOfEntries.entrada ? sumOfEntries.entrada : sumOfEntries.entrada = 0
    const saidas = sumOfEntries.saida? sumOfEntries.saida : sumOfEntries.saida = 0
    const balance = entradas - saidas
    
    
    const test = ( e ) => {

        e.preventDefault()
        console.log('entradas e saidas', sumOfEntries)
        console.log('balance', balance)
    }



    return (
    <StyledAccountBalance>
        <span>
            R$ {balance}
        </span>
        <button onClick={test}>
            teste
        </button>
    </StyledAccountBalance>
    )
}

export default AccountBalance