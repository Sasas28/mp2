export let deliveryTime = "";

export function accessMapApi() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFzdGVyMjgiLCJhIjoiY2xpczEzbm9tMTFzMTNlcW9sbXNpenJvcCJ9.jxS_s16zSL_DFQoBUBn-bA';
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [121.0873, 14.5389],
    zoom: 12
    });

    const bounds = [
    [116.4668, 4.5864], 
    [126.5374, 21.1619]
    ];
    map.setMaxBounds(bounds);

    const start = [121.0873, 14.5389];

    async function getRoute(end) {
        
        const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' }
        );
        const json = await query.json();
        const data = json.routes[0];
        const route = data.geometry.coordinates;
        const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
            type: 'LineString',
            coordinates: route
        }
        };
        
        if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
        }
        
        else {
        map.addLayer({
            id: 'route',
            type: 'line',
            source: {
            type: 'geojson',
            data: geojson
            },
            layout: {
            'line-join': 'round',
            'line-cap': 'round'
            },
            paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
            }
        });
        }
        
    const instructions = document.getElementById('instructions');
    const steps = data.legs[0].steps;

    let tripInstructions = '';
    for (const step of steps) {
    tripInstructions += `<li class="list-group-item">${step.maneuver.instruction}</li>`;
    }
    instructions.innerHTML = `
    <p class="p-2"><strong id="delivery-time">Delivery time: ${Math.floor(
    data.duration / 60
    )} min 🚴 </strong></p>
    <p class="p-2"><strong>Directions:</strong></p>
    <ol class="list-group list-group-flush">${tripInstructions}</ol>`;
    
    
        deliveryTime = `${Math.floor(
        data.duration / 60
        )}`;
    }
    
    map.on('load', () => {
        
        getRoute(start);
    
        // Add starting point to the map
        map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
            type: 'FeatureCollection',
            features: [
                {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: start
                }
                }
            ]
            }
        },
        paint: {
            'circle-radius': 10,
            'circle-color': '#3887be'
        }
        });
        
        map.on('click', (event) => {
            const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
            const end = {
            type: 'FeatureCollection',
            features: [
                {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: coords
                }
                }
            ]
            };
            if (map.getLayer('end')) {
            map.getSource('end').setData(end);
            } else {
            map.addLayer({
                id: 'end',
                type: 'circle',
                source: {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                        type: 'Point',
                        coordinates: coords
                        }
                    }
                    ]
                }
                },
                paint: {
                'circle-radius': 10,
                'circle-color': '#f30'
                }
            });
            }
            getRoute(coords);
        });
    });

    const destinationInput = document.getElementById('destination');
    const suggestionsDiv = document.getElementById('suggestions');

    destinationInput.addEventListener('keyup', autocompleteDestination);

    function autocompleteDestination() {
    const query = destinationInput.value;

    // Use the Mapbox Geocoding API to fetch autocomplete suggestions
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}&autocomplete=true`)
        .then((response) => response.json())
        .then((data) => {
        const suggestions = data.features.map((feature) => feature.place_name);
        displaySuggestions(suggestions);
        })
        .catch((error) => {
        console.error('Autocomplete error:', error);
        });
    }

    function displaySuggestions(suggestions) {
    // Clear previous suggestions
    suggestionsDiv.innerHTML = '';

    // Display up to 5 suggestions
    for (let i = 0; i < Math.min(suggestions.length, 5); i++) {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion p-1';
        suggestion.textContent = suggestions[i];
        suggestion.addEventListener('click', () => {
        destinationInput.value = suggestions[i];
        suggestionsDiv.innerHTML = ''; // Clear suggestions
        searchDestination(); // Trigger the search
        });
        suggestionsDiv.appendChild(suggestion);
    }
    }

    function searchDestination() {
    const query = destinationInput.value;

    // Use the Mapbox Geocoding API to geocode the selected destination
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
        .then((response) => response.json())
        .then((data) => {
        const coordinates = data.features[0].geometry.coordinates;
        setDestination(coordinates);
        })
        .catch((error) => {
        console.error('Geocoding error:', error);
        });
    }

    function setDestination(destinationCoords) {
    // Clear existing destination layer if it exists
    if (map.getLayer('end')) {
        map.getSource('end').setData({
        type: 'FeatureCollection',
        features: [
            {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: destinationCoords
            }
            }
        ]
        });
    } else {
        map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
            type: 'FeatureCollection',
            features: [
                {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'Point',
                    coordinates: destinationCoords
                }
                }
            ]
            }
        },
        paint: {
            'circle-radius': 10,
            'circle-color': '#f30'
        }
        });
    }

    // Call getRoute with the new destination coordinates
    getRoute(destinationCoords);
    }
}