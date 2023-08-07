import React from 'react';

const BalanceDetails = ({ user }) => {
  // Aquí puedes agregar la lógica para obtener más detalles de la acción seleccionada, como el gráfico de precios, etc.
  // Puedes utilizar bibliotecas como Chart.js para mostrar gráficos de precios.

  return (
    <div className="">
      <h2>Acciones del usuario</h2>
      {user.balance ? (
        <div>
          <p>Balance Actual:{user.balance}</p>
        </div>
      ) : (
        <p>0</p>
      )}
      
      {user.stocks.map((item) => 
      <div>
        <p>Accion: {item.symbol}</p>
        <p>Cantidad: {item.quantity}</p>
      </div> 
     
      ) }
     
    </div>
  );
};

export default BalanceDetails;
