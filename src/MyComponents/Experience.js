import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

function AlwaysOpenExample(props) {
    return (
        <div style={{ marginLeft: props.mobile === false ? '19.5%' : '5%', marginRight: props.mobile === false ? '19.5%' : '5%' }}>
            <br></br>
            <h1>Internships</h1>
            <br></br>
            <Accordion defaultActiveKey={['0']} alwaysOpen>

                <Accordion.Item eventKey="0">
                    <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}>JSW, Mumbai, India</b> &nbsp;&nbsp;&nbsp;- Industry Analyst (May, 2023 - Jul, 2023)</Accordion.Header>
                    <Accordion.Body>
                        - Realized a 2481 Cr opportunity in the PUF panel market and created an investor pitch to present it to the upper management
                        <br></br>
                        - Utilized Microsoft Excel to perform a cost and profitability analysis as well as a market size analysis for PUF panels
                        <br></br>
                        - Suggested a distribution channel and made a market launch strategy for 2 new products of JSW Steel Coated Products
                        <br></br>
                        <br></br>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>NVOI, Delaware, USA</b> &nbsp;- Game Developer (Jun, 2022 - Jul, 2022)</Accordion.Header>
                    <Accordion.Body>
                        - Worked with a Web 3.0 Startup to create 2D arcade video games from scratch using the Godot Game Engine for the Startup
                        <br></br>
                        - Built an infinite side scrolling game which included flapping, laser shooting and dashing as the main mechanics
                        <br></br>
                        - Created another infinite side scroller where the main mechanics were jumping, speed falling and laser shooting
                        <br></br>
                        <br></br>
                        You can visit it at : <Link style={{ color: props.darkMode === false ? 'purple' : 'cyan', textDecoration: 'none' }} to='https://rail.pythonanywhere.com/' target='_blank' >rail.pythonanywhere.com</Link>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}

export default AlwaysOpenExample;