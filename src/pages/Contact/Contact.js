import React, { useEffect } from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import CardHeading from '../../components/Headings/CardHeading';
import ContactCard from '../../components/Card/ContactCard';
import Map from '../../components/Map/Map';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './Contact.css'

const Contact = props => {

  useEffect(() => {
    if (props.activePage !== "Contact") {
      props.changeActivePage('Contact');
    }
  }, []);
  
  return (
    <div className="contact__page">
      <div className="contact__page--content">
        <PageHeading heading="" />
        <Row noGutters>
          <Col xs={12} lg={6}>
            <ContactCard className="contact__card--headquarters">
              <CardHeading subheading="Office" />
                <div className="contact__card--text">
                  <div>
                    <div> 83 Galaxy Blvd </div>
                    <div>Toronto, Ontadssdsdfffsdfsrio, Canada </div>
                  </div>
                  <div>
                    <div>Monday to Friday</div>
                    <div>9:00am to 5:00pm</div>
                  </div>
                </div>
              </ContactCard>
          </Col>
          <Col xs={12} lg={6}>
            <ContactCard className="contact__card--contact-us">
              <CardHeading subheading="Contact Us" />
                <div className="contact__card--text">
                  <div>
                    <div><a href="tel:1-416-654-6000">+1.416.654.6000</a></div>
                    <div> <a href="mailto:info@onsitegc.ca" target="_top">info@onsitegc.ca</a></div>
                  </div>
                  <div>
                    <div> Available 24 hours a day </div>
                    <div>7 days a week</div>
                  </div>
                </div>
            </ContactCard>
          </Col>
        </Row>
        <Map />
      </div>
    </div>
  );
}

export default Contact;
