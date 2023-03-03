import React, { useState } from 'react'
import AccountBalance from '../AccountBalance'
import { StyledAddValues } from './styles'

const AddValues = ( { valuesList, setFormData } ) => {

  
  const [ description, setDescription ] = useState('')
  const [ value, setValue ] = useState('')
  const [ valueType, setValueType ] = useState('entrada')



  const handleSubmit = ( event ) => {
    event.preventDefault()
    setFormData(
      [...valuesList,
      {
      description,
      value,
      valueType
    }])
  }


  return (
    <StyledAddValues>
      <form className='addValuesContainer' onSubmit={handleSubmit} >
        <div className='decription-container'>
          Descrição
        </div>
        <div className='description-input-container'>
          <input className='description-input' type="text" placeholder='Digite aqui sua descrição' onChange={e => setDescription(e.target.value)} />
        </div>
        <span className='description-input-text'>
          Ex: Compra de roupas
        </span>
        <div className='description-values-container'>
          <div className='values-container'>
            <span>
              Valor
            </span>
            <input className='values' type="text" placeholder='R$' onChange={e => setValue( parseInt(e.target.value))} />
          </div>
          <div className='values-container'>
            <span>
              Tipo de valor
            </span>
            <select className='values' name="valueType" defaultValue={'select'} id="" onChange={e => setValueType(e.target.value)} >
              <option value="entrada">
                entrada
              </option>
              <option value="saida">
                saída
              </option>
            </select>
          </div>
        </div>
          <button>
            INSERIR VALOR
          </button>
          {
            valuesList.length > 0  ? <AccountBalance valuesList={valuesList} /> : null
          }
      </form>
      
    </StyledAddValues>
  )
}

export default AddValues