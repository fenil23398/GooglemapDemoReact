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



class MapDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: {},
            activeMarker: {},
            showingInfoWindow: false,
            showInfoWindow: 0,
            selectedMarker: {},
            x: 0,
            y: 0,
            myLocations: [
                { lat: 23.05712, longi: 72.52005, place: "Ahmedbad", id: 4 },  //Ahmedabad
                { lat: 19.01302, longi: 72.84465, place: "Dadraaa", id: 1 },         //Mumbai
                { lat: 30.52901, longi: 77.30479, place: "Himachal", id: 2 },      //Himachal
                { lat: 19.693558, longi: 72.765518, place: "Palghar", id: 3 },    //Palghar
            ]
        }
        this.selectionOfMarker = this.selectionOfMarker.bind(this)
    }


    selectionOfMarker = (props,marker,e) => {
        console.log("Props Recieved ",props)
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
        return this.state.myLocations.map(location => {
            return (
                <Marker
                    key={location.id}
                    name={location.place}
                    position={{
                        lat: location.lat,
                        lng: location.longi
                    }}
                    onClick={this.selectionOfMarker}
                />
            )
        })
    }

    render() {
        const triangleCoords = [
            { lat: 19.01302, lng: 72.84465 },
            { lat: 30.529012, lng: 77.30479 },
            { lat: 23.05712, lng: 72.52005 },
            { lat: 19.693558, lng: 72.765518 }

        ];

        const roundCoords = { lat: 23.05712, lng: 72.52005 }
        return (
            <div>
                <style>
                    {
                        `
                        .increaseZ:{
                            z-index: 100000000;
                            width : 100%;
                            height:100%;
                        }
                    `
                    }
                </style>
                <h1> Map Demo </h1>

                <Map
                    google={this.props.google}
                    zoom={6}
                    style={mapStyles}
                    initialCenter={{ lat: 23.0225, lng: 72.5714 }}
                >
                    {this.displayMarkers()}

                    <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>
                                {this.state.selectedPlace.name}
                            </h1>
                        </div>
                    </InfoWindow>

                    {/* //Polygon Code */}
                    {/* <Polygon
                        paths={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                        fillColor="#0000FF"
                        fillOpacity={0.35}
                     /> */}

                    {/* PloyLine Code */}
                    {/* <Polyline
                        path={triangleCoords}
                        strokeColor="#0000FF"
                        strokeOpacity={0.8}
                        strokeWeight={2}
                    /> */}

                    {/* Circle Co-ordinates */}
                    {/* <Circle
                        radius={50000}
                        center={roundCoords}
                        onMouseover={() => console.log('mouseover')}
                        onClick={() => console.log('click')}
                        onMouseout={() => console.log('mouseout')}
                        strokeColor='transparent'
                        strokeOpacity={0}
                        strokeWeight={5}
                        fillColor='#FF0000'
                        fillOpacity={0.4}
                    /> */}

                    {/* <Marker
                        position={roundCoords}
                    /> */}
                </Map>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyBNQVQPeg0gARKCWhsMpiXKedFvj5XdQX8'
    apiKey: 'AIzaSyBjrlHW0uLCjMrCNSvkWBsM1NX9Q372Mvs'
})(MapDemo);