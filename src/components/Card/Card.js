import React from 'react';
import classnames from 'classnames';
import './Card.css';

const Card = props => (
  <div className={classnames("card", props.className)}>
    {props.children}
  </div>
);

export default Card;
