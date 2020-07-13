import { Controller } from "./js/app";
import "./styles/style.scss";

//Creating an event listener for the element  with a callback function.
document.addEventListener("DOMContentLoaded", function () {
  const generate = document.getElementById("btn-submit");
  // This callback function will execute when the element is clicked.
  generate.addEventListener("click", (e) => {
    e.preventDefault();
    Controller();
  });
});

export { Controller };
