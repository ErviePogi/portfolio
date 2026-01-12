import React from 'react';
import './Skills.css';
import pythonLogo from '../../files/python.png';
import rubyLogo from '../../files/ruby.png';
import phpLogo from '../../files/php.png';
import jsLogo from '../../files/js.png';
import htmlLogo from '../../files/html.png';
import cssLogo from '../../files/css.png';
import hamlLogo from '../../files/haml.png';
import cLogo from '../../files/c.png';
import cppLogo from '../../files/c++.png';
import reactLogo from '../../files/react.png';
import nextLogo from '../../files/next.png';
import djangoLogo from '../../files/django.png';
import expressLogo from '../../files/express.png';
import prismaLogo from '../../files/prisma.png';
import pyqt5Logo from '../../files/pyqt5.png';
import rubyrailsLogo from '../../files/rubyrails.png';
import ansibleLogo from '../../files/ansible.png';
import dockerLogo from '../../files/docker.png';
import mysqlLogo from '../../files/mysql.png';
import postgresqlLogo from '../../files/postgresql.png';
import nginxLogo from '../../files/nginx.png';
import apacheLogo from '../../files/apache.png';
import patroniLogo from '../../files/patroni.png';
import haproxyLogo from '../../files/haproxy.png';
import zadaraLogo from '../../files/zabbix.png';
import nagiosLogo from '../../files/nagios.png';
import pagerdutyLogo from '../../files/pagerduty.png';
import cactiLogo from '../../files/cacti.png';
import slackLogo from '../../files/slack.png';
import awsCloudwatchLogo from '../../files/aws-cloudwatch.png';
import awsEc2Logo from '../../files/aws-ec2.png';
import awsRoute53Logo from '../../files/aws-route53.png';
import awsSNSLogo from '../../files/aws-sns.png';
import pleskLogo from '../../files/plesk.png';
import postfixLogo from '../../files/postfix.png';
import cloudflareLogo from '../../files/cloudflare.png';
import cicdLogo from '../../files/cicd.png';

function Skills() {
  return (
    <div className='skills-container'>
      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Skills</h2>
        <div className="skills">
          <div className="card">
            <div className='skills-container-content'>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div> 
                Able to use different operating
                systems such as Windows/Linux
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Network Security and Automation
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Database Management
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Hardware Troubleshooting
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div> 
                Network Troubleshooting
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Linux Bash Scripting
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                SSL certificate management and renewal
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                DNS management
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Basic firewall and port control
              </h4>
              <h4 className='h4-items'>
                <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                Incident response and root cause analysis
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Knowledge</h2>
        <div className="skills">
          <div className="card">
            <div className='skills-container-content-col2'>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={djangoLogo} alt="Logo" width="25" />
                  Django
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={reactLogo} alt="Logo" width="25" />
                  React JS/Native
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={nextLogo} alt="Logo" width="25" />
                  Next JS
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={expressLogo} alt="Logo" width="25" />
                  Express JS and
                  <img src={prismaLogo} alt="Logo" width="25" />
                  Prisma
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={rubyrailsLogo} alt="Logo" width="25" />
                  Ruby on rails
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={pyqt5Logo} alt="Logo" width="25" />
                  PyQt5
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={ansibleLogo} alt="Logo" width="25" />
                  Ansible
                </h4>
              </div>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={dockerLogo} alt="Logo" width="25" />
                  Docker
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={postgresqlLogo} alt="Logo" width="25" />
                  PostgreSQL
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={mysqlLogo} alt="Logo" width="25" />
                  MySQL
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={patroniLogo} alt="Logo" width="25" />
                  Patroni
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={haproxyLogo} alt="Logo" width="25" />
                  HaProxy
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={nginxLogo} alt="Logo" width="25" />
                  Nginx
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={apacheLogo} alt="Logo" width="25" />
                  Apache
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Programming Languages</h2>
        <div className="skills">
          <div className="card">.
            <div className='skills-container-content-col2'>
              <div>
                  <h4 className='h4-items'>
                  &#x27A4;
                  <img src={pythonLogo} alt="Logo" width="25" />
                  Python
                </h4>
                <h4 className='h4-items'>
                  &#x27A4;
                  <img src={rubyLogo} alt="Logo" width="25" />
                  Ruby
                </h4>
                <h4 className='h4-items'>
                  &#x27A4;
                  <img src={phpLogo} alt="Logo" width="25" />
                  PHP
                </h4>
                <h4 className='h4-items'>
                  &#x27A4;
                  <img src={cLogo} alt="Logo" width="25" />
                  C and 
                  <img src={cppLogo} alt="Logo" width="25" />
                  C++
                </h4>
              </div>
              <div>
                <h4 className='h4-items'>
                  &#x27A4;
                  <img src={hamlLogo} alt="Logo" width="25" />
                  HAML
                </h4>
                <h4 className='h4-items'>
                  &#x27A4;
                  <img src={jsLogo} alt="Logo" width="25" />
                  JavaScript / 
                  <img src={htmlLogo} alt="Logo" width="25" />
                  HTML /
                  <img src={cssLogo} alt="Logo" width="25" /> 
                  CSS
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Monitoring Tools</h2>
        <div className="skills">
          <div className="card">
            <div className='skills-container-content-col2'>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={zadaraLogo} alt="Logo" width="25" />
                  Zabbix
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={nagiosLogo} alt="Logo" width="25" />
                  Nagios / NagiosXI
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={cactiLogo} alt="Logo" width="25" />
                  Cacti
                </h4>
              </div>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={pagerdutyLogo} alt="Logo" width="25" />
                  PagerDuty
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={slackLogo} alt="Logo" width="25" />
                  Slack
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={awsCloudwatchLogo} alt="Logo" width="25" />
                  AWS Cloudwatch
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Others</h2>
        <div className="skills">
          <div className="card">.
            <div className='skills-container-content-col2'>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={awsEc2Logo} alt="Logo" width="25" />
                  AWS EC2 / Zadara Instances
                </h4 >
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={awsRoute53Logo} alt="Logo" width="25" />
                  AWS Route 53
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={awsSNSLogo} alt="Logo" width="25" />
                  AWS SNS
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={cloudflareLogo} alt="Logo" width="25" />
                  Cloudflare DNS
                </h4>
              </div>
              <div>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={cicdLogo} alt="Logo" width="25" />
                  CI/CD
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={pleskLogo} alt="Logo" width="25" />
                  Plesk (Hosting)
                </h4>
                <h4 className='h4-items'>
                  &#x27A4; 
                  <img src={postfixLogo} alt="Logo" width="25" />
                  Postfix (MTA)
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='skills-header-title' style={{fontSize: "2.25rem"}}>Characteristics</h2>
        <div className="skills">
          <div className="card">.
            <div className='skills-container-content-col2'>
              <div>
                <h4 className='h4-items'>
                  <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                  Hardworking
                </h4>
                <h4 className='h4-items'>
                  <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                  Time Management
                </h4>
                <h4 className='h4-items'>
                  <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                  Creativity
                </h4>
              </div>
              <div>
                  <h4 className='h4-items'>
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Problem Solving
                  </h4>
                  <h4 className='h4-items'>
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Collaboration
                  </h4>
                  <h4 className='h4-items'>
                    <div style={{ marginRight: "0.5rem", fontSize: 15}}>&#x25CF;</div>
                    Honest
                  </h4>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills