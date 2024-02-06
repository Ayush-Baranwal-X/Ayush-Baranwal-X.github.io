import React from 'react'

const About = (props) => {
    return (
        <>
            {props.mobile === false ?
                <div style={{ margin: '0px 20%' }}>
                    <h1 className='glow-on-hover' style={{ margin: '0.5% 0px', width: '50%', textAlign: 'center' }}>Ayush Kumar Baranwal</h1>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <img src='Ayush.jpg' style={{ float: 'right', width: '44%', height: '44%', marginLeft: "15px" }}></img>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px' }}>
                        Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse internships has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com
                    </p>
                    <image ></image>
                </div>
                :
                <div style={{ margin: '0px 5%' }}>
                    <center>
                        <h1 className='glow-on-hover' style={{ marginTop: '0.5%', width: '90%', textAlign: 'center', paddingTop: '0.75%', marginBottom: '4%' }}>Ayush Kumar Baranwal</h1>
                    </center>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <img src='Ayush.jpg' style={{ float: 'right', width: '33%', height: '33%', marginLeft: "15px" }}></img>
                    <p style={{ textAlign: 'justify', marginBottom: '25px' }}>
                        Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse internships has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                        I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com
                    </p>
                    <image ></image>
                </div>
            }
        </>
    )
}

export default About
