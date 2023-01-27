import React from 'react';
import { Nav } from './features/navigation/Nav';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './features/Main';
import { GenArt } from './features/pages/GenArt';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Main/>} />
        <Route path="generateur-art-meteorologique" element={<GenArt/>} />
        
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
