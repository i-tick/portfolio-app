import React from 'react'
import './styles.css'
import aboutImage from '../aitik.jpg'
import resume from '../Aitik Resume.pdf'

function about() {
    return (
        <div className="aboutPage mt-5" id="about">
            <div className="container">
                <p className="experiencePage-name text-center pt-4">ABOUT ME</p>
                <div className="row">
                    <div className="col-md-3 my-2">
                        <img src={aboutImage} alt="Aitik-avatar" className="col-md-12 about-avatar" />
                        <span className="m-5 ">
                            <a className="btn btn-dark mt-5 resumeButton" href={resume} download>
                                <i className="fa fa-file-pdf-o" aria-hidden="true"></i><span> </span>
                                Download Resume
                            </a>
                        </span>

                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-7 my-2">
                        <p>
                            I am Aitik Dandapat, a passionate and driven software engineer currently pursuing my Master's in Computer Science at State University of New York, Stony Brook, where I maintain a CGPA of 3.7/4.0. I have a strong foundation in computer science from my Bachelor's degree at Veer Surendra Sai University of Technology. As a former software engineer at Red Hat, I worked with cutting-edge technologies such as Kubernetes, OpenShift, Docker, and Jenkins to develop, deploy, and maintain cloud-native applications. I collaborated with a team of engineers and architects to deliver scalable, reliable, and secure solutions for a variety of clients and industries. I am skilled in various programming languages and frameworks such as C++, C#/.Net, Go lang, Python, React.js, and SpringBoot, with a proven track record of optimizing system performance and improving user experiences. I am eager to leverage my skills and knowledge in new challenges and projects.
                            <br></br><br></br>
                            {/* <p>Here are a few technologies I’ve been working with recently:</p>

                            <ul class="skills-list"><li>C#/.Net</li><li>React.js</li><li>C</li><li>C++</li><li>Java</li><li>Python</li><li>Go lang</li><li>Distributed Systems</li><li>HTML&amp;CSS</li><li>JavaScript</li><li>SQL</li><li>Salesforce</li><li>Apex</li><li>LWC</li><li>SOQL</li><li>SLDS</li><li>XML</li><li>Bootstrap</li><li>PHP</li><li>Node.js</li><li>MySQL</li><li>MS SQL</li><li>Hadoop</li><li>Spark</li><li>Flask</li><li>NLP/LLM</li></ul> */}
                        </p>
                    </div>
                </div>

                <div className=" py-5 mx-auto skillcards-wrapper">
                    <div className="skillcard">
                            <div className="header text-center">
                            <h4>HTML/CSS</h4>
                            <h4>ANGULAR</h4>
                            <h4>REACT JS</h4>
                            <h4>BOOTSTRAP, MATERIAL UI etc.</h4>
                        </div>
                        <div className="description text-center">
                            <h5>Frontend Technologies</h5>
                        </div>
                     </div>
                     <div className="skillcard">
                            <div className="header text-center">
                            <h4>NODEJS </h4>
                            <h4>EXPRESS</h4>
                            
                    </div>
                        <div className="description text-center">
                            <h5>Backend Technologies & Testing</h5>
                        </div>
                     </div><div className="skillcard">
                            <div className="header text-center">
                            <h4>MONGO DB</h4>
                            <h4>SQL</h4>
                        </div>
                        <div className="description text-center">
                            <h5>Database Management</h5>
                        </div>
                        </div>
                        </div>
            </div>
        </div>
    )
}

export default about