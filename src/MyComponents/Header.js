import React from 'react'
import Navbar from './NavBar.js';

const Header = (props) => {
  return (
    <>
      <Navbar title={props.title} home={props.home} projects={props.projects} toggleTheme={props.toggleTheme} darkMode={props.darkMode} mobile={props.mobile} tab={props.tab} />
      <div style={{ height: '60px' }}></div>
        <div style={{ position: 'fixed', top: '55px', left: '0', width: '100%', zIndex: '4' }}>
          <div className="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: props.progress === true ? '2px' : '0px'}}>
            {/* <div className="progress-bar progress-bar-animatedx"></div> */}
            <div className="progress-bar" id='progress-bar-scroller'></div>
          </div>
        </div>
    </>
  )
}

export default Header
