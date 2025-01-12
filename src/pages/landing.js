import React from 'react'
import './styles.css'
import avatar from '../Avtar.jpeg'
import Footer from './footer'
import Typed from 'react-typed';
import About from './about'
import Experience from './experience'
import Education from './education'
import HireMe from './hiringPage'
import Project from "./projects"
import Services from "./services"
import Collab from './collab'
import Volunteer from "./volunteerexp"
import { Link } from "react-scroll";
import SkillHire from './skillshire';



function landingPage(){
    return(
        <div className="landing-body">
            <div className="text-center avatar">
            <img src={avatar} alt="aitik" className="landingPage-avatar"></img>
            <h3 className="landingPage-heading mt-4">Hey, I am</h3>
            <p className="landingPage-name">Aitik Dandapat</p>
            </div>
            <div className="text-center p-3">
            <Typed className="typedContent"
                strings={[
                    'I am a Student',
                    'I am a Android Application Developer',
                    'I am a Front-End Developer',
                    'I am an Open Source Enthusiast',
                ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                </div>
            <p className="landingPage-subheading text-center px-3">I am a Software Developer who is passionate about building</p>
            <p className="landingPage-subheading text-center px-3">amazing softwares and applications to help people across the world.</p>
            <p className="landingPage-subheading text-center px-3">I write code to build useful stuff !</p>
            <br></br>
            <div className="socialIcons col-md-4 m-auto pb-5">
            <div className="rounded-social-buttons text-center">
                <a href="https://www.facebook.com/aitik.dandapat.3" target="_blank" rel="noreferrer"><span className="circle-button facebook"></span></a>
                <a href="https://twitter.com/AitikDandapat"  target="_blank" rel="noreferrer"><span className="circle-button twitter"></span></a>
                <a href="https://www.linkedin.com/in/aitik-dandapat-b03395184/"  target="_blank" rel="noreferrer"><span className="circle-button linkedin"></span></a>
                <a href="https://www.instagram.com/i_tick_/"  target="_blank" rel="noreferrer"><span className="circle-button instagram"></span></a>
                <a href="https://github.com/i-tick"  target="_blank" rel="noreferrer"><span className="circle-button github"></span></a>
            </div>
            </div>

            <div className="p-4 downArrows">
            <div className="circle">
            <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}>
                <i className="fas fa-angle-double-down"></i></Link>
            </div>
            </div>

           
            <About/>
            <Services/>
            <Experience/>
            <HireMe/>
            {/* <Volunteer/> */}
            {/* <SkillHire/> */}
            <Education/>
            <Collab/>
            <Project/>
            <Footer/>
        </div>
    )
}

export default landingPage;