import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
// import './Toolbar.css';
import logo from '../../assets/logo-red.svg'
import classnames from 'classnames';
import {
  Link
} from 'react-router-dom';

const toolbar = props => {
  console.log('toolbar props', props);
  return (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__logo"><a href="/"><img src={logo} alt="company logo"/> </a></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li><Link to="/" onClick={() => props.changeActivePage('Home')} className={classnames({"active": props.activePage === "Home"})}> Home </Link></li>
            <li><Link to="/about" onClick={() => props.changeActivePage('About')} className={classnames({"active": props.activePage === "About"})}> About </Link></li>
            <li><Link to="/gallery" onClick={() => props.changeActivePage('Gallery')} className={classnames({"active": props.activePage === "Gallery"})}> Project Gallery </Link></li>
            <li><Link to="/services" onClick={() => props.changeActivePage('Services')} className={classnames({"active": props.activePage === "Services"})}> Services </Link></li>
            <li><Link to="/contact" onClick={() => props.changeActivePage('Contact')} className={classnames({"active": props.activePage === "Contact"})}> Contact </Link></li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton show={props.show} click={props.drawerClickHandler}/>
        </div>
    </nav>
  </header>
  );
};

export default toolbar;
