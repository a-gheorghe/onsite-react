import React from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import Card from '../../components/Card/Card';
import CardHeading from '../../components/Headings/CardHeading';
import './About.css'

const About = props => (
  <div className="about__page">
    <PageHeading heading="Meet the team." />
    <Card className="about__card">
      <div className="container about__mission">
      <div className="row">
          <CardHeading className="about__subheading--large" subheading="Our Mission" />
          <div className="col-sm-6 about__mission--picture">
            Picture
          </div>
          <div className="col-sm-6">
            <CardHeading className="about__subheading--small" subheading="Our Mission -S" />
            With more than 30 years combined experience, our team has been delivering on our promise to build unique designs to retailers all over Canada. We pride ourselves on never delivering anything less than perfection to our clients.
            We apply sound principles of construction using advanced techniques to deliver spaces that inspire. We look forward to working with you on your next project regardless of the size or scope.
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default About;
