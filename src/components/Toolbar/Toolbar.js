import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import logo from '../../assets/logo-red.svg'
import {
  Link,
} from 'react-router-dom';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__logo"><a href="/"><img src={logo} alt="company logo"/> </a></div>
        <div className="spacer" />
        <div className="toolbar__navigation-items">
          <ul>
            <li><Link to="/" onClick={() => props.changeActivePage('Home')}> Home </Link></li>
            <li><Link to="/about" onClick={() => props.changeActivePage('About')}> About </Link></li>
            <li><Link to="/gallery" onClick={() => props.changeActivePage('Gallery')}> Project Gallery </Link></li>
            <li><Link to="/services" onClick={() => props.changeActivePage('Services')}> Services </Link></li>
            <li><Link to="/contact" onClick={() => props.changeActivePage('Contact')}> Contact </Link></li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
    </nav>
  </header>
);

export default toolbar;
