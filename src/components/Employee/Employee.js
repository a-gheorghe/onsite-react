import React from 'react';
import './Employee.css';

const Employee = props => (
  <div className="employee">
      <div className="grey-circle"> </div>
        <div className="employee-info">
          <span className="employee-name"> Tiago Almeida </span>
          <span className="employee-title"> Project Manager </span>
          <div className="employee-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </div>
        </div>
      </div>
);

export default Employee;
