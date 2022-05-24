import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

//Personal Access Mapbox Token 
mapboxgl.accessToken = "pk.eyJ1IjoiYWJpZ2FpbG11ayIsImEiOiJjbDJ3OXJwdTUwNTVqM2lqenppd2tnbW0yIn0.nPOIUGlpQjC1fjfjyIhY5w"


//The url containing the raw location data within a JSON file posted to github
const geoJsonUrl = 'https://raw.githubusercontent.com/abigailmuk/locations/main/carehomelocations';

//class component which will retrieve data and demonstate the map
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // London
            lng: -0.1817,
            lat: 51.52838,
            zoom: 11,
            features: [],
            isLoading: false,
            
        };
       
    }


//The component which will call the care home location JSON file, load the map, pin image, and map styling from mapbox

// DISCLAIMER: MAP IS CURRRENTLY ONLY DISPLAYING ONE LOCATION USING DUMMY INFO OF THE UNIVERSITY OF WESTMINSTER 
    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        fetch(geoJsonUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({features: data['features'], isLoading: false});
            });

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/abigailmuk/cl2w9xx8k002v14noc2sk3nzs',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        map.on('load', () => {
            this.setState(
                {
                    features: this.state.features,
                }
            );
            

            map.loadImage('https://img.icons8.com/office/80/000000/marker.png',
                function (error, image) {
                    if (error) throw error;
                    map.addImage('pin', image);
                }
            );

            map.addSource('care-homes', {
                'type': 'geojson',
                'data': geoJsonUrl,
            });
            map.addLayer({
                'id': 'carehomes',
                'type': 'symbol',
                'source': 'care-homes',
                'layout': {
                   
                    'icon-image': ['concat', 'pin'],
                    'icon-size': 0.5,
                    'icon-allow-overlap': false,
                    
                    'text-field': ['format',
                    ['get', 'CAMPUS'], {'font-scale': 1}],
                    'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
                    'text-size': 12,
                    'text-offset': [0, 1.1],
                    'text-anchor': 'top',

                },
                paint: {
                    'text-color': "#545d6a",
                }
            });

        });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        map.on('click', 'carehomes', function (e) {
            let coordinates = e.features[0].geometry.coordinates.slice();
            let marker = e.features[0];
            let popupHtml = `
           
                            
            <span class="carehome-level tag" lang="en">${marker.properties["SCHOOL OF"]} </span>
                            
            <h3 class="carehome-title" lang="en"> ${marker.properties["CAMPUS"]}</h3>
            
            <p class="address" lang="en">${marker.properties["ADDRESS"]}</p>
            
             
           
            <p class="contact"><span lang="en">Phone</span>: ${marker.properties["TELEPHONE"]}</p>
            
            <p class="contact"><span lang="en">Website</span>: <a href='${marker.properties["WEBSITE"]}' target="_blank" rel="noreferrer noopenner">${marker.properties["WEBSITE"]}</a></p>
        `;

            // Ensure that the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(popupHtml)
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'carehomes', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'carehomes', function () {
            map.getCanvas().style.cursor = '';
        });
    }

    render() {
        const {isLoading} = this.state;
        return (
            //The div class which will show the map and its "locations"
            <div className="wrapper" >
                {isLoading ? <div className="is-loading"> Loading...</div> : (
                    <div className="app-info">
                     {/*  <h1>
                        <span className="lang-en">Location Map</span>
                      </h1>
                      <p>
                      <span lang="en">created by Abigail Mukombero</span>
                      </p>*/}
                    </div> 
                )}
                <div ref={el => this.mapContainer = el} className="mapContainer"/>


            </div>
        )
    }
}

export default Map;