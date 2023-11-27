import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import './FechaDep.css'; // Asegúrate de importar el archivo CSS correctamente

function FechaDep() {

  const [fechaData, setFecha] = useState({
    Mes: '',
    Dia: 0,
    
  });

  useEffect(() => {
    // Realizar la solicitud GET al servidor
    axios.get('http://localhost:9000/api/fecha_dep')
      .then((response) => {
        if (response.data.length > 0) {
          const fecha = response.data[0]; // Suponiendo que solo hay un conjunto de horas por ahora
          setFecha({
            Mes: fecha.mes || '',
            Dia: fecha.dia || 0,
          });
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor:', error);
      });
  }, []); // El [] asegura que se ejecute solo una vez al montar el componente

  console.log({fechaData})

  return (
    <div>
      <div className="margendepi">
        <div className="DipiPispo">
          <div className="aviso">
            <div className="cajimdepi">
              <Card.Img id="img" variant="top" src="" />
            </div>
            <br />
            <br />
            <h4>Próxima fecha disponible para Depilacion Definitiva</h4>
            <br />
            <br />
            <form>
              <h5>
                EL Día: <label className="Día-Depi">{fechaData.Dia}</label>
              </h5>
              <br />
              <br />
              <h5>
                Del Mes: <label className="Mes-Depi">{fechaData.Mes}</label>
              </h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FechaDep;
