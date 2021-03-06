import React from 'react';
// import './DrawerToggleButton.css';
import classnames from 'classnames';

const drawerToggleButton = props => {
  return (
    <button className={classnames("toggle-button", { "is-active": props.show, "home-page": props.homePage } )} onClick={props.click}>
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
    </button>
  );
};

export default drawerToggleButton;
