import React from "react";

export default function Item(props) {
  const status = props.status;
  console.log(props.status);

  return (
    <li>
      {props.name} Status: {status ? <div>Completo</div> : <div>Incompleto</div>}
    </li>
  );
}
