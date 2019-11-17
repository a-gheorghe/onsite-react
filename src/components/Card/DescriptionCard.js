import React from 'react';
import Card from './Card';
// import './Card.css'
import classnames from 'classnames';

const DescriptionCard = props => (
  <Card className={classnames("card card--description", props.className)}>
    {props.children}
  </Card>
);

export default DescriptionCard;
