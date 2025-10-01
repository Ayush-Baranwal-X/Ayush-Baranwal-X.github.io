import React from 'react';
import { Link } from 'react-router-dom';

function NavScrollExample(props) {
  // Compute horizontal padding: 19.5% on desktop, 0 on mobile/tablet
  const paddingX = (props.mobile || props.tab) ? '0' : '13%';

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: 'fixed',
        width: '100%',
        paddingLeft: paddingX,
        paddingRight: paddingX,
        zIndex: 4,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // subtle separation from content
      }}
    >
      <div className="container-fluid" style={{ padding: 0 }}>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {props.home ? <b>Home</b> : 'Home'}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/experience">
                {props.experience ? <b>Experience</b> : 'Experience'}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                {props.projects ? <b>Projects</b> : 'Projects'}
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://bit.ly/akb-cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href="https://akbxterminal.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terminal
              </a>
            </li> */}
          </ul>

          <button className="btn" onClick={props.toggleTheme}>
            {props.darkMode ? (
              <i className="fa-solid fa-sun fa-1x"></i>
            ) : (
              <i className="fa-solid fa-moon fa-1x"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavScrollExample;
