import React from 'react';
import {
    Map,
    GoogleApiWrapper,
    Polyline,
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

//Pass Path Containing Route FOr PolyLine
//Property Names must be lat and lng
class PolylineComponent extends React.Component {
    render() {
        return(
            <div>
                <p> Rule 1 : Consist Array of Objects with property Named as lat :value, lng :value </p>
                <p> Rule 2 : Wrap Inside Map Tag </p>
                <p> Rule 3 : Stroke color,opacity </p>
                <p> Rule 4 : onClick Event can be passed and Markers Also can be Putted </p>
                <p> Rule 5 : 0th index object will connect to 1st, 1st to 2nd and So on.</p>
                 <Map
                    google={this.props.google}
                    zoom={5}
                    className = {mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
                   <Polyline
                        path={this.props.data}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                    />
                </Map>
            </div>
        )  
    }
}


export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(PolylineComponent);