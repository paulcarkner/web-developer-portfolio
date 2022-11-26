import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {App as PortfolioPage} from './sub_modules/portfolio/App.js';
import {App as WordleSolverPage} from './sub_modules/wordle-solver/src/App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route exact path="/" element={<PortfolioPage />} />
        <Route path="/wordle-solver" element={<WordleSolverPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

