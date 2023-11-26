import "./Depila.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Depilacer() {
  const [elegDia, setElegDia] = useState("");
  const [elegMes, setElegMes] = useState("");
  const [respuesta, setRespuesta] = useState(null);

  const handleDia = (event) => {
    setElegDia(event.target.value);
  };

  const handleMes = (event) => {
    setElegMes(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const id = "6560b33bcf7502cb5935839e"; // Reemplaza con el ID real del elemento a actualizar
    const formData = {
      mes: elegMes,
      dia: elegDia,
    };

    try {
      const response = await fetch(`/api/fecha_dep/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setRespuesta(data);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <div>
      <div className="margendepi">
        <div className="DipiPispo">
          <div className="aviso">
            <h4>Próxima fecha disponible para la Depilación Definitiva</h4>
            <form onSubmit={handleFormSubmit}>
              <label>
                El Día:
                <input
                  type="number"
                  min="1"
                  max="31"
                  value={elegDia}
                  onChange={handleDia}
                />
              </label>
              <br />
              <br />
              <label>
                Del Mes:
                <select value={elegMes} onChange={handleMes}>
                    <option value="Enero">Enero</option>
                    <option value="Febrero">Febrero</option>
                    <option value="Marzo">Marzo</option>
                    <option value="Abril">Abril</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Junio">Junio</option>
                    <option value="Julio">Julio</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Septiembre">Septiembre</option>
                    <option value="Octubre">Octubre</option>
                    <option value="Noviembre">Noviembre</option>
                    <option value="Diciembre">Diciembre</option>
                </select>
              </label>
              <br />
              <br />
              <Button variant="success" type="submit">Actualizar Fecha</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Depilacer;
