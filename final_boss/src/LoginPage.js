import React, {useState} from "react";
import styles from "./App.module.scss";


export default function LoginPage(){
    const [login, setLogin] = useState(false);

    function handleLoginButton(){
        setLogin(!login)
    }

    return (<>
            <div className={styles.background_image}>
                 <div><img src="./images/logo.png" alt="logo"/></div>
                 <img src="./images/logo.png" alt="logo"></img>
            </div>
    </>)
}