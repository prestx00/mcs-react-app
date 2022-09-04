import React from "react";
import Item from "./Item.js";
import styles from './App.module.scss';

export default function ItemsList(props){
    return <ul className={styles.ui_list}>
        {props.items.map((item) => (
          <li className={styles.ui_item_list} key={item.id}>
            <Item info={item}/>
            <button
              className={styles.item_button}
              onClick={props.onDeleteClick(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
}