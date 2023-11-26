import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './Form_horas.css';

function Form_horas() {
  const daysOfWeek = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  const timeSlots = ['Hora'];

  const [selectedValues, setSelectedValues] = useState({});
  const [id, setId] = useState("");  // Nuevo estado para almacenar el ID de la entrada en la base de datos

  // Obtener datos del servidor al cargar el componente
  useEffect(() => {
    fetch('http://localhost:9000/api/hora')
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const horas = data[0]; // Suponiendo que solo hay un conjunto de horas por ahora
          const initialSelectedValues = {};

          daysOfWeek.forEach((day) => {
            timeSlots.forEach((time) => {
              const key = `${time}-${day}`;
              initialSelectedValues[key] = horas[`hora_${day}`] || ''; // Usar el valor almacenado en la base de datos
            });
          });

          setSelectedValues(initialSelectedValues);
          setId(horas._id);  // Almacenar el ID
        }
      })
      .catch((error) => {
        console.error('Error al obtener datos del servidor:', error);
      });
  }, []); // El [] asegura que se ejecute solo una vez al montar el componente

  const handleDropdownChange = (time, day, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [`${time}-${day}`]: value,
    }));
  };

  const handleActualizarHorarios = () => {
    // Crear el objeto con las horas actualizadas
    const horasActualizadas = {};
    daysOfWeek.forEach((day) => {
      timeSlots.forEach((time) => {
        const key = `${time}-${day}`;
        horasActualizadas[`hora_${day}`] = selectedValues[key];
      });
    });

    // Realizar la solicitud PUT para actualizar en el servidor
    fetch(`http://localhost:9000/api/hora/${"6560aa6956c0ab43c0a57305"}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(horasActualizadas),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Horarios actualizados:', data);
      })
      .catch((error) => {
        console.error('Error al actualizar horarios:', error);
      });
  };

  return (
    <div className="contenpag">
      <div className="horarios">
        <table>
          <thead>
            <tr>
              <th></th>
              {daysOfWeek.map((day, index) => (
                <th key={index}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, timeIndex) => (
              <tr key={timeIndex}>
                <td>{time}</td>
                {daysOfWeek.map((day, dayIndex) => (
                  <td key={dayIndex}>
                    <select
                      value={selectedValues[`${time}-${day}`] || ''}
                      onChange={(e) =>
                        handleDropdownChange(time, day, e.target.value)
                      }
                    >
                      <option value="14:00 - 20:00">14:00 - 20:00</option>
                      <option value="15:00 - 20:00">15:00 - 20:00</option>
                      <option value="16:00 - 21:00">16:00 - 21:00</option>
                      <option value="Cerrado">Cerrado</option>
                    </select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <Button variant="success" onClick={handleActualizarHorarios}>
          Actualizar Horarios
        </Button>
      </div>
    </div>
  );
}

export default Form_horas;
