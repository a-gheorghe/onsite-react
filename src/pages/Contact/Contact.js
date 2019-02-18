import React from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import ContactCard from '../../components/Card/ContactCard';
import Map from '../../components/Map/Map';
// import Card from '../../components/Card/Card';
import './Contact.css'

const Contact = props => (

    <div className="contact__page">
     <PageHeading heading="Get in touch." />
      <div className="row no-gutters">
        <div className="col-12 col-lg-6">
          <ContactCard className="contact__card--headquarters" />
        </div>
        <div className="col-12 col-lg-6">
          <ContactCard className="contact__card--contact-us"/>
        </div>
      </div>
      <Map />
     </div>
);

export default Contact;
