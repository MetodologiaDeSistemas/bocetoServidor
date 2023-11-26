import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch('/api/Validacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await response.json();

      if (data.success) {
        window.alert('Inicio de sesión exitoso');
        navigate('/Depilacer')
      } else {
        window.alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      window.alert('Error al intentar iniciar sesión');
    }
  };
    // Maneja la redirección al hacer clic en "Cancelar"
    const handleCancelar = () => {
      // Redirige a la página principal
      navigate('/Imagen');
    };

  return (
    <div className="Contenedor">
      <form className="form_iniciar">
        <h1 className="titulo_1">Login</h1>
        <label>
          Usuario:
          <input
            className="input_style"
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            className="input_style"
            type="password"
            placeholder='Contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="btn_iniciar" type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button className='btn_iniciar' type="button" onClick={handleCancelar}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default Login;
