import React from 'react';
import FileUploadForm from "./Form_Img/Frm-Imagen";
import LoginForm from './Form_Val/FrmVal';
import Precio_Serv from './Form_precio_serv/Precio_Serv';
import Form_horas from './Form_Horas/Form_horas';

function App() {
  return (
    <div>
      <h1>React Image Upload</h1>
      {/* <FileUploadForm /> */}
      {/* <LoginForm/> */}
      {/* <Precio_Serv/> */}
      <Form_horas/>
    </div>
  );
}

export default App;
