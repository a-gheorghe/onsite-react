import React from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import Card from '../../components/Card/Card';
import CardHeading from '../../components/Headings/CardHeading';
import Divider from '../../components/Divider/Divider';
import Employee from '../../components/Employee/Employee';
import PastProjects from '../../components/PastProjects/PastProjects';
import './About.css'
import guy1 from '../../assets/guy1.png';
import guy2 from '../../assets/guy2.png';
import guy3 from '../../assets/guy3.png';
import guy4 from '../../assets/guy4.png';
import guy5 from '../../assets/guy5.png';
import folder from '../../assets/folder.jpg';

const headshots = [
  guy1, guy2, guy3, guy4, guy5
]

const About = props => (
  <div className="about__page">
    <PageHeading heading="Meet the team." />
    <Card className="about__card">
      <div className="about__mission">
      <CardHeading className="about__subheading--large" subheading="Our Mission" />
      <div className="row">
          <div className="col-xs-12 col-md-3 about__mission--picture text-center">
            <img src={folder} alt="group of business people looking at a laptop" />
          </div>
          <div className="col-xs-12 col-md-9 about__mission--container">
            <CardHeading className="about__subheading--small" subheading="Our Mission" />
            <div className="about__mission--text">
              <div>With more than 30 years combined experience, our team has been delivering on our promise to build unique designs to retailers all over Canada. We pride ourselves on never delivering anything less than perfection to our clients.</div>
              <div>We apply sound principles of construction using advanced techniques to deliver spaces that inspire. We look forward to working with you on your next project regardless of the size or scope.</div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <CardHeading subheading="The Team" />
      <div className="team--container">
        {headshots.map(photo => (
          <Employee photoPath={photo} />
        ))}
        </div>
    </Card>
    <PastProjects className="about__past-projects"/>
  </div>
);

export default About;
