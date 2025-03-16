import React from 'react'

const About = (props) => {
    const intro = 'Hi there! I\'m Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse companies has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.';
    const intoExtended = 'I\'m on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let\'s connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com'

    const skills = [
        { category: "Web Development", technologies: "React, Django, Node.js, Express, HTML, CSS, JavaScript, Firebase, Pythonanywhere" },
        { category: "Machine Learning", technologies: "PyTorch, NumPy, Pandas, Matplotlib, Scikit-learn" },
        { category: "Game Development", technologies: "Unity Game Engine, C#, Godot Engine, GDScript" },
        { category: "App Development", technologies: "Swift, SwiftUI, Xcode, Java, Android Studio" },
        { category: "Algorithmic Problem-Solving", technologies: "C, C++, Java, Python" }
    ];

    const hobbies = [
        { name: "Reading", description: "I love to read novels and articles on random topics" },
        { name: "Blogging", description: "I love to write blogs for my own blog website" },
        { name: "Playing Guitar", description: "Although a beginner, I love playing guitar" },
        { name: "Basketball", description: "I love playing basketball" },
        { name: "Music", description: "I love listening to music" }
    ];

    return (
        <>
            {(props.mobile || props.tab) === false ?
                <div style={{ margin: '0px 20%' }}>
                    <h1 className='glow-on-hover' style={{ margin: '0.5% 0px', width: '50%', textAlign: 'center' }}>Ayush Kumar Baranwal</h1>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <img src='Ayush.jpg' style={{ float: 'right', width: '44%', height: '44%', marginLeft: "15px" }}></img>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px', fontSize: '16.5px' }}>
                        {intro}
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: '16.5px' }}>
                        {intoExtended}
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '100%', fontSize: '26px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom: '0.2%' }}>I'm interested in...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        <table>
                            <tbody>
                                {skills.map((skill, index) => (
                                    <tr key={index} style={{ verticalAlign: 'top' }}>
                                        <td style={{ paddingRight: '15px' }}>
                                            <b>{skill.category}</b>
                                        </td>
                                        <td>{skill.technologies}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '100%', fontSize: '26px', margin: '0.5% 0px', width: '26%', paddingLeft: '1%', paddingBottom: '0.2%' }}>My Hobbies are...</h1>
                    <p style={{ textAlign: 'left', fontSize: '17px' }}>
                        <table>
                            <tbody>
                                {hobbies.map((hobby, index) => (
                                    <tr key={index}>
                                        <td style={{ paddingRight: '15px' }}>
                                            <b>{hobby.name}</b>
                                        </td>
                                        <td>{hobby.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </p>
                </div>
                :
                <></>
            }
            {(props.tab || props.mobile) === true ?
                <div style={{ margin: '0px 5%' }}>
                    <center>
                        <h1 className='glow-on-hover' style={{ marginTop: '0.5%', width: (props.tab === true) ? '60%' : '98%', textAlign: 'center', paddingTop: (props.tab === true) ? '0.25%' : '1.5%', marginBottom: '4%' }}>Ayush Kumar Baranwal</h1>
                    </center>
                    {/* <h1 className='animate-character' style={{margin : '5px 0px',fontSize:'50px', textAlign:'center'}}>Ayush Kumar Baranwal</h1> */}
                    <center>
                        <img src='Ayush.jpg' style={{ width: (props.tab === true) ? '44%' : '50%', height: (props.tab === true) ? '44%' : '50%', marginLeft: "15px" }}></img>
                    </center>
                    <br></br>
                    <p style={{ textAlign: 'justify', marginBottom: '25px', fontSize: '16px' }}>
                        {intro}
                    </p>
                    <p style={{ textAlign: 'justify', fontSize: '16px' }}>
                        {intoExtended}
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: (props.tab === true) ? '26%' : '55%', paddingLeft: '1%', paddingBottom: '0.2%' }}>I'm interested in...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        {skills.map((skill, index) => (
                            <span key={index}>
                                <b>{skill.category}</b>: {skill.technologies}
                                <br />
                            </span>
                        ))}
                    </p>
                    <br></br>
                    <h1 className='glow-on-hover' style={{ height: '10%', fontSize: '20px', margin: '0.5% 0px', width: (props.tab === true) ? '26%' : '55%', paddingLeft: '1%', paddingBottom: '0.2%' }}>My Hobbies are...</h1>
                    <p style={{ textAlign: 'justify', fontSize: '17px' }}>
                        {hobbies.map((hobby, index) => (
                            <span key={index}>
                                <b>{hobby.name}</b>: {hobby.description}
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
                :
                <></>
            }
        </>
    )
}

export default About
