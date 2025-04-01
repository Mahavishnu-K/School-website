import React from 'react';
import logo from './../../assets/s_logo.png';
import './LoadingPage.css';

const LoadingPage = ({ pageName }) => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img src={logo} alt="Jayam Vidyashram School Logo" className="loading-logo" />
        {pageName === 'Home' ? (
          <h2 className="loading-text">Welcome to <span>Jayam Vidyashram</span></h2>
        ) : (
          <h2 className="loading-text">{pageName}</h2>
        )}
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;