import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';


function App() {
  return (
    <Routes>
      <Route path="/:id" element={<Home />} />
      <Route path='*' element={<Navigate to="/all" replace />} />
    </Routes>
);
}

export default App;
