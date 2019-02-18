import React, { Component } from 'react';
import './App.css'
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  state = {
    sideDrawerOpen: false,
    activePage: 'Home'
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  changeActivePageHandler = (page) => {
    this.setState({ activePage: page })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="app">
        <Toolbar show={this.state.sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} changeActivePage={this.changeActivePageHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} changeActivePage={this.changeActivePageHandler} />
        {backdrop}
        <main>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>        </main>
      </div>
    );
  }
}

export default App;
