import React from "react";
import ReactDom from "react-dom";
import FormContainer from "./components/container/FormContainer";
const Div = document.createElement("div");
Div.setAttribute("id", "root")
document.body.appendChild(Div)

ReactDom.render(
  <div>
    <FormContainer></FormContainer>
  </div>,
  document.getElementById("root")
);