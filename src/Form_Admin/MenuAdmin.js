import FechaDep from "../Form_DepiC/FechaDep";
import Depilacer from "../Form_DepiLacer/Depilacer";
import Galeria from "../Form_Galeria/Galeria";
import Form_horas from "../Form_Horas/Form_horas";
import SubirImg from "../Form_Img/Frm_Imagen";
import Precio_Serv from "../Form_precio_serv/Precio_Serv";
import './MenuAdmin.css';

function MenuAdmin() {
    return (
      <div>
        <FechaDep/>
        <Depilacer/>
        <Form_horas/>
        <Galeria/>
        <SubirImg/>
        <Precio_Serv/>
      </div>
    );
  }
  
  export default MenuAdmin;