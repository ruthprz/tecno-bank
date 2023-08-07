import React from 'react';
import StockItem from './StockItem';

const StockList = ({ stocks, onSelectStock }) => {
  return (
    <div className="stock-list">
      <h2>Lista de acciones</h2>
      {stocks.map((stock) => (
        <StockItem key={stock.id} stock={stock} onSelectStock={onSelectStock} />
      ))}
    </div>
  );
};

export default StockList;
