const prompt = require("prompt-sync")();

const montoCuenta = parseFloat(prompt("Ingrese el monto total de la cuenta: "));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina"));

const propina = montoCuenta * (porcentaje / 100);
const total = montoCuenta + propina;

console.log(`Propina: $${propina.toFixed(2)}`);
console.log(`Total a pagar: $${total.toFixed(2)}`);
