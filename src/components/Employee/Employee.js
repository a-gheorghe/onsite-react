import React from 'react';
import './Employee.css';

const Employee = props => (
  <div className="employee row">
      <div className="employee__picture-holder col-12 col-lg-2">
        <div className="grey-circle"> </div>
      </div>
        <div className="employee-info col-12 col-lg-10">
          <div className="row no-gutters">
            <span className="employee-name col-12 col-lg-auto"> Tiago Almeida </span>
            <span className="employee-title col-12 col-lg-auto"> Project Manager </span>
          </div>
          <div className="employee-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
);

export default Employee;
