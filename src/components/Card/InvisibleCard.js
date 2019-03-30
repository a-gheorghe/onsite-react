import React from 'react';
import classnames from 'classnames';
import './Card.css';

const InvisibleCard = props => (
  <div className={classnames("card card--invisible", props.className)}>
    {props.children}
  </div>
);

export default InvisibleCard;
