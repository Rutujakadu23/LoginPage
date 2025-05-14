import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Dashboard from './components/Dashboard'; // Create this next

// Separate LoginPage component
function LoginPage() {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post('http://localhost:3000/auth/google/login', {
        token: credentialResponse.credential,
      });
      console.log('Backend response:', res.data);
      alert('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the Login Page</h2>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log('Google Login Failed')}
        />
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
