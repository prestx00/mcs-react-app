import React, { useState } from "react";
import styles from "./App.module.scss";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className={styles.item}>
      <img className={styles.image} src={info.image} alt="" />
      <div className={styles.item_info}>
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className={styles.item_quantity}>
        <button
          className={styles.item_less}
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className={styles.item_total}>{total ? total : ""}</h3>
        <button className={styles.item_more} onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}