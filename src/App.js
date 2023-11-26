import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Depilacer from './Form_DepiLacer/Depilacer';
import SubirImg from './Form_Img/Frm-Imagen';
import Login from './Form_Val/FrmVal';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Imagen' element={<SubirImg/>}></Route>
          <Route path='/Depilacer' element={<Depilacer/>}></Route>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
