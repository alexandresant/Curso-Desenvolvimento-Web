// Tipos de dados
let nome = "João";
let idade = 25;
let estuda = true;
let endereco;
let nada = null;

console.log(typeof nome);     // string
console.log(typeof idade);    // number
console.log(typeof estuda);   // boolean
console.log(typeof endereco); // undefined
console.log(typeof nada);     // object (isso é uma peculiaridade do JS)

// Operadores aritméticos
let soma = 10 + 5;
let subtracao = 10 - 2;
let multiplicacao = 5 * 2;
let divisao = 10 / 2;
let resto = 10 % 3;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Resto da divisão:", resto);

// Operadores de comparação
console.log(10 == "10");   // true (comparação apenas de valor)
console.log(10 === "10");  // false (comparação de valor e tipo)
console.log(10 != 5);      // true
console.log(10 !== "10");  // true

// Operadores lógicos
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

// isNaN
console.log(isNaN("abc"));   // true
console.log(isNaN(123));     // false
