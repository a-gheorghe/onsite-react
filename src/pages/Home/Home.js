import React, { useEffect } from 'react';
import PageHeading from '../../components/Headings/PageHeading';
import Divider from '../../components/Divider/Divider';
import Card from '../../components/Card/Card';
import InvisibleCard from '../../components/Card/InvisibleCard';
import DescriptionCard from '../../components/Card/DescriptionCard';
import CardHeading from '../../components/Headings/CardHeading';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rexallVideo from '../../assets/landing-page-vid.mp4';
import arrow from '../../assets/arrow.svg';
import rexall9 from '../../assets/gallery_images/commercial/rexall/originals/rexall9.jpg';
import want3 from '../../assets/gallery_images/commercial/want/originals/want3.jpg';


const Home = props => {
  // if coming from external site, want to still keep navigation styling
  useEffect(() => {
    if (props.activePage !== "Home") {
      props.changeActivePage('Home');
    }
  }, []);

  const onClickHandler = page => {
    if (props.closeSideBar) {
      props.closeSideBar();
    }
    props.changeActivePage(page)
  }

  return (
    <React.Fragment>
    <div className="video-wrapper">
      <video id="rexall-vid" src={rexallVideo} autoPlay loop muted playsInline />
      <div className="video-overlay" />
      <div className="video-text">
        <PageHeading light heading="On time, On Budget, On-Site" />
      </div>
    </div>
    <div className="home__page">
      <div className="home__page--content">
        <PageHeading className="home__heading--novideo" heading="On-Site Solutions" />
        <Card className="card__ourfirm">
          <Row noGutters>
            <Col xs={12} md={6} className="d-md-flex flex-column justify-content-between">
              <CardHeading subheading="About Us" />
            </Col>
            <Col xs={12} md={6}>
              <div className="home__firm--text">
                <div>
                  On-Site Solutions offers general contracting services all over GTA.
                  Years of experience, deep knowledge in the construction field and a talented
                  team of contractors give us opportunity to take any construction challenge with a promise
                  to deliver quality building work.
                </div>
                <div className="margin-top-20">
                  Our team specializes in Retail stores, Restaurants, Healthcare Facilities,
                  Corporate Offices, Coffee Shops, Dental Offices, Leasehold Improvements and more. 
                </div>
                <div className="margin-top-20">
                  From concept to completion, we manage the entire process, so you can focus on running
                  your business. With using the latest standards in the industry, we realize your vision -
                  on time, and on budget. Take a look at our project gallery and experience the beauty of design
                  for your next project regardless of the size or scope.
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <InvisibleCard className="card--latest-projects">
          <Row noGutters>
            <Col xs={12} md={6}>
              <CardHeading subheading="Latest projects" />
            </Col>
            <Col md={6} className="d-none d-md-block text-right" onClick={() => onClickHandler('Gallery')}>
              <Link to="/gallery">
                See project gallery
                <img className="arrow" src={arrow} alt="arrow to gallery" />
              </Link>
            </Col>
          </Row>
        </InvisibleCard>
        <Row>
          <Col xs={12} sm={6}>
            <img className="recent-project-img" src={rexall9} alt="rexall" />
            <InvisibleCard className="recent-project-description">
              <DescriptionCard>
                <span className="text-red text-bold"> Rexall, Pharma Plus </span>
                <div className="text-bold margin-top-15 line-height-16">
                  Bronte Village <br/> Oakville, Ontario
                </div>
                <Divider className="home__divider"/>
                <Link to="/gallery" onClick={() => onClickHandler('Gallery')}>
                  View Project
                  <img className="arrow" src={arrow} alt="arrow to gallery" />
                </Link>
              </DescriptionCard>
            </InvisibleCard>
          </Col>
          <Col xs={12} sm={6}>
            <img className="recent-project-img" src={want3} alt="renovation" />
            <InvisibleCard className="recent-project-description">
              <DescriptionCard>
                <span className="text-red text-bold"> Wantapothecar </span>
                <div className="text-bold margin-top-15 line-height-16">
                  2579 Yonge St. <br/> Toronto, Ontario
                </div>
                <Divider className="home__divider"/>
                <Link to="/gallery" onClick={() => onClickHandler('Gallery')}>
                  View Project
                  <img className="arrow" src={arrow} alt="arrow to gallery" />
                </Link>
              </DescriptionCard>
            </InvisibleCard>
          </Col>
        </Row>
      </div>
    </div>
  </React.Fragment>
  );
}

export default Home;
