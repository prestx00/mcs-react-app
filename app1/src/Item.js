import React, { useState,useEffect } from "react";
import styles from './App.module.scss';

export default function Item(props) {
  const [total, setTotal] = useState(()=> {
    const value = localStorage.getItem("total");
    if(!value){
      return 0; 
    } return value;
  });

  const { info } = props;

  useEffect(()=>{
    localStorage.setItem("total", total);
  }, [total]);

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className={styles.item_info}>
        <h2 className={styles.item_title}>{info.name}</h2>
        <p className="item-desc">{info.desc}</p>
      </div>
      <div className={styles.item_quantity}>
        <button
          className={styles.item_button}
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className={styles.item_total}>{total ? total : ""}</h3>
        <button className={styles.item_button} onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}