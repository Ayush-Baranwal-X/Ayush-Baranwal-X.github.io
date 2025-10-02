import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './MyComponents/Header.js';
import Footer from './MyComponents/Footer.js';
import About from './MyComponents/About.js';
import Projects from './MyComponents/Projects.js';
import Social from './MyComponents/Social.js';
import Experience from './MyComponents/Experience.js';
import PageNotFound from './MyComponents/PageNotFound.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

function App() {
  // Device type detection
  const screenWidth = window.screen.width;
  const mobile = screenWidth < 768;
  const tab = screenWidth >= 768 && screenWidth <= 1024;

  // Dark mode state
  const initTheme = JSON.parse(localStorage.getItem('darkMode'));
  const [darkMode, setDarkMode] = useState(initTheme);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute('data-bs-theme', newMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    if (initTheme != null) {
      document.documentElement.setAttribute('data-bs-theme', initTheme ? 'dark' : 'light');
    }
  }, [initTheme]);

  // Scroll progress bar
  const fillScrollLine = () => {
    const scrollline = document.getElementById('progress-bar-scroller');
    if (!scrollline) return;

    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = Math.min((scrolled / (fullHeight - windowHeight)) * 100, 100);
    scrollline.style.width = percentScrolled + '%';
  };

  useEffect(() => {
    window.addEventListener('scroll', fillScrollLine);
    return () => window.removeEventListener('scroll', fillScrollLine);
  }, []);

  // Scroll to top on route change
  function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      fillScrollLine();
    }, [location]);
    return null;
  }

  // Observe dynamic page height changes
  function ModifyHeightProgressBar() {
    const [pageHeight, setPageHeight] = useState(document.body.clientHeight);

    useEffect(() => {
      const observer = new MutationObserver(() => {
        const newHeight = document.body.clientHeight;
        if (newHeight !== pageHeight) setPageHeight(newHeight);
      });
      observer.observe(document.body, { attributes: true, childList: true, subtree: true });
      return () => observer.disconnect();
    }, [pageHeight]);

    useEffect(() => fillScrollLine(), [pageHeight]);

    return null;
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header
                title="Ayush Kumar Baranwal"
                home
                toggleTheme={toggleTheme}
                progress
                darkMode={darkMode}
                mobile={mobile}
                tab={tab}
              />
              <About mobile={mobile} tab={tab} />
              <ScrollToTop />
            </>
          }
        />
        <Route
          exact
          path="/projects"
          element={
            <>
              <Header
                title="Ayush Kumar Baranwal"
                projects
                toggleTheme={toggleTheme}
                progress
                darkMode={darkMode}
                mobile={mobile}
                tab={tab}
              />
              <Projects mobile={mobile} darkMode={darkMode} />
              <ScrollToTop />
              <ModifyHeightProgressBar />
            </>
          }
        />
        <Route
          exact
          path="/experience"
          element={
            <>
              <Header
                title="Ayush Kumar Baranwal"
                experience
                toggleTheme={toggleTheme}
                progress
                darkMode={darkMode}
                mobile={mobile}
                tab={tab}
              />
              <Experience mobile={mobile} darkMode={darkMode} />
              <ScrollToTop />
              <ModifyHeightProgressBar />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header
                title="Ayush Kumar Baranwal"
                experience
                toggleTheme={toggleTheme}
                progress
                darkMode={darkMode}
                mobile={mobile}
                tab={tab}
              />
              <PageNotFound />
              <ScrollToTop />
              <ModifyHeightProgressBar />
            </>
          }
        />
      </Routes>
      <Social darkMode={darkMode} mobile={mobile} />
      <Footer mobile={mobile} />
    </Router>
  );
}

export default App;
