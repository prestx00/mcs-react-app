import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import "./index.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

function App() {
  const [random, setRandom] = useState(Math.random());
  
  mapboxgl.accessToken = "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

  useEffect(()=> {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [44.2667, 46.3148],
    zoom: 11
  }) 
  }, [])
  
  
  return (
    <>
      <button
        className="ui-button"
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));