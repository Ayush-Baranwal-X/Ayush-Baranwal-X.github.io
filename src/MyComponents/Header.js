import React from 'react'
import Navbar from './NavBar.js';

const Header = (props) => {
  return (
    <>
        <Navbar title = {props.title} searchBar = {props.searchBar} home = {props.home} projects = {props.projects}/>
        <div style={{height:'60px'}}></div>
    </>
  )
}

export default Header
