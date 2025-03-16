import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/HomeComponent.js'
import './Home.css'
import './custom.scss'
import AboutComponent from './components/AboutComponent.js'
import ContactComponent from './components/ContactComponent.js'
import GameComponent from './components/GameComponent.js';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<AboutComponent/>}/>
          <Route exact path="/Contact" element={<ContactComponent/>}/>
          <Route exact path="/GameComponent" element={<GameComponent/>}/>
        </Routes>
    </Router>
  );
}
export default App;
