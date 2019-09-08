import React from 'react';
import classnames from 'classnames';
// import './Card.css';

const ServiceCard = props => (
  <div className={classnames("card card--service", props.className)}>
    {props.children}
  </div>
);

export default ServiceCard;
