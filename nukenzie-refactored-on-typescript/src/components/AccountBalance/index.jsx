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
    const entradas = sumOfEntries.Entrada ? sumOfEntries.Entrada : sumOfEntries.Entrada = 0
    const saidas   = sumOfEntries.Saída? sumOfEntries.Saída : sumOfEntries.Saída        = 0
    const balance  = entradas - saidas

    return (
    <StyledAccountBalance>
        <span className = 'title1'>
            Saldo: 
        </span>
        <span className = 'title4'>
            R$  {balance}
        </span>
    </StyledAccountBalance>
    )
}

export default AccountBalance