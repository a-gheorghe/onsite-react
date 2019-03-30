import React from 'react';
import classnames from 'classnames';
import './PageHeading.css'

const PageHeading = props => (
  <div className={classnames("page-heading", { "light": props.light })}>
    { props.light ?
      <div className="page-heading__constant">On-Site Solutions General Contractors </div> :
      <div className="page-heading__constant">We deliver <span> Commercial and Residential </span> Construction </div>
    }
    <h1> {props.heading} </h1>
  </div>
);

export default PageHeading;
