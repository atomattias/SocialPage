import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Sigin';
import Profile from './components/Profile';
import Friends from './components/Friends';

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Signin />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Profile />}></Route>
          <Route path='/' element={<Friends />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;