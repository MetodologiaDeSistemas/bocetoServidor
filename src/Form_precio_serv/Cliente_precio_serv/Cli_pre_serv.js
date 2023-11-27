import React, { useEffect, useState } from 'react';
import './Cli_pre_serv.css';
import axios from 'axios';

function Cli_pre_serv () {
  const [precios, setPrecios] = useState({
    Manicura_trad: 0,
    Esmaltado_sem_per: 0,
    Retiro_esmalte: 0,
    Cejas: 0,
    Depilacion_def: 0,
  });

  useEffect(() => {
    // Realiza la petición GET al servidor para obtener los precios
    axios.get('http://localhost:9000/api/precio')
      .then(response => {
        const data = response.data[0]; // Supongamos que la respuesta es un array con un solo objeto
        setPrecios(data);
      })
      .catch(error => {
        console.error('Error al obtener los precios:', error);
      });
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecutará una vez, equivalente a componentDidMount

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
              $ <label className="manicuratrad">{precios.Manicura_trad}</label>
            </td>
          </tr>
          <tr>
            <td>Esmaltado Semi Permanente</td>
            <td>
              $ <label className="esmaltadosemi">{precios.Esmaltado_sem_per}</label>{" "}
            </td>
          </tr>
          <tr>
            <td>Retiro de Esmalte</td>
            <td>
              $ <label className="retiroesmalte">{precios.Retiro_esmalte}</label>{" "}
            </td>
          </tr>
          <tr>
            <td>Cejas Perfilado</td>
            <td>
              $ <label className="cejasperfil">{precios.Cejas}</label>{" "}
            </td>
          </tr>
          <tr>
            <td>Depilación Definitiva Promo</td>
            <td>
              $ <label className="definitivapromo">{precios.Depilacion_def}</label>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cli_pre_serv;
