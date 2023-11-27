// FileUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SubirImg = () => {
  const [selectFile, setSelectFile] = useState(null);
  const [elegirCarp, setElegirCarp] = useState("1");


  const handleCarp = (event) => {
    setElegirCarp(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectFile(event.target.files[0]);
  };

  const handleUpload = async (seleccionado) => {
    try {
      const formData = new FormData();
      formData.append('image', selectFile);

      await axios.post(`http://localhost:9000/api/upload/${seleccionado}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Imagen enviada');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <select value={elegirCarp} onChange={handleCarp}>
                    <option value="1">Manicura</option>
                    <option value="2">Depilacion</option>
                    <option value="3">Masajes</option>
                    <option value="4">Pericura</option>
                </select>
      <input type="file" onChange={handleFileChange} />
      <button onClick={() => handleUpload(elegirCarp)}>Upload</button>
    </div>
  );
};

export default SubirImg;
