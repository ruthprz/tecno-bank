import React from 'react';

const StockDetails = ({ selectedStock }) => {
  
  return (
    <div className="stock-details">
      <h2>Detalles de la acción</h2>
      {selectedStock ? (
        <div>
          <p><strong>Símbolo:</strong> {selectedStock.symbol}</p>
          <p><strong>Nombre:</strong> {selectedStock.name}</p>
          <p><strong>Precio:</strong> ${selectedStock.price}</p>
          <p><strong>Cambio:</strong> {selectedStock.change}%</p>
          
        </div>
      ) : (
        <p>Selecciona una acción para ver los detalles</p>
      )}
    </div>
  );
};

export default StockDetails;
