const importar = require("./collectibles.js"); // el "importar" se convierte en la funcion que estamos importando desde collectibles.js

let hotToys = importar("Hot Toys"); // Llama a la función importada
let bandai = importar("Bandai");
let starWars = importar("Star Wars");

/* console.log(hotToys);
console.log(bandai);
console.log(starWars); */

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/* console.log(unifiedCollectibles); */

const collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    this.figuras.forEach(function (figurita) {
      console.log(figurita);
    });
  },
  figuresByBrand: function (marcaRecibida) {
    let figuresByBrand = this.figuras.filter(function (figurita) {
      return figurita.marca === marcaRecibida;
    });
    console.log(figuresByBrand);
  },
};

collectibles.listFigures();
collectibles.figuresByBrand("Bandai");
