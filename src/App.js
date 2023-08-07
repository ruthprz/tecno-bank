import React, { useState } from 'react';
import StockList from './components/StockList';
import StockDetails from './components/StockDetails';
import BalanceDetails from './components/BalanceDetails';
import Login from './components/Login';
import stocksData from './data/stocksData';
import {userData } from './data/userData';
import ChangePin from './components/ChangePin';
import DepositFunds from './components/DepositFunds';
import SellStock from './components/SellStock';
import BuyStock from './components/BuyStock';
import JsPDF from 'jspdf';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [pin, setPin] = useState('');

  const [user, setUser] = useState(null);
  const handleLogin = (username) => {

    setUser(userData);
    setLoggedIn(true);
    setPin(pin);
  };
  const handleChangePin = (newPin) => {
    setPin(newPin);
  };

  const handleDepositFunds = (amount) => {
    setUser(userData);
    console.log("balance actual",user.balance)
    const updatedUser = { ...user, balance: user.balance + amount };
    setUser(updatedUser);
  };
  const handleLogout = () => {
    // Restablecer el estado cuando el usuario cierra sesión.
    setLoggedIn(false);
    setPin('');
    setSelectedStock(null);
  };

  const handleSelectStock = (stock) => {
    setSelectedStock(stock);
  };

  const handleBuyStock = (stock, quantity) => {

    const stockId = stock.id;
    const updatedStocks = user.stocks.map((item) =>
      item.stockId === stockId ? { ...item, quantity: item.quantity + quantity } : item
    );
    const updatedUser = { ...user, stocks: updatedStocks, balance: user.balance - stock.price * quantity };
    setUser(updatedUser);
  };

  const generatePDF = () => {
    var date = { currentTime: new Date().toLocaleString() };
    let num = 180; 
    const report = new JsPDF('portrait','pt','a4');
    report.text(200,60, `ESTADO DE CUENTA`);
    report.text(100,100, `Reporte Final de las transacciones realizadas`);
    report.text(100,120, `Usuario: ${user.user}`);
    report.text(100,140, `balance: ${user.balance}`);
    console.log("date",date);
    report.text(100,80, `Hora de Reporte: ${date.currentTime}`);
    report.text(100,160, `Total de Acciones:`);
    
    for(var i=1; i < user.stocks.length;i++){

      report.text(100,num, `accion: ${user.stocks[i].symbol} : ${user.stocks[i].quantity}`);
      num = num +20;
    }

    report.text(100,140, `balance: ${user.balance}`);
    report.save('report.pdf');

  };

  const handleSellStock = (stock, quantity) => {
    // Aquí, deberías realizar la lógica para actualizar los datos del usuario
    // y registrar la venta de acciones.
    const stockId = stock.id;
    const updatedStocks = user.stocks.map((item) =>
      item.stockId === stockId ? { ...item, quantity: item.quantity - quantity } : item
    );
    const updatedUser = { ...user, stocks: updatedStocks, balance: user.balance + stock.price * quantity };
    setUser(updatedUser);
  };

  return (
    <div className="app">
      <h1>Stock Bank App</h1>
      {loggedIn ? (
        <div className="container">
           
          <StockList stocks={stocksData} onSelectStock={handleSelectStock} />
          <StockDetails selectedStock={selectedStock} />
          <BalanceDetails user={user}></BalanceDetails>
          
          <ChangePin currentPin={pin} onChangePin={handleChangePin} />
          <BuyStock stocks={stocksData} user={user} onBuyStock={handleBuyStock} />
          <DepositFunds user={user} onDepositFunds={handleDepositFunds} />
          <SellStock stocks={stocksData} user={user} onSellStock={handleSellStock} />
          <button onClick={generatePDF} type="button">Exportar PDF</button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <Login userData={userData} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
