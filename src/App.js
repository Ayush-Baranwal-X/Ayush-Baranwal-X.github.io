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
  // let mobile = false;
  // function isMobile() {
  //   const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  //   return regex.test(navigator.userAgent);
  // }
  
  let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;
  let mobile = false;
  let tab = false;
  if(screenWidth < 768){
    mobile = true;
  }
  if(((screenWidth <= 1024 && screenWidth >= 768))){
    tab = true;
  }

  let initTheme = JSON.parse(localStorage.getItem('darkMode'));
  
  const [darkMode, setMode] = useState(initTheme);
  
  const toggleTheme = () => {
    if (darkMode === true) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      setMode(false)
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      setMode(true)
    }
    // We are passing !darkMode here as the darkMode variable is not updated yet irrespective of the code just above
    localStorage.setItem('darkMode',JSON.stringify(!darkMode));
    return;
  }
  
  useEffect (()=>{
    if(initTheme != null)
    {
      document.documentElement.setAttribute('data-bs-theme', initTheme ? 'dark':'white');
    }
    // Clean up function (optional but good practise)
    return () =>
    {

    };
  },[initTheme]);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={
            <>
              <Header title="Ayush Kumar Baranwal" home={true} projects={false} toggleTheme={toggleTheme} darkMode = {darkMode} mobile = {mobile} tab = {tab} />
              <About mobile = {mobile} tab = {tab}/>
            </>
          }>
          </Route>
          <Route exact path='/projects' element={
            <>
              <Header title="Ayush Kumar Baranwal" home={false} projects={true} toggleTheme={toggleTheme} darkMode = {darkMode} mobile = {mobile} tab = {tab} />
              <Projects mobile = {mobile}/>
            </>
          }>
          </Route>
          <Route exact path = '/terminal' element={
            <>
            <Header title="Ayush Kumar Baranwal" home={false} projects={true} toggleTheme={toggleTheme} darkMode = {darkMode} mobile = {mobile} tab = {tab} />
            </>
          }>
          </Route>
        </Routes>
        <Social darkMode = {darkMode} mobile = {mobile}/>
        <Footer mobile = {mobile}/>
      </Router>
    </>
  );
}

export default App;
