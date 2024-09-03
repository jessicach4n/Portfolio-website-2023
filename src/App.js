import React, { Component } from 'react';
import { Nav } from './features/navigation/Nav';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './features/Main';
import { GameforSeniors } from './features/pages/GameforSeniors';
import { GenArt } from './features/pages/GenArt';
import { RadishParty } from './features/pages/RadishParty';
import { GoApp } from './features/pages/GoApp';
import { ScreenPrinting } from './features/pages/ScreenPrinting';
import { RadishPartyPlay } from './features/pages/RadishPartyPlay';
import { WordAlgo } from './features/pages/WordAlgo';
import { Typomanie } from './features/pages/Typomanie';
import { RIDM } from './features/pages/RIDM';
import { MotionDesign } from './features/pages/MotionDesign';
import { MediaSolutions } from './features/pages/MediaSolutions';
import { Newcastle } from './features/pages/Newcastle';
import { NotFound } from './features/pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);

    this.date = new Date().getFullYear();
}

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Main />} />
            <Route path="game-for-seniors" element={<GameforSeniors />} />
            <Route path="weather-art-generator" element={<GenArt />} />
            <Route path="radish-party" element={<RadishParty />} />
            <Route path="play-radish-party" element={<RadishPartyPlay />} />
            <Route path="123go" element={<GoApp />} />
            <Route path="word-co-occurrence-algorithm" element={<WordAlgo />} />
            <Route path="screen-printing" element={<ScreenPrinting />} />
            <Route path="typomania" element={<Typomanie />} />
            <Route path="ridm" element={<RIDM />} />
            <Route path="motion-design" element={<MotionDesign />} />
            <Route path="media-solutions" element={<MediaSolutions />} />
            <Route path="new-castle" element={<Newcastle />} />
            <Route path="*" element={<NotFound />} />

          </Route>
        </Routes>
        <footer>
          <p>All rights reserved © Jessica Chan | {this.date}</p>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
