import React from 'react'
import Navbar from './NavBar.js';

const Header = (props) => {
  return (
    <>
        <Navbar title = {props.title} home = {props.home} projects = {props.projects} toggleTheme = {props.toggleTheme} darkMode = {props.darkMode} mobile = {props.mobile} tab = {props.tab}/>
        <div style={{height:'60px'}}></div>
    </>
  )
}

export default Header
