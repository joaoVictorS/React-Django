import React from "react";
import Item from "./Item";

export default function List(props) {
  return (
    <div>
      <h2>{props.list_name}</h2>
      <ul>
        <li>
          <Item name="asd" />
          meu item 1
        </li>
        <li>
          <Item name="asd" />
          meu item 2
        </li>
      </ul>
    </div>
  );
}
