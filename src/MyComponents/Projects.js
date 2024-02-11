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
                        - Built a free web-based email service using Django as the backend and HTML, CSS, JavaScript and Bootstrap as the frontend
                        <br></br>
                        - Used SQLite database to store all data, uploaded the website on GitHub and hosted the website using PythonAnywhere
                        <br></br>
                        - Implemented a system using Django which allows anyone to create a new account or log in and log out of their own accounts
                        <br></br>
                        - Included a feature that allows users to send emails, receive emails, reply to emails and delete the sent and received emails
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://dmail.pythonanywhere.com/' target='_blank' >dmail.pythonanywhere.com</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
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
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Driver Club (Racing Game)</b></Accordion.Header>
                    <Accordion.Body>
                        - Designed a Racing Video Game set in a custom-made terrain, using Unity Game Engine as an individual project under DevClub
                        <br></br>
                        - Included driving as the main mechanic along with a single-player and a local multiplayer mode allowing 2 people to play together
                        <br></br>
                        - Implemented a fully functional UI and support for gamepad along with a music and sound effects system for the game
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://ayushbaranwal.itch.io/driverclub' target='_blank' >www.ayushbaranwal.itch.io/driverclub</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
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

                <Accordion.Item eventKey="4">
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

                <Accordion.Item eventKey="5">
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

                <Accordion.Item eventKey="6">
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

                <Accordion.Item eventKey="7">
                    <Accordion.Header><b>Quiz (Android App)</b></Accordion.Header>
                    <Accordion.Body>
                        - Built a quiz app for Android using Java in android studio and converted it into a ready-to-install Android apk
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Quiz' target='_blank' >www.github.com/Ayush-Baranwal-X/Quiz</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                    <Accordion.Header><b>Cookie Clicker (Bot)</b></Accordion.Header>
                    <Accordion.Body>
                        - Implemented a bot with the help of Selenium using Python which can play an online game called cookie clicker smartly
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot' target='_blank' >www.github.com/Ayush-Baranwal-X/Cookie-Clicker-Bot</Link>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
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