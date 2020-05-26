import React, { Component } from 'react';
import {
    Map,
    GoogleApiWrapper,
    Marker,
    InfoWindow,
    Polygon,
    Circle
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

class MapMix extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedPlace: {},
            activeMarker: {},
            showingInfoWindow: false,
        }
    }
    selectionOfMarker = (props, marker, e) => {
        console.log("Props Recieved ", props)
        console.log("Selected Marker ", marker)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onCloseInfoWindow = () => {
        this.setState({
            showInfoWindow: 0,
            activeMarker: null
        })
    }

    displayMarkers = () => {
        return this.props.data.map(location => {
            return (
                <Marker
                    key={location.id}
                    name={location.place}
                    position={{
                        lat: location.lat,
                        lng: location.lng
                    }}
                    onClick={this.selectionOfMarker}
                />
            )
        })
    }

    generateCircle = () => {
        return this.props.data.map(location => {
            return (
                <Circle
                radius={50000}
                center={location}
                onMouseover={() => console.log('mouseover')}
                onClick={() => console.log('click')}
                onMouseout={() => console.log('mouseout')}
                strokeColor='transparent'
                strokeOpacity={0}
                strokeWeight={5}
                fillColor='#FF0000'
                fillOpacity={0.4}
            />
            )
        })
    }

    render() {
        return (
            <div>
               <div>
                <Map
                    google={this.props.google}
                    zoom={5}
                    className={mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
                    {this.displayMarkers()}
                    {this.generateCircle()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h1>
                                {this.state.selectedPlace.name}
                            </h1>
                        </div>
                    </InfoWindow>
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
            </div>
        )
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(MapMix);
