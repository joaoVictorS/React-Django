import React from "react";
import Item from "./Item";

export default function List(props) {
  const items = props.items;

  return (
    <div>
      <h2>{props.list_name}</h2>
      <ul>
        {items.map(item =>   <Item key={item.id} name={item.name} status={item.done} />  )}
      </ul>
    </div>
  );
}
