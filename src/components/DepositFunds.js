// DepositFunds.js
import React, { useState } from 'react';

const DepositFunds = ({ user, onDepositFunds }) => {
  const [amount, setAmount] = useState('');

  const handleDepositFunds = () => {

    console.log("el user que lega",user);
    console.log("ondeposit",onDepositFunds);
 
    // Aquí puedes implementar la lógica para depositar fondos.
    // En este ejemplo, simplemente verificamos que la cantidad sea un número positivo.
    const depositAmount = parseFloat(amount);

    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('La cantidad debe ser un número positivo.');
    } else {
      // Aquí, deberías realizar la lógica para actualizar los fondos del usuario.
      alert('Fondos depositados exitosamente.');
      onDepositFunds(depositAmount);
      setAmount('');
    }
  };

  return (
    <div className="deposit-funds">
      <h2>Depositar fondos</h2>
      <input
        type="number"
        step="0.01"
        placeholder="Cantidad"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDepositFunds}>Depositar</button>
    </div>
  );
};

export default DepositFunds;
