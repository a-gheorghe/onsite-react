import React from 'react';
import Card from '../../components/Card/Card';
import './PastProjects.css';
import classnames from 'classnames';
import timhortons from '../../assets/logo_tim-hortons.svg';
import rexall from '../../assets/logo_rexall.svg';
import starbucks from '../../assets/logo_starbucks.svg';
import carls from '../../assets/logo_carls-jr.svg'
import brampton from '../../assets/logo_brampton.svg';
import arrow from '../../assets/arrow.svg';

import { Link } from 'react-router-dom';

const PastProjects = props => (
  <Card className={classnames("past-projects__card container-fluid", props.className)}>
    <div className="row past-projects__text">
      <div className="col-xs-12 col-sm-6">
        <span> Constructed projects for: </span>
      </div>
      <div className="col-xs-12 col-sm-6 text-right d-none d-md-block view-projects">
        <Link to="/gallery">
          View Project Gallery
          <img src={arrow} alt="arrow to see projects" />
        </Link>
      </div>
    </div>
    <div className="row justify-content-around img-holder">
        <div className="col-md-2 col-xs-12 text-center">
          <Link to="/projects">
            <img alt="Tim Hortons" src={timhortons} className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-2 col-xs-12 text-center">
          <Link to="/projects">
            <img  alt="AltText" src={rexall} className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-2 col-xs-12 text-center">
          <Link to="/projects">
            <img src={starbucks} alt="Starbucks" className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-2 col-xs-12 text-center">
          <Link to="/projects">
            <img alt="City of Brampton" src={brampton} className="img-fluid" />
          </Link>
        </div>
        <div className="col-md-2 col-xs-12 text-center">
          <Link to="/projects">
            <img alt="Carl Juniors" src={carls} className="img-fluid" />
          </Link>
        </div>
        <div className="col-xs-12 text-center d-md-none view-projects">
          <Link to="/gallery">
            View Project Gallery
            <img src={arrow} alt="arrow to see projects" />
          </Link>
        </div>
    </div>
  </Card>
)

export default PastProjects;
