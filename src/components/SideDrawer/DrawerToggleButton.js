import React from 'react';
import './DrawerToggleButton.css';
import classnames from 'classnames';

const drawerToggleButton = props => {
  console.log('props drawer toggle button', props)
  return (
    <button className={classnames("toggle-button", { "is-active": props.show } )} onClick={props.click}>
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
    </button>
  );
};

export default drawerToggleButton;
