import React from 'react';
import classnames from 'classnames';
// import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const SideDrawer = props => {

  const onClickHandler = (page) => {
    props.closeSideBar();
    props.changeActivePage(page)
  }

  return (
    <nav className={classnames('side-drawer', { 'open': props.show })}>
      <ul>
        <li onClick={() => onClickHandler('Home')} className={classnames({ "active": props.activePage === "Home" })}>
          <NavLink className="navLink" exact to="/"> Home </NavLink>
        </li>
        <li onClick={() => onClickHandler('About')} className={classnames({ "active": props.activePage === "About" })}>
          <NavLink className="navLink" to="/about"> About </NavLink>
        </li>
        <li onClick={() => onClickHandler('Gallery')} className={classnames({ "active": props.activePage === "Gallery" })}>
          <NavLink className="navLink" to="/gallery"> Project Gallery </NavLink>
        </li>
        <li onClick={() => onClickHandler('Services')} className={classnames({ "active": props.activePage === "Services" })}>
          <NavLink className="navLink" to="/services"> Services </NavLink>
        </li>
        <li onClick={() => onClickHandler('Contact')} className={classnames({ "active": props.activePage === "Contact" })}>
          <NavLink className="navLink" to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <a className="side-drawer__button" href="tel:1-416-654-6000"> Call us </a>
    </nav>
);
};

export default SideDrawer;
