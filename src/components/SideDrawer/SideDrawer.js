import React, { useEffect } from 'react';
import classnames from 'classnames';
import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = (props, history) => {
  console.log('SideDrawer props', props, history);
  useEffect(() => {
    console.log('props.activePage in side drawer', props.activePage);
  });

  const onClickHandler = (page) => {
    props.closeSideBar();
    props.changeActivePage(page)
  }

  return (
    <nav className={classnames('side-drawer', { 'open': props.show })}>
      <ul>
        <li onClick={() => onClickHandler('Home')} className={classnames({ "active": props.activePage === "Home" })}>
          <NavLink exact to="/"> Home </NavLink>
        </li>
        <li onClick={() => onClickHandler('About')} className={classnames({ "active": props.activePage === "About" })}>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li onClick={() => onClickHandler('Gallery')} className={classnames({ "active": props.activePage === "Gallery" })}>
          <NavLink to="/gallery"> Project Gallery </NavLink>
        </li>
        <li onClick={() => onClickHandler('Services')} className={classnames({ "active": props.activePage === "Services" })}>
          <NavLink to="/services"> Services </NavLink>
        </li>
        <li onClick={() => onClickHandler('Contact')} className={classnames({ "active": props.activePage === "Contact" })}>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <button> Call us </button>
    </nav>
);
};

export default SideDrawer;
