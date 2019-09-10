import React from 'react';
import classnames from 'classnames';
// import './Divider.css'

const Divider = props => (
  <div className={classnames("divider", props.className)} />
);

export default Divider;
