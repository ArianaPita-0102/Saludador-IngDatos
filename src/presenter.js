import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});