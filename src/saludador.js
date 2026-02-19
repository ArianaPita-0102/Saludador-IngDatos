function saludar(nombre, genero) {
  const hora = new Date().getHours();

  let saludoHora;

  if (hora < 12) {
    saludoHora = "Buenos días";
  } else if (hora < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let titulo = "";

  if (genero === "masculino") {
    titulo = "Señor";
  } else if (genero === "femenino") {
    titulo = "Señora";
  }

  return saludoHora + " " + titulo + " " + nombre;
}

export default saludar;
