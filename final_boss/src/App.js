import React, {useState} from "react";
import {render} from "react-dom";
import "./index.css";
import styles from "./App.module.scss";
import QuizList from "./QuizList.js";
import LoginPage from "./LoginPage.js";

function App(){
    const[login, setLogin] = useState(false);

   if(login){
    return <QuizList />
   } else {
    return (<>
        <LoginPage />
        
            <button onClick={() => setLogin(true)} className={styles.btn}>
                <div>
                    <p>LET'S GO</p>
                    <img src="./images/metamask_icon_white.svg" alt="metamask_logo"/>
                </div>
            </button>

        </>)
   }
}

render(<App/>, document.querySelector("#root"));