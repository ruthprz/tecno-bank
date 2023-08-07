
import React, { useState } from 'react';

const ChangePin = ({ currentPin, onChangePin }) => {
  const [newPin, setNewPin] = useState('');

  const handleChangePin = () => {
    
    if (newPin.trim() === '') {
      alert('El nuevo PIN no puede estar en blanco.');
    } else {
      onChangePin(newPin);
      alert('El PIN se ha cambiado exitosamente.');
    }
  };

  return (
    <div className="change-pin">
      <h2>Cambiar PIN</h2>
      <input
        type="password"
        placeholder="Nuevo PIN"
        value={newPin}
        onChange={(e) => setNewPin(e.target.value)}
      />
      <button onClick={handleChangePin}>Cambiar PIN</button>
    </div>
  );
};

export default ChangePin;
