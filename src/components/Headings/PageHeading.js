import React from 'react';
import './PageHeading.css'

const PageHeading = props => (
  <div className="page-heading">
    <div className="page-heading__constant"> We deliver <span> Commercial and Residential </span> Construction </div>
    <h1> {props.heading} </h1>
  </div>
);

export default PageHeading;
