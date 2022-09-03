import React, { useState, useEffect } from "react";
import Item from "./Item";
export default function Shop() {
  const [list, setList] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        console.log(data);
        setList(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="shop">
      {list && list.map((item) => <Item info={item} />)}
    </div>
  );
}