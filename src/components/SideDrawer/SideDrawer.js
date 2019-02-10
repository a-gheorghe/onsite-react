import React from 'react';
import classnames from 'classnames';
import './SideDrawer.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const sideDrawer = props => {
  console.log('side drawer props ', props)
  return (
    <nav className={classnames('side-drawer', { 'open': props.show })}>
      <ul>
        <li><NavLink to="/"> Home </NavLink></li>
        <li><NavLink to="/about"> About </NavLink></li>
        <li><NavLink to="/gallery"> Project Gallery </NavLink></li>
        <li><NavLink to="/services"> Services </NavLink></li>
        <li><NavLink to="/contact"> Contact </NavLink></li>
      </ul>
      <button> Call us </button>
    </nav>
);
};

export default sideDrawer;
