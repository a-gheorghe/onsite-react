import React, { useEffect } from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import Card from '../../components/Card/Card';
import CardHeading from '../../components/Headings/CardHeading';
import Divider from '../../components/Divider/Divider';
import Employee from '../../components/Employee/Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import './About.css'
import Karam from '../../assets/guy1.png';
import Marco from '../../assets/guy2.png';
import David from '../../assets/guy3.png';
import Manuel from '../../assets/guy4.png';
import folder from '../../assets/folder.jpg';

const headshots = [
  { photo: Karam,
    name: 'Karam Lazar',
    position: 'Construction Manager / Health and Safety'
  },
  {
    photo: Marco,
    name: 'Marco Paniccia',
    position: 'Senior Site Supervisor'
  },
  {
    photo: David,
    name: 'David Tavares',
    position: 'Site Supervisor'
  },
  {
    photo: Manuel,
    name: 'Manuel Faria',
    position: 'Technician'
  }
]

const About = (props) => {
  useEffect(() => {
    if (props.activePage !== "About") {
      props.changeActivePage('About');
    }
  }, []);
  return (
    <div className="about__page">
      <div className="about__page--content">
        <PageHeading heading="" />
        <Card className="about__card">
          <div className="about__mission">
            <CardHeading className="about__subheading--large" subheading="Our Mission" />
            <Row>
              <Col xs={12} md={3} className="about__mission--picture text-center">
                <img src={folder} alt="on-site solutions folder" />
              </Col>
              <Col xs={12} md={9} className="about__mission--container">
                <CardHeading className="about__subheading--small" subheading="Our Mission" />
                <div className="about__mission--text">
                  <div>At On-Site Solutions we take pride in understanding our customer’s needs and are
                    keen on delivering highest level of quality construction services. We believe in having
                    an open book policy with our clients and pride ourselves on never delivering anything less
                    than perfection to them.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Divider />
          <CardHeading subheading="The Team" />
          <div className="team--container">
            {headshots.map(person => (
              <Employee photoPath={person.photo} key={person.photo} name={person.name} position={person.position} />
            ))}
            </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
