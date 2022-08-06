import React from "react";

export default function AddItem(props){
    return <form onSubmit={props.onHandleSubmitForm}>
    <div className="inputContainer">
      <label htmlFor="name" className="ui-label">
        Название товара:
      </label>
      <input
        id="name"
        type="text"
        value={props.name}
        placeholder="Название товара"
        className="ui-textfield"
        onChange={props.onHandleChangeName}
      />
    </div>
    <div className="inputContainer">
      <label htmlFor="desc" className="ui-label">
        Описание товара:
      </label>
      <input
        id="desc"
        type="text"
        value={props.desc}
        placeholder="Описание товара"
        className="ui-textfield"
        onChange={props.onHandleChangeDesc}
      />
    </div>
    <div className="form-footer">
      <input
        type="submit"
        className="ui-button"
        value="Добавить"
        disabled={!props.valid}
      />
    </div>
  </form>
}