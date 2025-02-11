import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
