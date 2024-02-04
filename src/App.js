import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import Footer from './MyComponents/Footer.js';
import About from './MyComponents/About.js';
import Projects from './MyComponents/Projects.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = '/' element = {
            <>
                <Header title = "Ayush Kumar Baranwal" searchBar = {true} home = {true} projects = {false}/>
                <About/>
              </>
          }>
          </Route>
          <Route exact path = '/projects' element = {
            <>
              <Header title = "Ayush Kumar Baranwal" searchBar = {true} home = {false} projects = {true}/>
              <Projects/>
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
