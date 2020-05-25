import React from 'react';
import {
    Map,
    GoogleApiWrapper,
    Marker,
    InfoWindow,
    Polygon,
    Polyline,
    Circle
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MarkerComponent extends React.Component {
    render() {
        return(
            <h1> Circle </h1>
        )  
    }
}


export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(MarkerComponent);