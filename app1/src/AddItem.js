import React from "react";

export default function AddItem(props){
    function validationForm() {
        if (props.name && props.desc) {
            return "";
          } else if (props.name || props.desc) {
            return "заполните все поля";
          }
      }

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
      <div className="ui-validation">{validationForm()}</div>
      <input
        type="submit"
        className="ui-button"
        value="Добавить"
        disabled={props.name && props.desc ? false : true}
      />
    </div>
  </form>
}