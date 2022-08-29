import { useState } from 'react';
import Table from "./component/table.jsx";
import Header from "./component/header.jsx";
import Form from "./component/form.jsx";
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
