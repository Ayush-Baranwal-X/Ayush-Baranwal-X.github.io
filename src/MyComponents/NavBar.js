import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function NavScrollExample(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', width: '100%', padding: '6px 300px', zIndex: '1' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {props.home === true ?
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                :
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {props.projects === true ?
                                <Link className="nav-link active" to="/projects">Projects</Link>
                                :
                                <Link className="nav-link" to="/projects">Projects</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://rail.pythonanywhere.com" target='blank'>Blog</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://dmail.pythonanywhere.com" target='blank'>Dmail</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://listxtodo.web.app" target='blank'>To Do</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/terminal" target='blank'>Terminal</Link>
                        </li>
                    </ul>
                    {props.theme === true ? <button className="btn" onClick={() => { props.toggleTheme() }}>
                        <i class="fa-solid fa-circle-half-stroke"></i>
                    </button> : ""}
                </div>
            </div>
        </nav>
    );
}

export default NavScrollExample;