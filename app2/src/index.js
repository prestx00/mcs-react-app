import React, { useState, useRef } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox.js";
import styles from "./App.module.scss";

function App() {
  const [random, setRandom] = useState(Math.random());
  console.log(random)
  const containerRef = useRef();

  useMapbox()
 
  return (
    <>
      <button
        className={styles.ui_button}
        id="rerender"
        onClick={() => setRandom(Math.random())}
      >
        Ререндер!
      </button>
      <div ref={containerRef} id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));