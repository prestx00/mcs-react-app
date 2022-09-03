import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";
import styles from "./App.module.scss";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <Shop />
        <button className={styles.btn} onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2 className={styles.caption}>Нужно залогиниться!</h2>
        <button className={styles.btn} onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
