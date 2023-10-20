const input = require ('readline-sync')

var nome = input.question('Informe seu primeiro nome? ')
var sobrenome = input.question('Informe seu sobrenome? ')
console.log(`Olá, ${nome} ${sobrenome}`)