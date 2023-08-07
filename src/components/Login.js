
import React, { useState } from 'react';
import ChangePin from './ChangePin';


const Login = ({ userData,onLogin }) => {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [showChangePin, setShowChangePin] = useState(false);

  const handleLogin = () => {
    console.log(userData.user);
    
  
    if (username === userData.user && pin === userData.pin) {
      onLogin(username, pin);
    } else {
      alert('Credenciales inválidas. Inténtalo de nuevo.');
    }
  };

  const handleShowChangePin = () => {
    setShowChangePin(true);
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      {!showChangePin ? (
        <>
          <button onClick={handleLogin}>Iniciar sesión</button>
          <p>
            ¿Quieres cambiar tu PIN?
            <button onClick={handleShowChangePin}>Cambiar PIN</button>
          </p>
        </>
      ) : (
        <ChangePin currentPin={pin} onChangePin={setPin} />
      )}
    </div>
  );
};

export default Login;
