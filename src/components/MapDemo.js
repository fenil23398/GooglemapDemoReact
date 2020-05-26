import React from 'react';
import CircleComponent  from "./Circle";
import MarkerComponent from "./Markers";
import PolygonComponent from "./Polygon";
import PolylineComponent from "./Polyline";
import SimpleMap from "./SimpleMap";
import MapMix from "./Mix";
// const mapStyles = {
//     width: '100%',
//     height: '100%',
// };



export default class MapDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mapLocations: [
                { lat: 23.05712, lng: 72.52005, place: "Ahmedbad", id: 4 },   //Ahmedabad
                { lat: 19.693558, lng: 72.765518, place: "Palghar", id: 3 },
                { lat: 19.01302, lng: 72.84465, place: "Dadra", id: 1 },    
                { lat: 30.52901, lng: 77.30479, place: "Himachal", id: 2 },   //Himachal
             
            ],
            handlePage : 0
        }
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
                <h1> Map Demo </h1>
                <button onClick = {() => this.setState({handlePage : 0})}>Normal</button>
                <button onClick = {() => this.setState({handlePage : 1})}>circle</button>
                <button onClick = {() => this.setState({handlePage : 2})}>Polygon</button>
                <button onClick = {() => this.setState({handlePage : 3})}>PolyLine</button>
                <button onClick = {() => this.setState({handlePage : 4})}>Markers</button>
                <button onClick = {() => this.setState({handlePage : 5})}>MixMaps</button>
                {
                      this.state.handlePage === 1 &&
                        <CircleComponent 
                            data = {roundCoords}
                        />   
                }
                {
                    this.state.handlePage === 2 &&
                    <PolygonComponent 
                        data = {triangleCoords}
                    />
                }
                {
                    this.state.handlePage === 3 &&
                    <PolylineComponent
                        data = {triangleCoords}
                    />
                }
                {
                    this.state.handlePage === 4 &&
                    <MarkerComponent
                        data = {this.state.mapLocations}
                    />  
                }
                {
                    this.state.handlePage === 0 &&
                       <SimpleMap />
                }
                {
                    this.state.handlePage === 5 && 
                    <MapMix
                        data = {this.state.mapLocations}
                    />
                }
               
            </div>
        )
    }
}
