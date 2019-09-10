import React, { Component } from 'react';
// import './App.css'
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
  Redirect,
  withRouter,
  BrowserRouter
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
    const { sideDrawerOpen, activePage } = this.state
    return (
      <BrowserRouter>
        <div className="app">
            <Toolbar show={sideDrawerOpen} drawerClickHandler={this.drawerToggleClickHandler} changeActivePage={this.changeActivePageHandler} activePage={activePage} />
            <SideDrawer show={sideDrawerOpen} changeActivePage={this.changeActivePageHandler} closeSideBar={this.backdropClickHandler} activePage={activePage} />
            { sideDrawerOpen && <Backdrop click={this.backdropClickHandler} /> }
            <main>
              <Switch>
                <Route exact path="/" render={(props) => <Home {...props} activePage={activePage} changeActivePage={this.changeActivePageHandler} />} />
                <Route path="/about" render={(props) => <About {...props} activePage={activePage} changeActivePage={this.changeActivePageHandler} />} />
                <Route path="/gallery" render={(props) => <Gallery {...props} changeActivePage={this.changeActivePageHandler} />} />
                <Route path="/services" render={(props) => <Services {...props} changeActivePage={this.changeActivePageHandler} />} />
                <Route path="/contact" render={(props) => <Contact {...props} changeActivePage={this.changeActivePageHandler} />} />
                <Redirect to="/" />
              </Switch>
            </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
