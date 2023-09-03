const { uniq } = require("lodash");
const { arrayNumeros, arrayLetras } = require("./array")

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);