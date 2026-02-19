function saludar(nombre, genero, edad, idioma) {
  const hora = new Date().getHours();

  let saludoHora;

  if (idioma === "ingles") {
    if (hora < 12) {
      saludoHora = "Good morning";
    } else if (hora < 18) {
      saludoHora = "Good afternoon";
    } else {
      saludoHora = "Good evening";
    }
  } else {
    if (hora < 12) {
      saludoHora = "Buenos días";
    } else if (hora < 18) {
      saludoHora = "Buenas tardes";
    } else {
      saludoHora = "Buenas noches";
    }
  }

  let titulo = "";

  if (idioma === "ingles") {
    if (edad > 30) {
      titulo = genero === "masculino" ? "Mr." : "Ms.";
    } else {
      titulo = genero === "masculino" ? "Mr." : "Ms.";
    }
  } else {
    if (edad > 30) {
      titulo = genero === "masculino" ? "Sr." : "Sra.";
    } else {
      titulo = genero === "masculino" ? "joven" : "señorita";
    }
  }

  return saludoHora + " " + titulo + " " + nombre;
}

export default saludar;
