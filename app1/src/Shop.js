import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList.js";
import AddItem from "./AddItem.js";
import {Helmet} from "react-helmet";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState(()=>{
    const value = localStorage.getItem("item");
    if(!value){
      return [];
    } return JSON.parse(value);
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  const text = <p className="ui_title">Добавьте новый товар</p>;
  
  useEffect(()=> {
    localStorage.setItems("item", JSON.stringify(items));
  }, [items]);

  function handleSubmitForm(e) {
    e.preventDefault();

    if(!name){
      setValid("Введите название");
      return;
    }
    if(!desc){
      setValid("Введите описание");
      return;
    }

    setItems([...items, { id: uuid(), name: name, desc: desc }]);
    setName("");
    setDesc("");
    setValid("");
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
  function caption(){
    if (items.length === 0) {
      return "Товары отсутствуют"
    } return `${items.length} товаров`
  }
  return (
    <>
    <Helmet>
      <title>{`${caption()}`}</title> 
    </Helmet>
      <AddItem 
      onHandleSubmitForm={handleSubmitForm} 
      name={name} 
      desc={desc}
      onHandleChangeName={handleChangeName} 
      onHandleChangeDesc={handleChangeDesc}
      valid={valid}
      />

      <div>{addText()}</div>

      <ItemsList items={items} onDeleteClick={handleDeleteClick}/>
    </>
  );
}