import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

function AlwaysOpenExample(props) {
    return (
        <div style={{ marginLeft: props.mobile === false ? '19.5%' : '5%', marginRight: props.mobile === false ? '19.5%' : '5%' }}>
            <br></br>
            <h1>List of Projects</h1>
            <br></br>
            <Accordion defaultActiveKey={['0']} alwaysOpen>

                <Accordion.Item eventKey="0">
                    <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}>Dmail (Email Website)</b></Accordion.Header>
                    <Accordion.Body>
                        - Created a web service using Django with SQLite, hosted it on PythonAnywhere, and published it on GitHub
                        <br></br>
                        - Implemented Django authentication with session-based login/logout, credential validation, and feedback messages
                        <br></br>
                        - Developed an efficient email system with a responsive UI for sending, receiving, replying, and deleting emails
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://dmail.pythonanywhere.com/' target='_blank' >dmail.pythonanywhere.com</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Blog Express (Blog Website)</b></Accordion.Header>
                    <Accordion.Body>
                        - Built a full-stack web app using Express.js, Handlebars, and MongoDB, with session-based authentication
                        <br></br>
                        - Implemented MVC architecture, server-side search for efficient blog filtering, and deployed securely on Render
                        <br></br>
                        - Secured credentials using dotenv and Render environment variables, optimized middleware, added error handling
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://blog-express-9t2d.onrender.com/' target='_blank' >bit.ly/ayushblogexpress</Link>
                    </Accordion.Body>
                </Accordion.Item>

                {/* <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Ayush's Blog (Blog Website)</b></Accordion.Header>
                    <Accordion.Body>
                        - Built a blog using Django as the backend and HTML, CSS and JavaScript as the frontend and regularly wrote articles for it
                        <br></br>
                        - Hosted the website using PythonAnywhere after uploading it on GitHub and used SQLite database to store all the data
                        <br></br>
                        - Implemented a system that allows only selected users to log in and create, edit and delete posts on the website
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://rail.pythonanywhere.com/' target='_blank' >rail.pythonanywhere.com</Link>
                    </Accordion.Body>
                </Accordion.Item> */}

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Terminal (Web Terminal)</b></Accordion.Header>
                    <Accordion.Body>
                        - Designed a web-based terminal using jQuery Terminal for a command-line experience, featuring diverse commands
                        <br></br>
                        - Hosted the site using Firebase, used Tech Domains to get a custom domain name, and uploaded all files on Github
                        <br></br>
                        - Integrated various APIs (Joke API, Weather API, Image API, etc) to fetch and display data based on user input
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://akbxterminal.web.app/' target='_blank' >akbxterminal.web.app/</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>Driver Club (Racing Game)</b></Accordion.Header>
                    <Accordion.Body>
                        - Made a racing game in Unity with custom terrains, polished UI, and a sound system, and published it on itch.io
                        <br></br>
                        - Created advanced driving physics, checkpoints, single-player and local multiplayer modes, and immersive lighting
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://ayushbaranwal.itch.io/driverclub' target='_blank' >www.ayushbaranwal.itch.io/driverclub</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><b>Wonderland (Open World Shooting Game)</b></Accordion.Header>
                    <Accordion.Body>
                        - Designed a Video Game based on a small Open World, using Unity Game Engine as an individual project under DevClub
                        <br></br>
                        - Included shooting mechanics (3 diferent guns), time-freezing mechanics and teleportation mechanics as the main mechanics
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://ayushbaranwal.itch.io/wonderland' target='_blank' >www.ayushbaranwal.itch.io/wonderland</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header><b>To Do List (To Do Website)</b></Accordion.Header>
                    <Accordion.Body>
                        - Developed a free web-based To-Do List application using a technology stack that included HTML, CSS, Bootstrap, and React as the frontend framework
                        <br></br>
                        - Implemented Local Storage for data persistence, uploaded the project on GitHub and hosted the website using Firebase
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://listxtodo.web.app/' target='_blank' >listxtodo.web.app</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header><b>Real Estate Price Prediction (ML Model)</b></Accordion.Header>
                    <Accordion.Body>
                        - Predicted real estate prices based on several features using Python, NumPy, Pandas, Scikit-learn, Matplotlib and Joblib
                        <br></br>
                        - Developed a data preprocessing pipeline incorporating imputation for missing data and feature scaling for better performance
                        <br></br>
                        - Compared Linear Regression, Lasso Regression, Decision Tree Regression & Random Forest Regression for optimal predictions
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Real-Estate-Price-Prediction' target='_blank' >www.github.com/Ayush-Baranwal-X/Real-Estate-Price-Prediction</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                    <Accordion.Header><b>Credit Card Fraud Detection (ML Model)</b></Accordion.Header>
                    <Accordion.Body>
                        - Visualized the data through scatter plots and applied under-sampling to address the challenge of unbalanced data
                        <br></br>
                        - Trained a Logistic Regression model to identify fraudulent credit card transactions and saved it using Joblib for persistence
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Credit-Card-Fraud-Detection' target='_blank' >www.github.com/Ayush-Baranwal-X/Credit-Card-Fraud-Detection</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><b>Handwritten Digit Recognition (ML Model)</b></Accordion.Header>
                    <Accordion.Body>
                        - Classifed hand-written digits from the MNIST dataset using Python, NumPy, Pandas, Scikit-learn, Matplotlib and Joblib
                        <br></br>
                        - Developed a Logistic Regression model to classify hand-written digits and saved it using Joblib for persistence
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Handwritten-Digit-Recognition' target='_blank' >www.github.com/Ayush-Baranwal-X/Handwritten-Digit-Recognition</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                    <Accordion.Header><b>Quiz (Android App)</b></Accordion.Header>
                    <Accordion.Body>
                        - Built a quiz app for Android using Java in android studio and converted it into a ready-to-install Android apk
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Quiz' target='_blank' >www.github.com/Ayush-Baranwal-X/Quiz</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                    <Accordion.Header><b>Cookie Clicker (Bot)</b></Accordion.Header>
                    <Accordion.Body>
                        - Implemented a bot with the help of Selenium using Python which can play an online game called cookie clicker smartly
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot' target='_blank' >www.github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                    <Accordion.Header><b>Dmail Scraper (Selenium Web Scraper)</b></Accordion.Header>
                    <Accordion.Body>
                        - Built a web scraper that logs into my account on my own email website and extracts a list of received email subjects
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Dmail-Scraper' target='_blank' >www.github.com/Ayush-Baranwal-X/Dmail-Scraper</Link>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}

export default AlwaysOpenExample;