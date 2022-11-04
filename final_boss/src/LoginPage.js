import React, {useState} from "react";
import styles from "./App.module.scss";


export default function LoginPage(){
    const [login, setLogin] = useState(false);

    function handleLoginButton(){
        setLogin(!login)
    }

    return (<>
            <div className={styles.background_img}>
                 
            </div>
    </>)
}