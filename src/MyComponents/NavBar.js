import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  // Function to close the navbar collapse on mobile
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar && navbar.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navbar, { toggle: true });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: "fixed",
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        zIndex: 4,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid" style={{ padding: 0 }}>
        {/* Brand (always left) */}
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          {props.title}
        </Link>

        {/* Right side on mobile (dark mode + hamburger) */}
        <div className="d-flex align-items-center ms-auto d-lg-none">
          {/* Dark mode button (mobile) */}
          <button
            className="btn me-2"
            onClick={props.toggleTheme}
            style={{ fontSize: "1.2rem" }}
          >
            {props.darkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          {/* Hamburger */}
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
        </div>

        {/* Collapsible Nav (desktop + mobile) */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Nav links (left on desktop) */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { name: "Home", path: "/", active: props.home },
              { name: "Experience", path: "/experience", active: props.experience },
              { name: "Projects", path: "/projects", active: props.projects },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link className="nav-link" to={item.path} onClick={closeNavbar}>
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
                onClick={closeNavbar}
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Dark mode button on far right (desktop only) */}
          <button
            className="btn d-none d-lg-inline ms-auto"
            onClick={props.toggleTheme}
            style={{ fontSize: "1.2rem" }}
          >
            {props.darkMode ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
