import React from 'react'
import './styles.css'
import aboutImage from '../aitik.jpeg'
import resume from '../Aitik Resume.pdf'

function about(){
    return(
        <div className="aboutPage mt-5" id="about">
            <div className="container">
            <p className="experiencePage-name text-center pt-4">ABOUT ME</p>
                <div className="row">
                    <div className="col-md-3 my-2">
                        <img src={aboutImage} alt="AkshaySharma008-avatar" className="col-md-12 about-avatar"/>
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
	                    Okay, so people call me Aitik. I am an Open-Source geek and adventure sports addict and I like to explore as much as I can - mountains, valleys, deserts, and my life. My body consists of HTML, CSS & JavaScript, which defines me! I am also keen toward Android Applications Development. And finally Im a Flutter Developer too.  <br></br><br></br>
                        I'm a upcoming Software Engineer and a highly motivated, passionate hard-core web developer with experience in developing web/android applications and my passion is to build and contribute to products that have a potential to create a huge positive impact on the world.
                        <br></br><br></br>
                        I conduct classes, seminars, webinars, and take personal mentoring sessions to help students technologically & otherwise. I love to contribute to the community and help others and for that and have been working as a Events Lead of <a href="https://www.codechef.com/campus_chapter/VSSUT_Chapter" target="_blank" rel="noreferrer">CodeChef VSSUT Chapter</a> and <a href="https://dsc.community.dev/veer-surendra-sai-university-of-technology/" target="_blank" rel="noreferrer">Google Developer Students Club Lead</a> at my Campus.
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