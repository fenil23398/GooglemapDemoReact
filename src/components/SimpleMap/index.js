import React, { Component } from 'react';
import {
    Map,
    GoogleApiWrapper,
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class SimpleMap extends Component {
    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={5}
                    className = {mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                > 
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(SimpleMap);
