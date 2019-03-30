import React from 'react';
import './Employee.css';

const Employee = props => console.log(props) || (
  <div className="employee row no-gutters justify-content-between">
      <div className="employee__picture-holder col-12 col-md-3 align-self-center">
        <img src={props.photoPath} alt="guy1" />
      </div>
        <div className="employee-info col col-12 col-md-9">
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
