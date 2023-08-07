import React from 'react';

const StockDetails = ({ selectedStock }) => {
  // Aquí puedes agregar la lógica para obtener más detalles de la acción seleccionada, como el gráfico de precios, etc.
  // Puedes utilizar bibliotecas como Chart.js para mostrar gráficos de precios.

  return (
    <div className="stock-details">
      <h2>Detalles de la acción</h2>
      {selectedStock ? (
        <div>
          <p><strong>Símbolo:</strong> {selectedStock.symbol}</p>
          <p><strong>Nombre:</strong> {selectedStock.name}</p>
          <p><strong>Precio:</strong> ${selectedStock.price}</p>
          <p><strong>Cambio:</strong> {selectedStock.change}%</p>
          {/* Agrega aquí el gráfico de precios */}
        </div>
      ) : (
        <p>Selecciona una acción para ver los detalles</p>
      )}
    </div>
  );
};

export default StockDetails;
