import React from "react";
import ReactDOM from "react-dom/client";
import MainBody from "./components/MainBody";

let fonts = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">`;

document.head.innerHTML += fonts;

console.log("I'm chatgpt");
let root = document.createElement("div");
// root.classList.add("overlay");
root.id = "addgpt_container";
document.body.append(root);

ReactDOM.createRoot(document.getElementById("addgpt_container")).render(
  <React.StrictMode>
    <MainBody />
  </React.StrictMode>
);
