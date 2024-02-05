import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Footer from './MyComponents/Footer.js';
import About from './MyComponents/About.js';
import Projects from './MyComponents/Projects.js';
import Social from './MyComponents/Social.js';
import $ from 'jquery';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const [darkMode, setMode] = useState(false);

  const toggleTheme = () => {
    if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setMode(false)
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setMode(true)
    }
    return;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header title="Ayush Kumar Baranwal" theme={true} home={true} projects={false} toggleTheme={toggleTheme} />
              <About />
              <Social darkMode = {darkMode}/>
            </>
          }>
          </Route>
          <Route exact path='/projects' element={
            <>
              <Header title="Ayush Kumar Baranwal" theme={true} home={false} projects={true} toggleTheme={toggleTheme} />
              <Projects />
              <Social darkMode = {darkMode}/>
            </>
          }>
          </Route>
          <Route exact path = '/terminal' element={
            <>
            <Header title="Ayush Kumar Baranwal" theme={true} home={false} projects={false} toggleTheme={toggleTheme} />
            </>
          }>
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
