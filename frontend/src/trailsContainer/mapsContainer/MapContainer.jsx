import React, { Component } from 'react';
import TrailContainer from '../TrailContainer';
import GoogleMapReact from 'google-map-react'

const Location = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: 39.74,
      lng: -104.99
    },
    zoom: 8
  };


  render() {
   console.log(this.props.trails);
    const trailLoc = this.props.trails.map((trail) => {
      return (
           <Location
            lat={trail.lat}
            lng={trail.long}
            text="Trail Head"
          />
      )
    })

    return (
      
      <div id ="myMap" style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
       

          bootstrapURLKeys={{ key: 'AIzaSyANLNtgpORdnRgDMFJRvEh73_7ecNkzK8o' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {trailLoc}
    
          
        </GoogleMapReact>

      </div>
    );
  }
}

export default MapContainer;
