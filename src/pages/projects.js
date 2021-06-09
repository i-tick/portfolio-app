import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function projectPage(){
    return(
        <div className="projectPage">
            <h1 className="Project-heading text-center pt-3">Projects</h1>
            <p className="project-subheading text-center">The application which I have developed using my knowledge</p>
            <div className="">
                <div className="row p-5 m-auto ">
                <div className="projectcard dual">
                    <div className="header">
                    <h3>Crypto Dshboard</h3><br></br>
                    <h5>Cryptocurrency Dashboard lets you monitor the top 100 currencies based on market cap size. It uses the Gecko Coin API to fetch crypto data.
                    </h5>
                    <h6>TECH  STACK - NODE JS , REACT.JS, CHART.JS </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/i-tick/Crypto-Dashboard"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        disabled={true}
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>Human Following Bot</h3><br></br>
                    <h5>Co-Constructed an automated bot which follows a human using holonomic motion maintaining a constant distance of 2-3 meter  
                    </h5>
                    <h6>TECH  STACK - OpenCV, Arduino, ZigBee, Holonomic Motion Planning </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        disabled={true}
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        href="https://www.youtube.com/watch?v=eYvyqKeLu0Q"
                        startIcon={<LanguageIcon />}
                        target="_blank"
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>Go Corona</h3><br></br>
                    <h5>Built an Android Chabot (syndrome mapping and self-assessment) which was connected to smart wrist band (for contact tracing).
                    </h5>
                    <h6>TECH  STACK - Android Studio, IBM Watson, GCP, GSM Module, IMU Sensors</h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/i-tick/BitLords_HackNitr"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        disabled={true}
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>

                <div className="projectcard dual">
                    <div className="header">
                    <h3>Face Mask & Social Distance Detection</h3><br></br>
                    <h5>Created a Face Mask Detection Model and an automated alarm system for detecting that social distancing is followed or not. 
                    </h5>
                    <h6>TECH  STACK - IBM Watson Studio, IBM Visual Recognition, YOLO </h6>
                    </div>
                    <div className="description">
                    <Button
                        variant="contained"
                        color="default"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/i-tick/IBM-PROJECT"
                        target="_blank"
                    >
                        GitHub
                    </Button>{" "}
                    <Button
                        variant="contained"
                        color="default"
                        disabled={true}
                        startIcon={<LanguageIcon />}
                    >
                        Demo
                    </Button>
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}

export default projectPage