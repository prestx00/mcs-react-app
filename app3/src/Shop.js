import React, { useState, useEffect } from "react";
import Item from "./Item";
import useFetch from "./useFetch";

export default function Shop() {
  const [list, setList] = useState();

  const {get, loader} = useFetch();

  useEffect(()=>{
    get("https://covid-shop-mcs.herokuapp.com/")
    .then(data=> {
      setList(data)
    })
    .catch(error => console.error(error))
  },[get])

  return (
    <div className="shop">
      {loader ? <p>Загрузка...</p> : ""}
      {!!list && list.map((item) => <Item info={item} />)}
    </div>
  );
}