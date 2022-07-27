import React, { useState } from "react";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";

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

  function handleChangeName(e){
    setName(e.target.value)
  }
  function handleChangeDesc(e){
    setDesc(e.target.value)
  }
  return (
    <>
      <AddItem 
      onHandleSubmitForm={handleSubmitForm} 
      name={name} 
      desc={desc}
      onHandleChangeName={handleChangeName} 
      onHandleChangeDesc={handleChangeDesc}
      />

      <div>{addText()}</div>

      <ItemsList items={items} onDeleteClick={handleDeleteClick}/>
    </>
  );
}
