import { useState } from 'react'
import Table from "./components/Table";
import Header from "./components/Header";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import data from './data.json'
import './App.css'
function App() {
  
  const [info, setInfo] = useState(data)
  
  return (
    <div className="app" >
      <Header/>
      <Routes>
        <Route  path={"/"} element={<Table info={info} />} />
        <Route  path={"/formulario"} element={<Form setInfo={setInfo}  info={info}/>} />
      </Routes>

      
    </div>
  );
}

export default App;
