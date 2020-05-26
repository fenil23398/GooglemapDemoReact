import React from 'react';
import {
    Map,
    GoogleApiWrapper,
    Polygon,
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

//Pass Data containing details of Map
//Property Names must be lat and lng 
class PolygonComponent extends React.Component {
    render() {
        return(
            <div>
                <p> Rule 1 : Consist Array of Objects with property Named as lat :value, lng :value </p>
                <p> Rule 2 : Wrap Inside Map Tag </p>
                <p> Rule 3 : Stroke color,opacity,fillColor Everything can be Passed </p>
                <p> Rule 4 : onClick Event can be passed and Markers Also  </p>
                <p> Rule 5 : 0th index object will connect to 1st and last object of array and so on 1 to 0 and 2 </p>
                 <Map
                    google={this.props.google}
                    zoom={5}
                    className = {mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
                    <Polygon
                        paths={this.props.data}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.35}
                     />
                </Map>
            </div>
        )  
    }
}


export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(PolygonComponent)
