import React from "react";
import ReactDOM from "react-dom";

const Elemento = () => <p>Hola Mundo</p>;

ReactDOM.render(
  <React.StrictMode>
    <Elemento />
  </React.StrictMode>,
  document.getElementById("root")
);
