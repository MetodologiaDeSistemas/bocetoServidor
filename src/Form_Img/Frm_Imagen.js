// FileUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SubirImg = () => {
  const [selectFile, setSelectFile] = useState(null);

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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default SubirImg;
