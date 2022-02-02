import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Navbar from './pages/navbar';
import HeroSection from './pages/heroSection';
import Footer from './pages/Footer';
import StatsPage from './pages/stats';
import FeaturesPage from './pages/features';
import GamesPage from './pages/games';

import ErrorCodes from './pages/error-code';

import { Router, Route } from 'react-router-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import HashRouter from 'react-router-dom/HashRouter'

ReactDOM.render(
  <HashRouter>
   <App />
  </HashRouter>,
  //<BrowserRouter basename={process.env.PUBLIC_URL}>
  //  <App />
  //</BrowserRouter>,
  document.getElementById("root")
);


//ReactDOM.render((
//  <Router>
//    <Route path = "/" component = {Navbar, HeroSection, StatsPage, FeaturesPage, GamesPage, Footer}>
//        <Route path = "error-code" component = {ErrorCodes} />
//    </Route>
//  </Router>
//  document.getElementById('app'))
//);
