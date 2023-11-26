import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubirImg from './Form_Img/Frm-Imagen';
import Login from './Form_Val/FrmVal';


function App() {
  return (
    <div>
      {/* <FileUploadForm /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/Imagen' element={<SubirImg/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
