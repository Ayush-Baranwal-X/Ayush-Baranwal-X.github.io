import React from 'react'

const About = (props) => {
    return (
        <>
            {(props.mobile || props.tab) === false ?
                <div style={{ margin: '0px 20%' }}>
                    <h1 className='glow-on-hover' style={{ margin: '0.5% 0px', width: '50%', textAlign: 'center' }}>Ayush Kumar Baranwal</h1>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <img src='Ayush.jpg' style={{ float: 'right', width: '44%', height: '44%', marginLeft: "15px" }}></img>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px', fontSize: '16.5px' }}>
                        Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse internships has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: '16.5px' }}>
                        I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '100%', fontSize: '26px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom:'0.2%' }}>I'm interested in...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <table>
                            <tr style={{verticalAlign:'top'}}>
                                <td><b>Web Development</b></td>
                                <td>React, Django, Node.js, Express, HTML, CSS, JavaScript, Firebase, Pythonanywhere</td>
                            </tr>
                            <tr style={{verticalAlign:'top'}}>
                                <td><b>Game Development</b></td>
                                <td>Unity Game Engine, C#, Godot Game Engine, GDScript</td>
                            </tr>
                            <tr style={{verticalAlign:'top'}}>
                                <td><b>Machine Learning</b></td>
                                <td>PyTorch, NumPy, Pandas, Matplotlib, Scikit-learn</td>
                            </tr>
                            <tr style={{verticalAlign:'top'}}>
                                <td style={{ paddingRight: '15px' }}><b>Algorithmic Problem-Solving</b></td>
                                <td>C, C++, Java, Python</td>
                            </tr>
                        </table>
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '100%', fontSize: '26px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom:'0.2%' }}>My Hobbies are...</h1>
                    <p style={{ textAlign: 'left', fontSize: '17px' }}>
                        <table>
                            <tr>
                                <td><b>Reading</b></td>
                                <td>I love to read novels and articles on random topics</td>
                            </tr>
                            <tr>
                                <td><b>Blogging</b></td>
                                <td>I love to write blogs for my own blog website</td>
                            </tr>
                            <tr>
                                <td style={{ paddingRight: '15px' }}><b>Playing Guitar</b></td>
                                <td>Although a beginner, I love playing guitar</td>
                            </tr>
                            <tr>
                                <td><b>BasketBall</b></td>
                                <td>I love playing basketBall</td>
                            </tr>
                            <tr>
                                <td><b>Music</b></td>
                                <td>I love listening to music</td>
                            </tr>
                        </table>
                    </p>
                </div>
                :
                <></>
            }
            {props.tab === true ?
                <div style={{ margin: '0px 5%' }}>
                    <center>
                        <h1 className='glow-on-hover' style={{ marginTop: '0.5%', width: '60%', textAlign: 'center', paddingTop: '0.25%', marginBottom: '4%' }}>Ayush Kumar Baranwal</h1>
                    </center>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <center>
                        <img src='Ayush.jpg' style={{ width: '44%', height: '44%', marginLeft: "15px" }}></img>
                    </center>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px', fontSize: '16px' }}>
                        Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse internships has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: '16px' }}>
                        I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom:'0.2%' }}>I'm interested in...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <b>Web Development</b>: React, Django, Node.js, Express, HTML, CSS, JavaScript, Bootstrap
                        <br></br>
                        <b>Game Development</b>: Unity Game Engine, C#, Godot Game Engine, GDScript
                        <br></br>
                        <b>Machine Learning</b>: PyTorch, NumPy, Pandas, Matplotlib, Scikit-learn
                        <br></br>
                        <b>Algorithmic Problem-Solving</b>: C, C++, Java, Python
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom:'0.2%' }}>My Hobbies are...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <b>Reading</b>: I love to read novels and articles on random topics
                        <br></br>
                        <b>Blogging</b>: I love to write blogs for my own blog website
                        <br></br>
                        <b>Playing Guitar</b>: Although a beginner, I love playing guitar
                        <br></br>
                        <b>BasketBall</b>: I love playing basketBall
                        <br></br>
                        <b>Music</b>: I love listening to music
                    </p>
                </div>
                :
                <></>
            }
            {props.mobile === true ?
                <div style={{ margin: '0px 5%' }}>
                    <center>
                        <h1 className='glow-on-hover' style={{ marginTop: '0.5%', width: '98%', textAlign: 'center', paddingTop: '1.5%', marginBottom: '4%' }}>Ayush Kumar Baranwal</h1>
                    </center>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <center>
                        <img src='Ayush.jpg' style={{ width: '50%', height: '50%', marginLeft: "15px" }}></img>
                    </center>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px', fontSize: '16px' }}>
                        Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse internships has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: '16px' }}>
                        I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development!
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: '55%', paddingLeft: '1%', paddingBottom:'0.2%' }}>I'm interested in...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <b>Web Development</b>: React, Django, Node.js, Express, HTML, CSS, JavaScript, Bootstrap
                        <br></br>
                        <b>Game Development</b>: Unity Game Engine, C#, Godot Game Engine, GDScript
                        <br></br>
                        <b>Machine Learning</b>: PyTorch, NumPy, Pandas, Matplotlib, Scikit-learn
                        <br></br>
                        <b>Algorithmic Problem-Solving</b>: C, C++, Java, Python
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: '55%', paddingLeft: '1%', paddingBottom:'0.2%' }}>My Hobbies are...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <b>Reading</b>: I love to read novels and articles on random topics
                        <br></br>
                        <b>Blogging</b>: I love to write blogs for my own blog website
                        <br></br>
                        <b>Playing Guitar</b>: Although a beginner, I love playing guitar
                        <br></br>
                        <b>BasketBall</b>: I love playing basketBall
                        <br></br>
                        <b>Music</b>: I love listening to music
                    </p>
                </div>
                :
                <></>
            }
        </>
    )
}

export default About
