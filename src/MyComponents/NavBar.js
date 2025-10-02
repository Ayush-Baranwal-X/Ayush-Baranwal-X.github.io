import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const paddingX = '5%';
  const isMobile = window.innerWidth < 992; // bootstrap lg breakpoint

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: 'fixed',
        width: '100%',
        paddingLeft: paddingX,
        paddingRight: paddingX,
        zIndex: 4,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container-fluid" style={{ padding: 0, display: 'flex', alignItems: 'center', width: '100%' }}>
        {/* Brand on the left */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        {/* Dark mode button always visible on right (mobile + desktop) */}
        <button
          className="btn ms-auto me-2 d-lg-none" // only visible on mobile
          onClick={props.toggleTheme}
          style={{ fontSize: '1.2rem' }}
        >
          {props.darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
        </button>

        {/* Hamburger button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {[
              { name: 'Home', path: '/', active: props.home },
              { name: 'Experience', path: '/experience', active: props.experience },
              { name: 'Projects', path: '/projects', active: props.projects },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={item.path}>
                  {item.active ? <b>{item.name}</b> : item.name}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1-sAGlmIU3wIfno0rWl-D72ihq_XlqTG3/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            {/* Dark mode button on desktop */}
            <li className="nav-item d-none d-lg-block ms-3">
              <button
                className="btn"
                onClick={props.toggleTheme}
                style={{ fontSize: '1.2rem' }}
              >
                {props.darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
