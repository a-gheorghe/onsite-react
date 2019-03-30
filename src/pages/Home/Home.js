import React from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import Card from '../../components/Card/Card';
import InvisibleCard from '../../components/Card/InvisibleCard';
import CardHeading from '../../components/Headings/CardHeading';
import { Link } from 'react-router-dom';

import './Home.css'
import rexallVideo from '../../assets/video-2-780.mp4';
import arrow from '../../assets/arrow.svg';
import rexall2 from '../../assets/rexall/rexall2.jpg';



const Home = props => (
  <div>
    <div className="row no-gutters">
      <div className="col-12">
        <div className="video-container">
          <video id="rexall-video" autoPlay loop muted playsInline>
            <source src={rexallVideo} type="video/mp4" />
          </video>
          <div className="video__text">
            <PageHeading light heading="On Time, On Budget, On-Site." />
          </div>
        </div>
      </div>
      </div>
      <div className="home__page">
        <Card className="home__card">
          <div className="row no-gutters">
            <div className="col-12 col-md-6 d-md-flex flex-column justify-content-between">
              <CardHeading subheading="Our Firm" />
              <div className="row no-gutters d-none d-md-block">
                <div className="col-12 margin-top-20">
                  <Link to="/services">
                    Our services
                    <img className="arrow" src={arrow} alt="arrow to services page" />
                  </Link>
                </div>
                <div className="col-12 margin-top-20">
                  <Link to="/contact">
                    Contact us
                    <img className="arrow" src={arrow} alt="arrow to contact us pageheading" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="home__firm--text">
                <div>
                  At On-Site Solutions we take pride in understanding our clients needs, and are
                  keen on producing results that are nothing short of outstanding. We believe in having an
                  open book policy with our clients, and take a realistic approach from start to finish.
                </div>
                <div>
                  Our team specializes in Retail stores, Restaurants, Healthcare Facilities, Corporate Offices,
                  Coffee Shops, Dental Offices, Leasehold Improvements and more. From original designs to complete renovations,
                  we have you covered. Take a look at our project gallery and experience the beauty of design.
                </div>
                <div className="row no-gutters d-md-none">
                  <div className="col-12">
                    <Link to="/services">
                      Our services
                      <img className="arrow" src={arrow} alt="arrow to services page" />
                    </Link>
                  </div>
                  <div className="col-12">
                    <Link to="/contact">
                      Contact us
                      <img className="arrow" src={arrow} alt="arrow to contact us pageheading" />
                    </Link>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </Card>
        <InvisibleCard>
          <div className="row no-gutters">
            <div className="col-12 col-md-6">
              <CardHeading subheading="Latest projects"/>
            </div>
            <div className="col-md-6 d-none d-md-block text-right">
              <Link to="/gallery">
                See project gallery
                <img className="arrow" src={arrow} alt="arrow to gallery" />
              </Link>
            </div>
          </div>
        </InvisibleCard>
        <InvisibleCard>
          <img src={rexall2} alt="rexall" />
        </InvisibleCard>
        <InvisibleCard>
          <img src={rexall2} alt="rexall" />
        </InvisibleCard>
      </div>
  </div>
);

export default Home;
