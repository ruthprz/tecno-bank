// ChangePin.js
import React, { useState } from 'react';

const ChangePin = ({ currentPin, onChangePin }) => {
  const [newPin, setNewPin] = useState('');

  const handleChangePin = () => {
    // Aquí puedes implementar la lógica para validar y cambiar el PIN.
    // En este ejemplo, simplemente se actualiza el PIN con el nuevo valor ingresado.
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
