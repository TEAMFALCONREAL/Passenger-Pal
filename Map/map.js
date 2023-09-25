import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, getDoc, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyC148Bp1eyf60ewdt22NoGysywPmBQOuoM",
  authDomain: "passenger-pal.firebaseapp.com",
  projectId: "passenger-pal",
  storageBucket: "passenger-pal.appspot.com",
  messagingSenderId: "252203613949",
  appId: "1:252203613949:web:38e2fe4a66d5a88d558894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const bus_no = localStorage.getItem("Bus_No");
console.log(bus_no);

// async function tt(a,b,c,d){
//   const x = await fetch(`https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${a},${b};${c},${d}?access_token=pk.eyJ1IjoiYXJ5ZXNoIiwiYSI6ImNsbXVsa2RoMTBjaDIybG1zN20ycHRmZTMifQ.eF02nLj-tkuBa1O8PCNMuA`);
//   const data = x.json();
//   const data1 = data.code;
//   console.log(data1);
  // return data1;
// }
// const docSnap = await getDoc(doc(db, "Bus", "UR2Pcj8xnG35XSByPxDf"));
  const docSnap = onSnapshot(doc(db, "Bus", bus_no), (doc) => {
  const bus_lat = doc.data().Bus_Lat;
  const bus_long = doc.data().Bus_Long;
  const bus_name = doc.data().Bus_Name;
  const bus = doc.data().Bus_No;
  const start_time = doc.data().Start_Time;
  const stops = doc.data().Stops;
  const len = stops.length;

  const ul = document.createElement("ul");
  for(let i = 0 ; i<len;i++){
    const li = document.createElement("li");
    li.classList.add("css-1");
    li.classList.add("css-2");
    const x = document.createTextNode(stops[i].S_Name);
    li.appendChild(x);
    ul.appendChild(li);
  }

  const main = document.querySelector("#body");

  const a = document.createElement("div");
  a.classList.add("css-1");
  const b = document.createElement("h2");
  const c = document.createTextNode("Bus Name : "+bus_name);
  b.appendChild(c);
  a.appendChild(b);

  const d = document.createElement("div");
  d.classList.add("css-1");
  const e = document.createElement("h2");
  const f = document.createTextNode("Bus Number : "+bus);
  e.appendChild(f);
  d.appendChild(e);

  const x = document.createElement("div");
  x.classList.add("css-1");
  const y = document.createElement("h2");
  const z = document.createTextNode("Start Time : "+start_time);
  y.appendChild(z);
  x.appendChild(y);

  const g = document.createElement("h2");
  g.classList.add("css-1");
  g.classList.add("css-3");
  const h = document.createTextNode("Stops");
  g.appendChild(h);

  const br = document.createElement("br");

  // for(let i =0; i<len; i++){
  //   const a = Stops[i].S_Lat;
  //   const b = Stops[i].S_Long;
  //   const c = Stops[i+1].S_Lat;
  //   const d = Stops[i+1].S_Long;
  //   tt(a,b,c,d);
  // }

  // const travel_time=tt(Stops[0].S_Lat,Stops[0].S_Long,Stops[len-1].S_Lat,Stops[len-1].S_Long);
  // tt(stops[0].S_Lat,stops[0].S_Long,stops[len-1].S_Lat,stops[len-1].S_Long)
  // const x0 = document.createElement("div");
  // x.classList.add("css-1");
  // const y0 = document.createElement("h2");
  // const z0 = document.createTextNode("Total Travel Time : "+travel_time);
  // y.appendChild(z);
  // x.appendChild(y);

  main.appendChild(a);
  main.appendChild(d);
  main.appendChild(x);
  main.appendChild(br);
  main.appendChild(g);
  main.appendChild(ul);

  mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ5ZXNoIiwiYSI6ImNsbXVsa2RoMTBjaDIybG1zN20ycHRmZTMifQ.eF02nLj-tkuBa1O8PCNMuA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [bus_long,bus_lat], // starting position
  zoom: 14
});

// an arbitrary start will always be the same
// only the end or destination will change
const start = [77.37955722204728,28.64842781244632];
const endloc = [77.37075579386077, 28.620626851464852];

// this is where the code for the next step will go
// create a function to make a directions request
async function getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
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
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
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
    // add turn instructions here at the end
  }
  
map.on('load', () => {
    // make an initial directions request that
    // starts and ends at the same location
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
    // this is where the code from the next step will go
});

map.on('load', () => {
    // const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
    const end = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: endloc
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
                  coordinates: endloc
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
    getRoute(endloc);
});

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'message': 'Aryan',
                'coordinates': [77.37955722204728, 28.64842781244632]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'message': 'Amritanshu',
                'coordinates': [77.3747973404153, 28.641727611531362]
            }
        },
        {
          'type': 'Feature',
          'properties': {
              'iconSize': [50, 50]
          },
          'geometry': {
              'type': 'Point',
              'message': 'Noida Electronic City ',
              'coordinates': [77.3749, 28.6279]
          }
      }, 
      {
        'type': 'Feature',
        'properties': {
            'iconSize': [50, 50]
        },
        'geometry': {
            'type': 'Point',
            'message': 'Shivansh',
            'coordinates': [77.37075579386077, 28.620626851464852]
        }
    },
    ]
};

// Add markers to the map.
for (const marker of geojson.features) {
    // Create a DOM element for each marker.
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `url(https://img.icons8.com/dusk/${width}/map-pin.png)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    el.addEventListener('load', () => {
        window.alert(marker.properties.message);
    });

    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
}

const geojson2 = {
    'type': 'FeatureCollection',
    'feature': [
        {
            'type': 'Feature',
            'properties': {
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [bus_long, bus_lat]
            }
        }
    ]
} 

for(const marker of geojson2.feature){
    const el = document.createElement('div');
const width = marker.properties.iconSize[0];
const height = marker.properties.iconSize[1];
el.className = 'marker';
el.style.backgroundImage = `url(https://img.icons8.com/stickers/${width}/bus.png)`;
// https://img.icons8.com/3d-fluency/${width}/double-decker-bus.png
el.style.width = `${width}px`;
el.style.height = `${height}px`;
el.style.backgroundSize = '100%';

el.addEventListener('load', () => {
    window.alert(marker.properties.message);
});

// Add markers to the map.
new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
}
})


