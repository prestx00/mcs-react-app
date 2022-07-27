import React, { useState } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const text = <p className="ui-title">Добавьте новый товар</p>;

  function handleSubmitForm(e) {
    e.preventDefault();
    setItems([...items, { id: items.length, name: name, desc: desc }]);
    setName("");
    setDesc("");
  }

  const handleDeleteClick = (id) => () => {
    setItems((prev) => prev.filter((el) => el.id !== id));
  };

  function addText() {
    if (items.length !== 0) {
      return "";
    }
    return text;
  }

  function validationForm() {
    if (name === "") {
      return "заполните все поля";
    } else if (desc === "") {
      return "заполните все поля";
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="inputContainer">
          <label htmlFor="name" className="ui-label">
            Название товара:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            placeholder="Название товара"
            className="ui-textfield"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="desc" className="ui-label">
            Описание товара:
          </label>
          <input
            id="desc"
            type="text"
            value={desc}
            placeholder="Описание товара"
            className="ui-textfield"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="ui-validation">{validationForm()}</div>
          <input
            type="submit"
            className="ui-button"
            value="Добавить"
            disabled={validationForm()}
          />
        </div>
      </form>

      <div>{addText()}</div>

      <ul className="ui-list">
        {items.map((item) => (
          <li className="ui-item-list" key={item.id}>
            <Item info={item} />
            <button
              className="item-button"
              onClick={handleDeleteClick(item.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
