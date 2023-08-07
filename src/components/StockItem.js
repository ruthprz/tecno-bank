import React from 'react';

const StockItem = ({ stock, onSelectStock }) => {
  return (
    <div className="stock-item" onClick={() => onSelectStock(stock)}>
      <h3>{stock.name}</h3>
    

    </div>
  );
};

export default StockItem;
//  <p><strong>Símbolo:</strong> {stock.symbol}</p>
//<p><strong>Precio:</strong> ${stock.price}</p>
//      <p><strong>Cambio:</strong> {stock.change}%</p>