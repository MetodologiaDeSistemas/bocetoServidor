import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FechaDep from './Form_DepiC/FechaDep';
import Depilacer from './Form_DepiLacer/Depilacer';
import Galeria from './Form_Galeria/Galeria';
import SubirImg from './Form_Img/Frm_Imagen';
import Login from './Form_Val/FrmVal';
import Cliente_horas from './Form_Horas/Cliente_Horas/Cliente_horas';
import Cli_pre_serv from './Form_precio_serv/Cliente_precio_serv/Cli_pre_serv';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Galeria' element={<SubirImg/>}></Route>
          <Route path='/Depilacer' element={<Depilacer/>}></Route>
          <Route path='/Fotos' element={<Galeria/>}></Route>
          <Route path='/FechaDep' element={<FechaDep/>}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
