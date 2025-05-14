import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">₿ DeBT</div>
        <button className="wallet-button">Connect Wallet</button>
      </nav>

      <div className="content">
        <h1>Decentralized Bitcoin Trust (DeBT)</h1>
        <p className="subtitle">A decentralized platform for creating and managing Bitcoin trusts</p>

        <div className="cards">
          <div className="card">Create New Trust</div>
          <div className="card">My Trusts</div>
          <div className="card">Explore Demo</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

