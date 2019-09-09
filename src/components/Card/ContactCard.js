import React from 'react';
import Card from './Card';
// import './Card.css'
import classnames from 'classnames';

const Divider = props => (
  <Card className={classnames("contact__card", props.className)}>
    {props.children}
  </Card>
);

export default Divider;
