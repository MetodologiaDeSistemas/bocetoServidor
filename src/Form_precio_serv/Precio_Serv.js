import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import './Precio_Serv.css'
function Precio_Serv() {
  // Estados para almacenar los valores editados
  const [manicuraTrad, setManicuraTrad] = useState("");
  const [esmaltadoSemi, setEsmaltadoSemi] = useState("");
  const [retiroEsmalte, setRetiroEsmalte] = useState("");
  const [cejasPerfil, setCejasPerfil] = useState("");
  const [definitivaPromo, setDefinitivaPromo] = useState("");


   // Obtener precios del servidor al cargar el componente
   useEffect(() => {
    fetch("http://localhost:9000/api/precio")
      .then((response) => response.json())
      .then((data) => {
        // Actualizar cada estado con los precios obtenidos
        if (data.length > 0) {
          const precios = data[0];
          setManicuraTrad(precios.Manicura_trad || "");
          setEsmaltadoSemi(precios.Esmaltado_sem_per || "");
          setRetiroEsmalte(precios.Retiro_esmalte || "");
          setCejasPerfil(precios.Cejas || "");
          setDefinitivaPromo(precios.Depilacion_def || "");
        }
      })
      .catch((error) => {
        console.error("Error al obtener precios del servidor:", error);
      });
  }, []); // El [] asegura que se ejecute solo una vez al montar el componente

//------------------------------------------------------------------------------------
const handleActualizarPrecios = () => {
    const preciosActualizados = {
      Manicura_trad: manicuraTrad,
      Esmaltado_sem_per: esmaltadoSemi,
      Retiro_esmalte: retiroEsmalte,
      Cejas: cejasPerfil,
      Depilacion_def: definitivaPromo,
    };

    // Aquí puedes enviar los datos editados al servidor usando fetch o axios
    fetch(`http://localhost:9000/api/precio/${"6562670977f4d96a69968124"}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preciosActualizados),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Precios actualizados:", data);
        // Puedes hacer algo después de actualizar, como mostrar un mensaje
      })
      .catch((error) => {
        console.error("Error al actualizar precios:", error);
      });
  };


  return (
    <div className="tableconten">
      <h1>Servicios Disponibles</h1>

      <table id="customers">
        <thead>
          <tr>
            <th>Servicios</th>
            <th>Precios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manicura Tradicional</td>
            <td>
              ${" "}
              <label
                className="manicuratrad"
                contentEditable
                onBlur={(e) => setManicuraTrad(e.target.innerText)}
              >
                {manicuraTrad}
              </label>
            </td>
          </tr>
          <tr>
            <td>Esmaltado Semi Permanente</td>
            <td>
              ${" "}
              <label
                className="esmaltadosemi"
                contentEditable
                onBlur={(e) => setEsmaltadoSemi(e.target.innerText)}
              >
                {esmaltadoSemi}
              </label>{" "}
            </td>
          </tr>
          <tr>
            <td>Retiro de Esmalte</td>
            <td>
              ${" "}
              <label
                className="retiroesmalte"
                contentEditable
                onBlur={(e) => setRetiroEsmalte(e.target.innerText)}
              >
                {retiroEsmalte}
              </label>{" "}
            </td>
          </tr>
          <tr>
            <td>Cejas Perfilado</td>
            <td>
              ${" "}
              <label
                className="cejasperfil"
                contentEditable
                onBlur={(e) => setCejasPerfil(e.target.innerText)}
              >
                {cejasPerfil}
              </label>{" "}
            </td>
          </tr>
          <tr>
            <td>Depilación Definitiva Promo</td>
            <td>
              ${" "}
              <label
                className="definitivapromo"
                contentEditable
                onBlur={(e) => setDefinitivaPromo(e.target.innerText)}
              >
                {definitivaPromo}
              </label>{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <Button variant="success" onClick={handleActualizarPrecios}>
        Actualizar Precios
      </Button>
    </div>
  );
}

export default Precio_Serv;
