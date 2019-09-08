import React from 'react';
// import './CardHeading.css'
import classnames from 'classnames';

const CardHeading = props => (
  <div>
    <h2 className={classnames("card-heading", props.className)}>
    {props.subheading}
    </h2>
  </div>

);

export default CardHeading;
