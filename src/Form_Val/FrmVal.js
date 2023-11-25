import React, { useState } from 'react';

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

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
        setMensaje('Inicio de sesión exitoso');
      } else {
        setMensaje('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      setMensaje('Error al intentar iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Usuario:
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
};

export default LoginForm;
