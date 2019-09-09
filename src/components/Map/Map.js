import React, { Component } from 'react';
// import './Map.css'

class Map extends Component {
  constructor(props){
    super(props);
    this.googleChecker = this.googleChecker.bind(this);
    this.renderMap = this.renderMap.bind(this);
  }

  googleChecker() {
    // check for maps in case you're using other google api
    if(!window.google.maps) {
      setTimeout(this.googleChecker, 100);
    } else {
      // the google maps api is ready to use, render the map
      this.renderMap();
    }
  }

  renderMap(){
    const onsite = {lat: 43.680880, lng: -79.586150};
    const map = new window.google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: onsite});
    new window.google.maps.Marker({position: onsite, map: map});
  }

  componentDidMount(){
    this.googleChecker();
  }

  render() {
    return (
      <div className="map">
          <div id="map" className="map__google"></div>
          <button className="map__button"> Get Directions </button>
      </div>
    )
  }
};

export default Map;
