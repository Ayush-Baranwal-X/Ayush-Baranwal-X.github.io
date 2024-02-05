import React from 'react'
import Navbar from './NavBar.js';

const Header = (props) => {
  return (
    <>
        <Navbar title = {props.title} theme = {props.theme} home = {props.home} projects = {props.projects} toggleTheme = {props.toggleTheme}/>
        <div style={{height:'60px'}}></div>
    </>
  )
}

export default Header
