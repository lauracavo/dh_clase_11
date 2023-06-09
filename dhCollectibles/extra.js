let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let [valor0, , valor2, , valor4, ...restoValores] = numeros;

console.log(valor0);
console.log(valor2);
console.log(valor4);
console.log(restoValores);
