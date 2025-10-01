import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import './Experience.css';

const experienceData = [
  {
    company: 'Air India, Gurgaon, India',
    role: 'Software Developer',
    duration: 'Nov, 2024 - Present',
    mobileRole: 'SDE',
    points: [
      'Redesigned PilotPlus app from scratch, setting up reusable components & managers (network, color, image, font)',
      'Created Core Data entities, and MVVM architecture involving advanced features (drag-and-drop, animations, etc)',
      'Built validation logic reducing backend load by 30% and redesigned data flow reducing PSR filling time by 60%',
      'Enhanced CEPlus app with new features, integrating REST APIs and caching data in Core Data for offline use',
      'Implemented async calls for efficiency, wrote exhaustive tests and closed 100+ Jira tickets via GitHub/SourceTree'
    ]
  },
  {
    company: 'JSW, Mumbai, India',
    role: 'Industry Analyst Intern',
    duration: 'May, 2023 - Jul, 2023',
    mobileRole: 'Industry Analyst Intern',
    points: [
      'Used an Excel-based model with demand, costs, and pricing estimates to identify a $300M market opportunity',
      'Conducted data-driven market research on PUF Panels and analyzed trends, giving insights to senior management'
    ]
  },
  {
    company: 'NVOI, Delaware, USA',
    role: 'Video Game Developer Intern',
    duration: 'Jun, 2022 - Jul, 2022',
    mobileRole: 'Game Developer Intern',
    points: [
      'Developed 2D arcade games with procedural level generation for a Web 3.0 startup using the Godot Engine',
      'Built infinite side-scrolling gameplay with seamless background scrolling and mechanics like jumping, shooting, etc'
    ]
  }
];

function AlwaysOpenExample({ mobile }) {
  return (
    <div className={`experience-container ${mobile ? 'mobile' : 'desktop'}`}>
      <br></br>
      <h1>Experience</h1>
      <br></br>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {experienceData.map((exp, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>
              {mobile === false ? (
                <><b>{exp.company}</b> &nbsp; - {exp.role} ({exp.duration})</>
              ) : (
                <><b>{exp.company}</b> {exp.mobileRole} <br /> ({exp.duration})</>
              )}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="experience-points">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <br/>
      <br/>

    </div>
  );
}

export default AlwaysOpenExample;
