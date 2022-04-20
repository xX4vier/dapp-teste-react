import React from "react";
import {Routes,Route} from 'react-router-dom';
import Historico from './pages/historico/Historico'
import Registro from './pages/registro/Registro'

const Rout = () => {


    return(
        <Routes>
            <Route exact path="/" element={<Historico/>}/> 
            <Route exact path="/registro" element={<Registro/>}/> 
        </Routes>
    )
}
export default Rout;