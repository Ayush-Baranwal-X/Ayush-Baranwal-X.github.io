import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectsData = [
    {
        title: 'Fintra (Expense Tracker)',
        duration: 'Sept. 2025 – Oct. 2025',
        techStack: 'Spring Boot, React, MongoDB',
        description: [
            'Developed a Spring Boot backend with Spring Security & Basic Auth for secure user login and session management',
            'Designed CRUD REST APIs, integrated MongoDB for NoSQL data storage, and used React with MUI for frontend',
            'Built a report module with date-range filters, category-wise aggregation, expense lists, and configured dev/prod environment',
            'Implemented SMTP email alert for exceeding budgets and created a role-based admin portal for user management'
        ],
        link: { url: '', text: 'Private Project' }
    },
    {
        title: 'Blog Express (Blog Website)',
        duration: 'June 2024 – July 2024',
        techStack: 'Express, Handlebars, MongoDB, Render',
        description: [
            'Built a full-stack web app using Express.js, Handlebars, and MongoDB, with session-based authentication',
            'Implemented MVC architecture, server-side search for efficient blog filtering, and deployed securely on Render',
            'Secured credentials using dotenv and Render environment variables, optimized middleware, added error handling'
        ],
        link: { url: 'https://blog-express-9t2d.onrender.com/', text: 'bit.ly/ayushblogexpress' }
    },
    {
        title: 'Dmail (Email Website)',
        duration: 'Sept. 2023 – Oct. 2023',
        techStack: 'Django, SQLite, PythonAnywhere',
        description: [
            'Created a web service using Django with SQLite, hosted it on PythonAnywhere, and published it on GitHub',
            'Implemented Django authentication with session-based login/logout, credential validation, and feedback messages',
            'Developed an efficient email system with a responsive UI for sending, receiving, replying, and deleting emails'
        ],
        link: { url: 'https://dmail.pythonanywhere.com/', text: 'dmail.pythonanywhere.com' }
    },
    {
        title: 'Terminal (Web Terminal)',
        duration: 'N/A',
        techStack: 'jQuery Terminal, Firebase',
        description: [
            'Designed a web-based terminal using jQuery Terminal for a command-line experience, featuring diverse commands',
            'Hosted the site using Firebase, used Tech Domains to get a custom domain name, and uploaded all files on Github',
            'Integrated various APIs (Joke API, Weather API, Image API, etc) to fetch and display data based on user input'
        ],
        link: { url: 'https://akbxterminal.web.app/', text: 'akbxterminal.web.app/' }
    },
    {
        title: 'Driver Club (Racing Game)',
        duration: 'N/A',
        techStack: 'Unity',
        description: [
            'Made a racing game in Unity with custom terrains, polished UI, and a sound system, and published it on itch.io',
            'Created advanced driving physics, checkpoints, single-player and local multiplayer modes, and immersive lighting'
        ],
        link: { url: 'https://ayushbaranwal.itch.io/driverclub', text: 'www.ayushbaranwal.itch.io/driverclub' }
    },
    {
        title: 'Wonderland (Open World Shooting Game)',
        duration: 'N/A',
        techStack: 'Unity',
        description: [
            'Designed a Video Game based on a small Open World, using Unity Game Engine as an individual project under DevClub',
            'Included shooting mechanics (3 different guns), time-freezing mechanics, and teleportation mechanics as the main mechanics'
        ],
        link: { url: 'https://ayushbaranwal.itch.io/wonderland', text: 'www.ayushbaranwal.itch.io/wonderland' }
    },
    {
        title: 'To Do List (To Do Website)',
        duration: 'N/A',
        techStack: 'HTML, CSS, Bootstrap, React, Firebase',
        description: [
            'Developed a free web-based To-Do List application using HTML, CSS, Bootstrap, and React as the frontend framework',
            'Implemented Local Storage for data persistence, uploaded the project on GitHub and hosted the website using Firebase'
        ],
        link: { url: 'https://listxtodo.web.app/', text: 'listxtodo.web.app' }
    },
    {
        title: 'Real Estate Price Prediction (ML Model)',
        duration: 'N/A',
        techStack: 'Python, NumPy, Pandas, Scikit-learn, Matplotlib, Joblib',
        description: [
            'Predicted real estate prices based on several features using Python, NumPy, Pandas, Scikit-learn, Matplotlib and Joblib',
            'Developed a data preprocessing pipeline incorporating imputation for missing data and feature scaling for better performance',
            'Compared Linear Regression, Lasso Regression, Decision Tree Regression & Random Forest Regression for optimal predictions'
        ],
        link: { url: 'https://github.com/Ayush-Baranwal-X/Real-Estate-Price-Prediction', text: 'www.github.com/Ayush-Baranwal-X/Real-Estate-Price-Prediction' }
    },
    {
        title: 'Credit Card Fraud Detection (ML Model)',
        duration: 'N/A',
        techStack: 'Python, Scikit-learn, Joblib',
        description: [
            'Visualized the data through scatter plots and applied under-sampling to address the challenge of unbalanced data',
            'Trained a Logistic Regression model to identify fraudulent credit card transactions and saved it using Joblib for persistence'
        ],
        link: { url: 'https://github.com/Ayush-Baranwal-X/Credit-Card-Fraud-Detection', text: 'www.github.com/Ayush-Baranwal-X/Credit-Card-Fraud-Detection' }
    },
    {
        title: 'Handwritten Digit Recognition (ML Model)',
        duration: 'N/A',
        techStack: 'Python, Scikit-learn, Joblib',
        description: [
            'Classified hand-written digits from the MNIST dataset using Python, NumPy, Pandas, Scikit-learn, Matplotlib and Joblib',
            'Developed a Logistic Regression model to classify hand-written digits and saved it using Joblib for persistence'
        ],
        link: { url: 'https://github.com/Ayush-Baranwal-X/Handwritten-Digit-Recognition', text: 'www.github.com/Ayush-Baranwal-X/Handwritten-Digit-Recognition' }
    },
    {
        title: 'Cookie Clicker (Bot)',
        duration: 'N/A',
        techStack: 'Python, Selenium',
        description: [
            'Implemented a bot with Selenium in Python which can play an online game called Cookie Clicker smartly'
        ],
        link: { url: 'https://github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot', text: 'www.github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot' }
    },
    {
        title: 'Dmail Scraper (Selenium Web Scraper)',
        duration: 'N/A',
        techStack: 'Python, Selenium',
        description: [
            'Built a web scraper that logs into my account on my own email website and extracts a list of received email subjects'
        ],
        link: { url: 'https://github.com/Ayush-Baranwal-X/Dmail-Scraper', text: 'www.github.com/Ayush-Baranwal-X/Dmail-Scraper' }
    }
];


function ProjectsAccordion({ darkMode, mobile }) {
    return (
        <div className={`accordion-container ${mobile ? 'mobile' : 'desktop'} ${darkMode ? 'dark-mode' : ''}`}>
            <br></br>
            <h1>Projects</h1>
            <br></br>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                {projectsData.map((project, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <div className='project-header'>
                            {mobile ? (
                                <b>{project.title}</b>
                            ) : (
                                <b>{project.title}</b>
                            )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ul className="project-points">
                                {project.description.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>
                            {project.link.url && project.link.url !== "" && (
                                <p>
                                    You can visit it at:{' '}
                                    <Link
                                        style={{
                                            color: darkMode ? 'cyan' : 'purple',
                                            textDecoration: 'none'
                                        }}
                                        to={project.link.url}
                                        target="_blank"
                                    >
                                        {project.link.text}
                                    </Link>
                                </p>
                            )}
                        </Accordion.Body>

                    </Accordion.Item>
                ))}
            </Accordion>
            <br />
            <br />

        </div>
    );
}

export default ProjectsAccordion;
