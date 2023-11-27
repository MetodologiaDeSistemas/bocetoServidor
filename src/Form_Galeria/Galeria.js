import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='Contenedor'>
      <Carousel>
        {imagenes.map((imagen) => (
          <Carousel.Item key={imagen._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={imagen.filename} />
              <Card.Body>
                <Card.Title>Titulo del Card</Card.Title>
                <input type="file" onChange={handleFileChange} />
                <Button variant="primary" type="submit" onClick={handleUpload}>
                  Subir Imagen
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Galeria;
