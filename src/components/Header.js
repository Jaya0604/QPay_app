import React, { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header>
      <img src={require('../logo.jpg')} alt="logo" />
      <button onClick={handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
};

export default Header;
