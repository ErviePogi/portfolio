import React from 'react';
import './Experience.css';
import KCOOP_LOGO from '../../files/kcoop.png';
import SLOGIC_LOGO from '../../files/slogic.png';

function Experience() {
  return (
    <div className='experience-container'>
      <div>
        <h2 className='experience-header-title' style={{fontSize: "2.25rem"}}>WORK EXPERIENCE</h2>
        <div className="experience">
          <div className="card">
              <img src={SLOGIC_LOGO} style={{backgroundColor:"black", borderRadius: 8, width: "90%"}}/>
              <h4 style={{fontSize: "2.2rem", fontWeight: 600}}>Junior System Engineer</h4>
              <p style={{fontStyle: 'italic'}}>
                <a href='https://slogicsolution.com/' target='_blank'>Space Logic</a>
              </p>
              <p style={{fontWeight: 'bold'}}>
                July 2024 - Present
              </p>
              <div className='exp-container-content-col2'>
                <div className='exp-container-content-cols'>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Design, Deploy and Manage Servers (Linux)
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Maintain and monitor system performance, security, and availability
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Manage backups, disaster recovery, and patching processes
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Handled SSL certificate renewals and installations across Apache/Nginx
                  </h4>
                </div>
                
                <div className='exp-container-content-cols'>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Managed domain lifecycle and DNS configurations, including email authentication records (SPF, DKIM, DMARC)
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Provided L1–L3 support to client technical requests involving server downtime, email failures, and control panel access.
                  </h4>
                </div>
              </div>
              <p style={{fontStyle: 'italic'}}>
                  I have acquired practical experience in maintaining secure and high-availability 
                  Linux server environments, handling end-to-end tasks such as system monitoring, 
                  SSL/DNS management, backup and recovery, and providing L1–L3 technical support to clients.
                </p>
              {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
          </div>
        </div>

        <div className="experience">
          <div className="card">
              <img src={KCOOP_LOGO} width={75}/>
              <h4 style={{fontSize: "2.2rem", fontWeight: 600}}>Software Developer (Full-Stack Developer)</h4>
              <p style={{fontStyle: 'italic'}}>
                Web and Mobile Developer at <a href='https://kcoop.org.ph/' target='_blank'>Kasagana-Ka
                Cooperative (KCOOP)</a> 
              </p>
              <p style={{fontWeight: 'bold'}}>
                June 2023 - April 2024
              </p>
              <div className='exp-container-content-col2'>
                <div className='exp-container-content-cols'>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Handled web and mobile development
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Handled security and validation of API
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Trained an internship student to design a mobile development
                  </h4>
                </div>
                
                <div className='exp-container-content-cols'>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Resolved system and human errors
                  </h4>
                  <h4 className='exp-h4-items' >
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Designed and published KCOOP website
                  </h4>
                </div>
              </div>
              <p style={{fontStyle: 'italic'}}>
                  I have learned a lot about web and mobile development, particularly using Ruby on Rails, 
                  which provides a simple and secure way to interact with databases through Ruby code.
                </p>
              {/* <a href="#">Join Now <i className="ri-arrow-right-line"></i></a> */}
          </div>
        </div>
      </div>

      <div>
        <h2 className='experience-header-title' style={{fontSize: '1.5rem'}}>EXTRA AND CO-CURRICULAR ENGAGEMENT AND VOLUNTEER WORK</h2>
        <div className="experience">
          <div className="card">
            <div className='experience-container-content'>
              <h4 className='exp-h4-items' >
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x27A4;</div>
                Participant in the PNP – ITMS Hackathon 2022 at
                Camp Rafael Crame PNP General Headquarters -
                2022
              </h4>
              <h4 className='exp-h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x27A4;</div>
                Working Online in Remotask - Annotating and
                Labeling objects - 2021
              </h4>
              <h4 className='exp-h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x27A4;</div> 
                Participant in the BLUE HACKS 2020 at Ateneo De
                Manila University - 2020
              </h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Experience