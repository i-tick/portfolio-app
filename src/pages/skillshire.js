import React from 'react'
import './styles.css'

function skillhire(){
    return(
        <div className="collab">
            <div className="container">
            <div className="row">
                <div className="col-md-10">
                <h1 className="hiringPage-subheading  p-5"> May I help you with my skills ?</h1>
                </div>
                <div className="col-md-2 p-5">
                <a href="https://www.linkedin.com/in/aitik-dandapat-b03395184/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-lg"><span className="hireButton"><a href="mailto:aitik2000@gamil.com" style={{color:"black" , textDecoration:"none" , cursor:"pointer"}}>HIRE ME </a></span></button></a>
                </div>
            </div>
        </div> 
        </div>
    )
}

export default skillhire