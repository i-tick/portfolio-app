import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';

function education(){
    return(
		<div className="experience-section">
      <p className="experiencePage-name text-center pt-5">EDUCATION</p>
      <p className="experiencePage-subheading text-center">The stuff I am made up of</p>
      <VerticalTimeline className="mt-5">
	  <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Aug'24 - Dec'25"
				iconStyle={{ background: '#f5aa09', color: '#fff' }}
				icon={<SchoolIcon/>}
			>
				<h3 className="vertical-timeline-element-title">M.S. <br></br> Computer Science</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="https://stonybrook.edu/"  target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'#f5aa09'}}>State University of New York - Stony Brook</a> New York, US</h4>
				{/* <p>
				Involved in performing analytics of their data to get meaningful results, end to end testing, platform releases, UI refactoring with backend API's.  
				</p> */}
  			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Aug'18 - May'22"
				iconStyle={{ background: '#f5aa09', color: '#fff' }}
				icon={<SchoolIcon/>}
			>
				<h3 className="vertical-timeline-element-title">B. Tech <br></br> Computer Science & Engineering</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="https://vssut.ac.in/"  target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'#f5aa09'}}>Veer Surendra Sai University of Technology</a> Odisha, India</h4>
				{/* <p>
				Involved in performing analytics of their data to get meaningful results, end to end testing, platform releases, UI refactoring with backend API's.  
				</p> */}
  			</VerticalTimelineElement>
		<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Apr'18"
				iconStyle={{ background: '#f5aa09', color: '#fff' }}
				icon={<SchoolIcon/>}

				>
				<h3 className="vertical-timeline-element-title">Intermediate <br></br> Computer Science</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="http://www.aecs1jaduguda.nic.in/"  target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'#f5aa09'}}>Atomic Energy Central School - 1 </a> Jadugoda, India</h4>
				{/* <p>
        Involved in developing admin-side panel of our AI platform, refactoring UI/UX, implemented new features for users. 
				</p> */}
			</VerticalTimelineElement>


			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Apr'16"
				iconStyle={{ background: '#f5aa09', color: '#fff' }}
				icon={<SchoolIcon/>}

				>
				<h3 className="vertical-timeline-element-title">Matriculation <br></br>Science</h3>
				<h4 className="vertical-timeline-element-subtitle"><a href="http://www.aecsnarwapahar.nic.in/"  target="_blank" rel="noopener noreferrer" style={{textDecoration:'none',color:'#f5aa09'}}>Atomic Energy Central School </a> Narwapahar, India</h4>
				{/* <p>
        Involved in developing admin-side panel of our AI platform, refactoring UI/UX, implemented new features for users. 
				</p> */}
			</VerticalTimelineElement>


			

  <VerticalTimelineElement
	iconStyle={{ background: '#f5aa09', color: '#fff' }}
	icon={<SchoolIcon/>}

    
  />
</VerticalTimeline>
		</div>
    )
}
export default education