import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value;
  const edad = Number(edadInput.value);

  div.innerHTML = "<p>" + saludar(nombre, genero, edad) + "</p>";
});

