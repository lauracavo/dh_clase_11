const fs = require("fs"); //para requerir el File System

function importar(nombreDeLaMarca) {
  if (nombreDeLaMarca === "Hot Toys") {
    //para leer el archivo json
    const figurasSolicitadas = fs.readFileSync(
      "./datos/figuras1.json",
      "utf-8"
    );
    // para convertir de formato JSON a js
    const figurasArray = JSON.parse(figurasSolicitadas);
    return figurasArray;
  } else if (nombreDeLaMarca === "Bandai") {
    //para leer el archivo json
    const figurasSolicitadas = fs.readFileSync(
      "./datos/figuras2.json",
      "utf-8"
    );
    // para convertir de formato JSON a js
    const figurasArray = JSON.parse(figurasSolicitadas);
    return figurasArray;
  } else if (nombreDeLaMarca === "Star Wars") {
    //para leer el archivo json
    const figurasSolicitadas = fs.readFileSync(
      "./datos/figuras3.json",
      "utf-8"
    );
    // para convertir de formato JSON a js
    const figurasArray = JSON.parse(figurasSolicitadas);
    return figurasArray;
  }
}

module.exports = importar;
