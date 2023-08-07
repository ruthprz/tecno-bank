// SellStock.js
import React, { useState } from 'react';

const SellStock = ({ stocks, user, onSellStock }) => {
  const [selectedStock, setSelectedStock] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSellStock = () => {
    // Aquí puedes implementar la lógica para vender acciones.
    // En este ejemplo, simplemente verificamos que los campos no estén vacíos
    // y que la cantidad sea un número positivo.
    if (selectedStock.trim() === '' || quantity.trim() === '') {
      alert('Por favor, selecciona una acción y escribe la cantidad.');
    } else {
      const stock = stocks.find((item) => item.symbol === selectedStock);
      const totalCost = stock.price * parseInt(quantity);

      if (isNaN(totalCost) || totalCost <= 0) {
        alert('La cantidad debe ser un número positivo.');
      } else {
        const userStock = user.stocks.find((item) => item.stockId === stock.id);

        if (!userStock || userStock.quantity < parseInt(quantity)) {
          alert('No tienes suficientes acciones para vender.');
        } else {
          // Aquí, deberías realizar la lógica para actualizar los datos del usuario
          // y registrar la venta de acciones.
          alert('Acciones vendidas exitosamente.');
          onSellStock(stock, parseInt(quantity));
          setSelectedStock('');
          setQuantity('');
        }
      }
    }
  };

  return (
    <div className="sell-stock">
      <h2>Vender acciones</h2>
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
      <button onClick={handleSellStock}>Vender</button>
    </div>
  );
};

export default SellStock;
