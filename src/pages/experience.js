import React from 'react'
import './styles.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';



function experience(){
    return(
		<div className="experience-section">
      <p className="experiencePage-name text-center pt-5">EXPERIENCE</p>
      <p className="experiencePage-subheading text-center">A variety of experience across different organizations</p>
      <VerticalTimeline className="mt-5">
      <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Jun'22 - Jul'24"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
			>
				<h3 className="vertical-timeline-element-title">Software Engineer II</h3>
				<h4 className="vertical-timeline-element-subtitle">Red Hat</h4>
				<p>
				● Spearheaded the transition of Jira and Confluence instances, overcoming key obstacles and automating 90% of data migration
 for plugins, cutting manual work by 50%.<br/>
● Built a custom plugin with scripted fields to fulfill security standards, enhancing data precision by 30%.
<br/>
● Engineered and deployed more than five unique Jira plugins in Java and Groovy, elevating system capabilities and raising user
 satisfaction by 25%.<br/>

● Designed automation protocols that decreased manual workload by 40% and lifted team efficiency by 15%.<br/>
● Constructed and managed over 10 RESTful APIs to enable smooth third-party integration, streamlining instance migration, and
 boost data consistency by 35%.

				</p>
  			</VerticalTimelineElement>
      <VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'white', color: 'black' }}
				contentArrowStyle={{ borderRight: '7px solid  white' }}
				date="Jun'21 - Aug'21"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
			>
				<h3 className="vertical-timeline-element-title">Software Engineer - Intern</h3>
				<h4 className="vertical-timeline-element-subtitle">Red Hat</h4>
				<p>
				● Linked Jira with open-source Bugzilla, accelerating bug tracking by 20% and enhancing cross-platform communication by 30%.<br/>
● Delivered expert technical support and troubleshooting for Bugzilla, achieving 30% faster issue resolution and increasing system uptime to 99.9%.<br/>
● Collaborated with the QA team, driving a 15% decrease in post-release defects and securing high-quality software deployments.
				</p>
  			</VerticalTimelineElement>
    <VerticalTimelineElement
	iconStyle={{ background: '#f5aa09', color: '#fff' }}
	icon={<WorkIcon/>}

    
  />
    
</VerticalTimeline>
		</div>
    )
}
export default experience