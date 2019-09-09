import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeading from '../../components/Headings/PageHeading';
import carpentry from '../../assets/icons/carpentry.svg';
import concrete from '../../assets/icons/concrete.svg';
import designBuild from '../../assets/icons/design_build.svg';
import drywallFraming from '../../assets/icons/drywall_framing.svg';
import electrical from '../../assets/icons/electrical.svg';
import flooring from '../../assets/icons/flooring.svg';
import landscaping from '../../assets/icons/landscaping.svg';
import maintainRepair from '../../assets/icons/maintain_repair.svg';
import mechanical from '../../assets/icons/mechanical.svg';
import newConstruction from '../../assets/icons/new_construction.svg';
import paint from '../../assets/icons/paint.svg';
import projectManagement from '../../assets/icons/project_management.svg';
import roofingSiding from '../../assets/icons/roofing_siding.svg';
import siteSupervision from '../../assets/icons/site_supervision.svg';
import tenantFitouts from '../../assets/icons/tenant_fitouts.svg';
import windowsDoors from '../../assets/icons/windows_doors.svg';

// import './Services.css'

import ServiceCard from '../../components/Card/ServiceCard';

const Services = props => {
  useEffect(() => {
    if (props.activePage !== "Services") {
      props.changeActivePage('Services');
    }
  }, []);
  return (
    <div className="services__page">
      <div className="services__page--content">
        <PageHeading heading="" />
          <div>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={designBuild} alt="illustrative icon of bricks" /> <div className="bottom-left"> Desgin & build </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={newConstruction} alt="illustrative icon of drawing compass" /> <div className="bottom-left"> New construction </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={tenantFitouts} alt="illustrative icon of helmet" /> <div className="bottom-left"> Tenant fit-outs </div> </ServiceCard> </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={projectManagement} alt="illustrative icon of a manager and a cog wheel" /> <div className="bottom-left"> Project management </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={siteSupervision} alt="illustrative icon of construction vest" /> <div className="bottom-left"> Site supervision </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={maintainRepair} alt="illustrative icon of wrench" /> <div className="bottom-left"> Maintenance & repairs </div> </ServiceCard> </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={carpentry}  alt="illustrative icon of concrete tiles"/> <div className="bottom-left"> Carpentry </div>  </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={drywallFraming}  alt="illustrative icon of concrete tiles"/> <div className="bottom-left"> Drywall & framing </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={concrete}  alt="illustrative icon of concrete tiles"/> <div className="bottom-left"> Concrete Work </div>  </ServiceCard> </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={roofingSiding}  alt="illustrative icon of concrete tiles"/><div className="bottom-left"> Roofing & siding </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={paint} alt="illustrative icon of a rolling paintbrush" /> <div className="bottom-left"> Painting </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={mechanical} alt="illustrative icon of drill" /> <div className="bottom-left"> Mechanical </div>  </ServiceCard> </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={electrical} alt="illustrative icon of electrical panel" /> <div className="bottom-left"> Electrical </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={flooring} alt="illustrative icon of floor tiles" /> <div className="bottom-left"> Flooring </div> </ServiceCard> </Col>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={windowsDoors} alt="illustrative icon of drill" /> <div className="bottom-left"> Windows & doors </div>  </ServiceCard> </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}> <ServiceCard> <img className="top-right" src={landscaping}  alt="illustrative icon of tractor" /><div className="bottom-left"> Landscaping </div> </ServiceCard> </Col>
            </Row>
          </div>
        </div>
    </div>
  );
}

export default Services;