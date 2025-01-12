import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Group from '@material-ui/icons/Group';



function volunteerexp(){
    return(
		<div className="experience-section">
      <p className="experiencePage-name text-center pt-5">VOLUNTEER EXPERIENCE</p>
      <p className="experiencePage-subheading text-center">Leadership quality and co-ciricular activities through various clubs.</p>
      <VerticalTimeline className="mt-5">
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Aug'20 - Aug'21"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Lead</h3>
				<h4 className="vertical-timeline-element-subtitle">Google Developer Student Clubs, VSSUT</h4>
				
  			</VerticalTimelineElement>


        <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Aug'20 - Aug'21"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Event Lead</h3>
				<h4 className="vertical-timeline-element-subtitle">CodeChef Chapter, VSSUT</h4>
				
  			</VerticalTimelineElement>

        <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="May'21"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Project Mentor</h3>
				<h4 className="vertical-timeline-element-subtitle">GSSoC'21</h4>
				
  			</VerticalTimelineElement>
        <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Oct'20 - Jan'21"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Facilitator</h3>
				<h4 className="vertical-timeline-element-subtitle">30 Days of Cloud (Google Cloud) & Android Study Jam (Google Developers)</h4>
				
  			</VerticalTimelineElement>

        <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Jan'19 - May'22"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Technical Core Team Member</h3>
				<h4 className="vertical-timeline-element-subtitle">Robotics Society, VSSUT</h4>
				
  			</VerticalTimelineElement>

        <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Jan'19 - May'22"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<Group/>}
			>
				<h3 className="vertical-timeline-element-title">Flutter Devlopment Lead</h3>
				<h4 className="vertical-timeline-element-subtitle">Enigma-The Coding Club, VSSUT</h4>
				
  			</VerticalTimelineElement>


    <VerticalTimelineElement
	iconStyle={{ background: '#f5aa09', color: '#fff' }}
	icon={<Group/>}

    
  />
    
</VerticalTimeline>
		</div>
    )
}
export default volunteerexp;