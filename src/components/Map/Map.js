import React, { Component } from 'react';
// import './Map.css'

class Map extends Component {

  componentDidMount() {
    const onsite = {lat: 43.680880, lng: -79.586150};
    const map = new window.google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: onsite});
    new window.google.maps.Marker({position: onsite, map: map});
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
