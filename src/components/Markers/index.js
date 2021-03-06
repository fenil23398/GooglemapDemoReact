import React from 'react';
import {
    Map,
    GoogleApiWrapper,
    Marker,
    InfoWindow
} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

//Pass Json format which contains details of Markers
class MarkerComponent extends React.Component {
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
    render() {
        return (
            <div>
                <p> Rule 1 : Render method which Traverses Array and Put markers </p>
                <p> Rule 2 : on Click set active marker so detail will be shown on selected Marker only </p>
                <p> Rule 3 : Info window will contain data for selected Marker </p>
                <Map
                    google={this.props.google}
                    zoom={5}
                    className={mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
                    {this.displayMarkers()}
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
                </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(MarkerComponent);