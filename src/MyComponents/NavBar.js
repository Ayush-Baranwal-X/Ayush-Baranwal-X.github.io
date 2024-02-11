import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function NavScrollExample(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', width: '100%', paddingLeft: (props.mobile || props.tab) === true ? '':'19.5%', paddingRight: (props.mobile || props.tab) === true ? '':'19.5%', zIndex: '4' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {props.home === true ?
                                <Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link>
                                :
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {props.projects === true ?
                                <Link className="nav-link" to="/projects"><b>Projects</b></Link>
                                :
                                <Link className="nav-link" to="/projects">Projects</Link>
                            }
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://bit.ly/akbiitd-cv" target='_blank'>Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://dmail.pythonanywhere.com" target='_blank'>Dmail</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://listxtodo.web.app" target='_blank'>To-Do</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://ayushbaranwal.itch.io/" target='_blank'>Itch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://rail.pythonanywhere.com" target='_blank'>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="https://akbxterminal.web.app" target='_blank'>Terminal</Link>
                        </li>
                    </ul>
                    <button className="btn" onClick={() => { props.toggleTheme() }}>
                        {props.darkMode === true ?
                        <i class="fa-solid fa-sun fa-1x"></i>
                        :
                        <i class="fa-solid fa-moon fa-1x"></i>
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavScrollExample;