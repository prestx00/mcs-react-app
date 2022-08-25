import React from "react";
import styles from './App.module.scss';

export default function AddItem(props){
    return <form onSubmit={props.onHandleSubmitForm}>
    <div className={styles.inputContainer}>
      <label htmlFor="name" className={styles.ui_label}>
        Название товара:
      </label>
      <input
        id="name"
        type="text"
        value={props.name}
        placeholder="Название товара"
        className={styles.ui_textfield}
        onChange={props.onHandleChangeName}
      />
    </div>
    <div className={styles.inputContainer}>
      <label htmlFor="desc" className={styles.ui_label}>
        Описание товара:
      </label>
      <input
        id="desc"
        type="text"
        value={props.desc}
        placeholder="Описание товара"
        className={styles.ui_textfield}
        onChange={props.onHandleChangeDesc}
      />
    </div>
    <div className="form_footer">
      <div className={styles.ui_validation}>{props.valid}</div>
      <input
        className={styles.ui_button}
        type="submit"
        value="Добавить"
      />
    </div>
  </form>
}