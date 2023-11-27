import React, { useState, useEffect } from 'react';
import './HS.css';
import axios from 'axios';

function Cliente_horas() {
  const [horarios, setHorarios] = useState({
    Lunes: '',
    Martes: '',
    Miercoles: '',
    Jueves: '',
    Viernes: '',
  });

  useEffect(() => {
    // Realizar la solicitud GET al servidor
    axios.get('http://localhost:9000/api/hora')
      .then((response) => {
        if (response.data.length > 0) {
          const horas = response.data[0]; // Suponiendo que solo hay un conjunto de horas por ahora
          setHorarios({
            Lunes: horas.hora_Lunes || '',
            Martes: horas.hora_Martes || '',
            Miercoles: horas.hora_Miercoles || '',
            Jueves: horas.hora_Jueves || '',
            Viernes: horas.hora_Viernes || '',
          });
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor:', error);
      });
  }, []); // El [] asegura que se ejecute solo una vez al montar el componente

  return (
    <div className="horarios">
      <h1>Horarios de la Semana</h1>
      <table id="tablahoras">
        <thead>
          <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label className="lunes">{horarios.Lunes}</label>
            </td>
            <td>
              <label className="martes">{horarios.Martes}</label>
            </td>
            <td>
              <label className="miercoles">{horarios.Miercoles}</label>
            </td>
            <td>
              <label className="jueves">{horarios.Jueves}</label>
            </td>
            <td>
              <label className="viernes">{horarios.Viernes}</label>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default Cliente_horas;
