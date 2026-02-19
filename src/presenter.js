import saludar from "./saludador.js";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const nombreInput = document.querySelector("#nombre");
const generoInput = document.querySelector("#genero");
const edadInput = document.querySelector("#edad");
const idiomaInput = document.querySelector("#idioma");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  const genero = generoInput.value;
  const edad = Number(edadInput.value);
  const idioma = idiomaInput.value;

  div.innerHTML = "<p>" + saludar(nombre, genero, edad, idioma) + "</p>";
});

