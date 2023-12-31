
import React, { useState } from 'react';

const BuyStock = ({ stocks, user, onBuyStock }) => {
  const [selectedStock, setSelectedStock] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleBuyStock = () => {
    
    if (selectedStock.trim() === '' || quantity.trim() === '') {
      alert('Por favor, selecciona una acción y escribe la cantidad.');
    } else {
      const stock = stocks.find((item) => item.symbol === selectedStock);
      const totalCost = stock.price * parseInt(quantity);

      if (isNaN(totalCost) || totalCost <= 0) {
        alert('La cantidad debe ser un número positivo.');
      } else if (user.balance < totalCost) {
        alert('Fondos insuficientes para comprar acciones.');
      } else {
       
        alert('Acciones compradas exitosamente.');
        onBuyStock(stock, parseInt(quantity));
        setSelectedStock('');
        setQuantity('');
      }
    }
  };

  return (
    <div className="buy-stock">
      <h2>Comprar acciones</h2>
      <select value={selectedStock} onChange={(e) => setSelectedStock(e.target.value)}>
        <option value="">Selecciona una acción</option>
        {stocks.map((stock) => (
          <option key={stock.id} value={stock.symbol}>
            {stock.name} ({stock.symbol})
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleBuyStock}>Comprar</button>
    </div>
  );
};

export default BuyStock;
