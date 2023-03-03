import { useState } from "react";
import AddValues from "./components/AddValues.tsx";
import FinancialResume from "./components/FinancialResume";
import HomeHeader from "./components/HomeHeader";
import GlobalStyle from "./globalStyle";



function App() {
  const [ formData, setFormData ] = useState([])
  const valuesList                = formData
  return (
    <div className = "App">
        <>
          <GlobalStyle/>
            <HomeHeader/>
            <div             className  = "main-container">
            <AddValues       valuesList = {valuesList} setFormData = {setFormData} />
            <FinancialResume valuesList = { valuesList } />
            </div>
        </>
    </div>
  );
}

export default App;
