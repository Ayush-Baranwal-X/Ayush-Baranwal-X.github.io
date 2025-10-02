import React from 'react'
import './About.css'  // we'll move styles here for cleaner JSX

const About = () => {
    const intro = `I'm an IIT Delhi graduate (Class of 2024) and Software Developer with experience building scalable backend and full-stack systems. At Air India, I engineered production apps with Swift and SwiftUI, implementing Core Data architectures, async workflows, and performance optimizations that improved efficiency by over 50%.
                   Beyond work, I thrive at the intersection of systems and product engineering. I’ve built projects like Fintra (a secure expense tracker with Spring Boot & MongoDB), Blog Express (a full-stack blogging platform on Express & MongoDB), Dmail (a web-based email service on Django), and Noted (a distraction-free, open-source note-taking app). I enjoy designing clean architectures (DDD, event-driven systems), working with modern web stacks, and solving challenging backend problems.`;

    const introExtended = `I'm on a quest to continuously learn, innovate, and collaborate on projects that push the boundaries of technology. Let's connect and explore opportunities where I can contribute my technical expertise and passion for software development!`;

    const skills = [
        {
            category: "Languages",
            technologies: "C, C++, C#, Java, Python, JavaScript, TypeScript, SQL, Swift, HTML, CSS"
        },
        {
            category: "Frameworks & Libraries",
            technologies: "Spring Boot, Node.js, Express, Django, SwiftUI, React, Handlebars, PyTorch, Selenium"
        },
        {
            category: "Tools & Platforms",
            technologies: "Git, GitHub, Firebase, MongoDB, SQLite, Postman, Jira, Render, PythonAnywhere, Xcode"
        },
        {
            category: "Game Development",
            technologies: "Unity, Godot Engine"
        }
    ];


    const hobbies = [
        {
            name: "Reading",
            description: "Enjoy exploring novels, non-fiction, and articles across diverse topics"
        },
        {
            name: "Writing",
            description: "Maintain a personal blog where I share ideas, insights, and experiences"
        },
        {
            name: "Guitar",
            description: "Beginner guitarist, passionate about learning and experimenting with music"
        },
        {
            name: "Basketball",
            description: "Love playing basketball for fitness, teamwork, and fun"
        },
        {
            name: "Music",
            description: "Appreciate a wide range of genres, often listening for focus and inspiration"
        }
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
