import React from 'react'
import './About.css'  // we'll move styles here for cleaner JSX

const About = () => {
  const intro = `Hi there! I'm Ayush Kumar Baranwal, a driven software enthusiast and Engineering graduate from the prestigious Indian Institute of Technology Delhi. My journey through academia and diverse companies has fueled my passion for software development and technology innovation. I thrive on transforming ideas into reality through code, crafting impactful solutions that blend creativity with technical excellence. My experience in analyzing market opportunities, developing user-centric applications like websites and Android apps, and crafting machine learning models has honed my skills across various tech stacks, including C++, Python, Java, and web development frameworks like React, Node.js and Django.`;

  const introExtended = `I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development! You can reach me at ayushkumarbaranwal1@gmail.com`;

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
    <div className="about-container">
        <center>
            <h1 className="glow-on-hover about-title">Ayush Kumar Baranwal</h1>
        </center>
        

      <div className="about-intro">
        <img src="Ayush.jpg" alt="Ayush" className="about-image" />
        <div className="about-text">
          <p>{intro}</p>
          <p>{introExtended}</p>
        </div>
      </div>

      <div className="about-section">
        <h2 className="glow-on-hover">I'm interested in...</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <b>{skill.category}:</b> {skill.technologies}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section">
        <h2 className="glow-on-hover">My Hobbies are...</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>
              <b>{hobby.name}:</b> {hobby.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
