import React, { useState } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox.js";
import styles from "./App.module.scss";

function App() {
  const [random, setRandom] = useState(Math.random());
  console.log(random)

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
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));