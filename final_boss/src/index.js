import React from "react";
import {render} from "react-dom";
import "./index.css";
// import styles from "./App.module.scss";
// import QuizList from "./QuizList.js";
import LoginPage from "./LoginPage.js";

function App(){
    return <LoginPage />
   }


render(<App/>, document.querySelector("#root"));