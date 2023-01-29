import React, { Component } from 'react';
import { Nav } from './features/navigation/Nav';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './features/Main';
import { GenArt } from './features/pages/GenArt';
import { RadishParty } from './features/pages/RadishParty';
import { ScreenPrinting } from './features/pages/ScreenPrinting';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Main/>} />
          <Route path="weather-art-generator" element={<GenArt/>} />
          <Route path="radish-party" element={<RadishParty/>} />
          <Route path="screen-printing" element={<ScreenPrinting/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
