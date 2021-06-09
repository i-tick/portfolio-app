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
				date="May'20 - Jul'20"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
			>
				<h3 className="vertical-timeline-element-title">Artificial Intelligence Trainee</h3>
				<h4 className="vertical-timeline-element-subtitle">Alloft Solutions in partner with IBM</h4>
				<p>
				Implemented Artificial Intelligence like IBM Watson Studio, Watson Chatbot, Visual Recognition model, etc.
				</p>
  			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Jan'20 - Jun'20"
        iconStyle={{ background: '#f5aa09', color: '#fff' }}
        icon={<WorkIcon/>}
				>
				<h3 className="vertical-timeline-element-title">Android Developer Intern </h3>
				<h4 className="vertical-timeline-element-subtitle">Android Sarchak & Electricals Pvt. Ltd</h4>
				<p>
        Built and published an app on Google Playstore for Ecommerce Hyperlocal Application in Flutter for a startup named
DUCKHAWK. Published three apps for Admin, Seller and Customer respectively.
				</p>
			</VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Jun'20 - Jul'20"
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Data Science Intern </h3>
    <h4 className="vertical-timeline-element-subtitle">Consulting & Analytics Club, IIT Guwahati</h4>
    <p>
    Developed scrapers in Python for extracting data from more than 50 websites of different kinds using Web Scraping tools such as Scrapy and Selenium along with Data cleaning
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May'19 - Jun'19"
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Python Development Intern </h3>
    <h4 className="vertical-timeline-element-subtitle">C-DAC, Pune</h4>
    <p>
    Implemented Basic Machine Learning Models (Regression, Decision Tree, Random Forest, etc.) The training
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="May'19 - Jun'19"
    iconStyle={{ background: '#f5aa09', color: '#fff' }}
    icon={<WorkIcon/>}
  >
  <h3 className="vertical-timeline-element-title">Android Development Trainee </h3>
    <h4 className="vertical-timeline-element-subtitle">Internshala Trainings</h4>
    <p>
    Built an Food Runner App using higher Order Functionalities like API requests, volleyball, etc.
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