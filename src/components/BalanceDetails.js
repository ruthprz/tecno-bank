import React from 'react';

const BalanceDetails = ({ user }) => {
  
  
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
