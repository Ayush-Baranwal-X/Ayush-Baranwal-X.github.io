import React from 'react'
import { Link } from 'react-router-dom'

const Social = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <center>
                <div style={{ margin: '0px 19.5%' }}>
                    <Link to = 'mailto:ayushabhilasha@gmail.com' style={{color:props.darkMode===true?'white':'black'}}>
                    <i class="fa-solid fa-envelope fa-4x" id={props.darkMode===true?'hover_black':'hover_white'}></i>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://github.com/Ayush-Baranwal-X' target='blank' style={{color:props.darkMode===true?'white':'black'}}>
                    <i class="fa-brands fa-github fa-4x" id={props.darkMode===true?'hover_black':'hover_white'}></i>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://www.linkedin.com/in/akbiitd/' target='blank' style={{color:props.darkMode===true?'white':'black'}}>
                    <i class="fa-brands fa-linkedin fa-4x" id={props.darkMode===true?'hover_black':'hover_white'}></i>
                    </Link>
                    {props.mobile === true?<><br></br><br></br></>:''}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://www.instagram.com/cybershot_x/' target='blank' style={{color:props.darkMode===true?'white':'black'}}>
                    <i class="fa-brands fa-instagram fa-4x" id={props.darkMode===true?'hover_black':'hover_white'}></i>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://calendly.com/akbiitd/' target='blank' style={{color:props.darkMode===true?'white':'black'}}>
                    <i class="fa-solid fa-calendar fa-4x" id={props.darkMode===true?'hover_black':'hover_white'}></i>
                    </Link>
                </div>
            </center>
        </div>
    )
}

export default Social
