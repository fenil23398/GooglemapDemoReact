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

class CircleComponent extends React.Component {
    render() {
        return (
            <div>
                <h1> Circle </h1>
                <Map
                    google={this.props.google}
                    zoom={6}
                    className={mapStyles}
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
})(CircleComponent);