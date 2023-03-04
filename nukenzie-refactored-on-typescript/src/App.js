import { useState } from 'react';
import AddValues from './components/AddValues.tsx';
import FinancialResume from './components/FinancialResume';
import HomeHeader from './components/HomeHeader';
import Index from './components/Index/Index';
import GlobalStyle from './globalStyle';



function App() {
  const [ formData, setFormData ] = useState([])
  const valuesList                = formData
  const [category, setCategory]   = useState('')
  const filtered                  = category ? valuesList.filter(el => el.valueType === category) : valuesList
  const [ login, setLogin ]       = useState(false)
  const log                       = login
  const removeEntry               = (entryName) => {
    const newList = valuesList.filter(el=> el.description !== entryName)
    setFormData(newList)
  }


  return (
    <div className = 'App'>
      {!log ?
        <Index setLogin = {setLogin} />
      : 
        <>
          <GlobalStyle/>
            <HomeHeader      setLogin   = {setLogin} />
            <div             className  = 'main-container'>
            <AddValues       valuesList = {valuesList} setFormData = {setFormData} />
            <FinancialResume valuesList = { valuesList } filtered  = {filtered} setCategory = {setCategory} removeEntry = {removeEntry} />
            </div>
        </>
      }
    </div>
  );
}

export default App;
