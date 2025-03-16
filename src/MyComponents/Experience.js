import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom'

function AlwaysOpenExample(props) {
    return (
        <div style={{ marginLeft: props.mobile === false ? '19.5%' : '5%', marginRight: props.mobile === false ? '19.5%' : '5%' }}>
            <br></br>
            <h1>Experience</h1>
            <br></br>
            <Accordion defaultActiveKey={['0']} alwaysOpen>

                <Accordion.Item eventKey="0">
                    {props.mobile === false ?
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> Air India, Gurgaon, India</b> &nbsp; - Software Developer (Nov, 2024 - Present)</Accordion.Header>
                        : 
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> Air India, Gurgaon, India</b> SDE <br></br> (Nov, 2024 - Present)</Accordion.Header>   
                    }
                    <Accordion.Body>
                        - Realized a 2481 Cr opportunity in the PUF panel market and created an investor pitch to present it to the upper management
                        <br></br>
                        - Utilized Microsoft Excel to perform a cost and profitability analysis as well as a market size analysis for PUF panels
                        <br></br>
                        - Suggested a distribution channel and made a market launch strategy for 2 new products of JSW Steel Coated Products
                        <br></br>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    {props.mobile === false ?
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> JSW, Mumbai, India</b> &nbsp; - Industry Analyst Intern (May, 2023 - Jul, 2023)</Accordion.Header>
                        : 
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> JSW, Mumbai, India</b> Industry Analyst Intern <br></br> (May, 2023 - Jul, 2023)</Accordion.Header>   
                    }
                    <Accordion.Body>
                        - Used an Excel-based model with demand, costs, and pricing estimates to identify a $300M market opportunity
                        <br></br>
                        - Conducted data-driven market research on PUF Panels and analyzed trends, giving insights to senior management
                        <br></br>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    {props.mobile === false ?
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> NVOI, Delaware, USA</b> &nbsp; - Game Developer Intern (Jun, 2022 - Jul, 2022)</Accordion.Header>
                        : 
                        <Accordion.Header><b style={{ color: props.darkMode === false ? 'black' : 'white' }}> NVOI, Delaware, USA</b> Game Developer Intern <br></br> (Jun, 2022 - Jul, 2022)</Accordion.Header>   
                    }
                    <Accordion.Body>
                        - Developed 2D arcade games with procedural level generation for a Web 3.0 startup using the Godot Engine
                        <br></br>
                        - Built infinite side-scrolling gameplay with seamless background scrolling and mechanics like jumping, shooting, etc
                        <br></br>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
}

export default AlwaysOpenExample;