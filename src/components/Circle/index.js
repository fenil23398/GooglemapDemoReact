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
             {console.log("Reached inside Circle ",this.props.data)}
             <Map
                    google={this.props.google}
                    zoom={5}
                    className = {mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
              {/* Circle Co-ordinates */}
                    <Circle
                        radius={50000}
                        center={this.props.data}
                        onMouseover={() => console.log('mouseover')}
                        onClick={() => console.log('click')}
                        onMouseout={() => console.log('mouseout')}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.4}
                    />
            </Map>
         </div>
        )
    }
}


export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(CircleComponent);