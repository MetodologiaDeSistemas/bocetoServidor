import React from 'react';
<<<<<<< HEAD
import FileUploadForm from "./Form_Img/Frm-Imagen";
import LoginForm from './Form_Val/FrmVal';
import Precio_Serv from './Form_precio_serv/Precio_Serv';
import Form_horas from './Form_Horas/Form_horas';
import SubirImg from './Form_Img/Frm-Imagen';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Depilacer from './Form_DepiLacer/Depilacer';
import Galeria from './Form_Galeria/Galeria';
import SubirImg from './Form_Img/Frm_Imagen';
import Login from './Form_Val/FrmVal';

>>>>>>> chino

function App() {
  return (
    <div>
<<<<<<< HEAD
      <h1>React Image Upload</h1>
      {/* <FileUploadForm /> */}
      {/* <LoginForm/> */}
      {/* <Precio_Serv/> */}
      {/* <Form_horas/> */}
      <SubirImg/>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Galeria' element={<SubirImg/>}></Route>
          <Route path='/Depilacer' element={<Depilacer/>}></Route>
          <Route path='/Fotos' element={<Galeria/>}></Route>
        </Routes>
      </BrowserRouter>   
>>>>>>> chino
    </div>
  );
}

export default App;
