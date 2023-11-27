import './Galeria.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function Galeria() {
  const [selectFile, setSelectFile] = useState(null);
  const [imagenes, setImagenes] = useState([]);

  // Definir la función obtenerImagenes antes de usarla en useEffect
  const obtenerImagenes = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/upload');
      setImagenes(response.data);
      
    } catch (error) {
      console.error('Error al obtener las imágenes:', error);
    }
  };
  console.log({imagenes})
  useEffect(() => {
    // Hacer la solicitud al servidor para obtener la lista de imágenes
    obtenerImagenes();
  }, []); // El segundo argumento del useEffect es un array vacío para asegurarse de que se ejecute solo una vez al montar el componente

  const handleFileChange = (event) => {
    setSelectFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectFile);

      await axios.post('http://localhost:9000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Imagen enviada');

      // Después de subir la imagen, actualiza la lista de imágenes
      await obtenerImagenes();
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  };

  return (
<section class="layout">
  <div class="Titulo"><h1 className='h1-Titulo'>Galeria de Trabajos</h1></div>
  <div class="Subir">
    <input type="file" onChange={handleFileChange}/>
      <Button variant="primary" type="submit" onClick={handleUpload}>
        Subir Imagen
      </Button>
  </div>
  <div class="Manicura"><h1>Manicura</h1></div>
  <div class="Depilacion"><h1>Depilacion</h1></div>
  <div class="Masajes"><h1>Masajes</h1></div>
  <div class="Pedicura"><h1>Pedicura</h1></div>
  <div class="Retiro"><h1>Retiro</h1></div>
</section>
  );
}

export default Galeria;
