import React from 'react';
import { Home } from './features/home/Home';
import { Header } from './features/navigation/Header';

import './App.css';
import { Projects } from './features/projects/Projects';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
