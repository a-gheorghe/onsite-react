import React from 'react';
import Card from '../../components/Card/Card';
import './PastProjects.css';
import timhortons from '../../assets/logo_tim-hortons.svg';
import rexall from '../../assets/logo_rexall.svg';
import starbucks from '../../assets/logo_starbucks.svg';
import carls from '../../assets/logo_carls-jr.svg'
import brampton from '../../assets/logo_brampton.svg';
import arrow from '../../assets/arrow.svg';

import { Link } from 'react-router-dom';

const PastProjects = props => (
  <Card className="past-projects__card">
    <div className="past-projects__text">
      <span> Constructed projects for </span>
      <Link to="/gallery">
        View Project Gallery
        <img src={arrow} alt="arrow to see projects" />
      </Link>
    </div>
    <div className="past-projects__logos">
      <img src={timhortons} alt="tim hortons"/>
      <img src={rexall} alt="rexall"/>
      <img src={starbucks} alt="starbucks"/>
      <img src={carls} alt="carls junior"/>
      <img src={brampton} alt="city of brampton"/>
    </div>
  </Card>
)

export default PastProjects;
