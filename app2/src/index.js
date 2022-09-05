import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox.js";

function App() {
  const [random, setRandom] = useState(Math.random());
  console.log(random)

  useMapbox('map',[44.2667, 46.3148], 12)
 
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