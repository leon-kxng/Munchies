import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Login from './Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserEmail('');
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome, {userEmail}!</h1>
          <button onClick={handleLogout}>Logout</button>
          {/* Other components or content for logged-in users */}
        </div>
      )}
    </div>
  );
};

export default App;
