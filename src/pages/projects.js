import React from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';


function projectPage() {
    return (
        <div className="projectPage">
            <h1 className="Project-heading text-center pt-3">Projects</h1>
            <p className="project-subheading text-center">The application which I have developed using my knowledge</p>
            <p className="project-subheading text-center">For more move on to my <a href="https://github.com/i-tick" target="_blank"> Github</a></p>
            <div className="">
                <div className="row p-5 m-auto ">

                <div className="projectcard dual">
                        <div className="header">
                            <h3>Face Mask & Social Distance Detection</h3><br></br>
                            <h5>Developed a computer vision-based system to detect face mask compliance and social distancing violations in real time. Trained a model using IBM Watson Studio and IBM Visual Recognition, achieving high accuracy in mask identification & Implemented YOLO object detection to recognize individuals and measure distances between them.
                            </h5>
                            <h6>TECH  STACK - Python, IBM Watson Studio, IBM Visual Recognition, YOLO </h6>
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

                    <div className="projectcard dual">
                        <div className="header">
                            <h3>TEDS-A Data Analysis and Processing</h3><br></br>
                            <h5>Implemented Hadoop and Spark programs to analyze and process the Treatment Episode Data Set (TEDS-A) over 20 years of admission data, utilizing MapReduce and Spark frameworks to extract insights on substance use disorder treatment admissions, demonstrating proficiency in big data processing and analysis techniques.</h5>
                
                            <h6>TECH  STACK - Hadoop, Apache Spark, Java, Python </h6>
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
                            <h3>Smart Assistant for Syndrome Mapping & Contact Tracing</h3><br></br>
                            <h5>Developed an Android-based chatbot for syndrome mapping and self-assessment & Integrated with IBM Watson to enable conversational AI for user interaction and symptom analysis. Used smart wristband equipped with IMU sensors for real-time health monitoring and contact tracing.
                            <br></br>
                            
                            </h5>
                            <h6>TECH  STACK - Android Studio, Flutter, IBM Watson, GCP, GSM Module, IMU Sensors</h6>
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
                            <h3>Crypto Dshboard</h3><br></br>
                            <h5>Designed and developed a responsive cryptocurrency dashboard to track real-time market data and portfolio performance using React.js and MongoDB, integrating REST APIs for live updates and implementing user authentication for personalized experiences, showcasing expertise in full-stack development.
                            <br></br>
                            <br></br><br></br>
                            </h5>
                            <h6>TECH  STACK - NODE JS, REACT.JS, CHART.JS, API </h6>
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
                            <h3>Topic Modeling and Sentiment Analysis in r/AskHistorians</h3><br></br>
                            <h5>Analyzed 200,000 Reddit posts from r/AskHistorians using advanced NLP techniques such as LDA and BERTopic, improving topic coherence by 47% and revealing emotional trends in discussions, enhancing historical discourse understanding.</h5>
                            <h6>TECH  STACK - NLP, LDA, BERTopic, Python, Nltk, Pandas</h6>
                        </div>
                        <div className="description">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/i-tick"
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
                            <h3>Your Guide</h3><br></br>
                            <h5>Constructed a robust web application empowering users to effortlessly apply for job opportunities, actively participate in competitive contests, and knowledge enhancement through a vast library of 500 e-books and 1000 tutorials.
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                            </h5>
                            <h6>TECH  STACK - React.jS, Material UI, Postman, Node.js </h6>
                        </div>
                        <div className="description">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/i-tick"
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
                            <h3>Distributed Banking System Using Linear PBFT</h3><br></br>
                            <h5>Built a scalable Byzantine Fault Tolerant system using Linear PBFT, processing 200+ secure transactions across 7-node clusters with linear communication complexity under failure scenarios.
                            <br></br>
                            <br></br>
                            <br></br>
                            </h5>
                            <h6>TECH  STACK - Go Lang, Distributed Systems, PBFT </h6>
                        </div>
                        <div className="description">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/i-tick"
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
                            <h3>Partitioned Distributed Transaction Processing with Paxos and 2PC</h3><br></br>
                            <h5>Designed a fault-tolerant transaction processing system partitioning 3,000 data items across 9 servers in 3 clusters, integrating Paxos for intra-shard consensus and two-phase commit for cross-shard transactions to ensure data consistency.</h5>
                            <h6>TECH  STACK - Go Lang, Distributed Systems, Paxos, 2PC </h6>
                        </div>
                        <div className="description">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/i-tick"
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
                            <h3>Fault-Tolerant Distributed Banking System Using Modified Paxos</h3><br></br>
                            <h5>Developed a distributed banking system with fault tolerance, implementing a modified Paxos protocol to synchronize transaction logs across 5 servers, handling 100+ transactions and ensuring consistent
                            operation during node failures.</h5>
                            <h6>TECH  STACK - Go Lang, Distributed Systems, Paxos </h6>
                        </div>
                        <div className="description">
                            <Button
                                variant="contained"
                                color="default"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/i-tick"
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