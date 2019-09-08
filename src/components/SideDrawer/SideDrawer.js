import React from 'react';
import classnames from 'classnames';
// import './SideDrawer.css';
import { NavLink } from 'react-router-dom';

const sideDrawer = props => {

  const onClickHandler = (page) => {
    props.closeSideBar();
    props.changeActivePage(page)
  }

  const getClassNames = (page) => {
    classnames({"active": props.activePage === page})
  }
  return (
    <nav className={classnames('side-drawer', { 'open': props.show })}>
      <ul>
        <li onClick={() => onClickHandler('Home')} className={getClassNames('Home')}>
          <NavLink exact to="/"> Home </NavLink>
        </li>
        <li onClick={() => onClickHandler('About')} className={getClassNames('About')}>
          <NavLink to="/about"> About </NavLink>
        </li>
        <li onClick={() => onClickHandler('Gallery')} className={getClassNames('Gallery')}>
          <NavLink to="/gallery"> Project Gallery </NavLink>
        </li>
        <li onClick={() => onClickHandler('Services')} className={getClassNames('Services')}>
          <NavLink to="/services"> Services </NavLink>
        </li>
        <li onClick={() => onClickHandler('Contact')} className={getClassNames('Contact')}>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
      <button> Call us </button>
    </nav>
);
};

export default sideDrawer;
