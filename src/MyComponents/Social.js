import React from 'react'
import { Link } from 'react-router-dom'

const Social = (props) => {
    return (
        <div>
            <br></br>
            <br></br>
            <center>
                <div style={{ margin: '0px 310px' }}>
                    <Link to = 'mailto:ayushabhilasha@gmail.com'>
                    <i class="fa-solid fa-envelope fa-4x" style={{color:props.darkMode===true?'white':'black'}}></i>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://github.com/Ayush-Baranwal-X' target='blank'>
                    <i class="fa-brands fa-github fa-4x" style={{color:props.darkMode===true?'white':'black'}}></i>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to = 'https://www.linkedin.com/in/akbiitd/' target='blank'>
                    <i class="fa-brands fa-linkedin fa-4x" style={{color:props.darkMode===true?'white':'black'}}></i>
                    </Link>
                </div>
            </center>
        </div>
    )
}

export default Social
