const input = require ('readline-sync')

var nome = input.question('Informe seu primeiro nome? ')
var sobrenome = input.question('Informe seu sobrenome? ')
var idade = input.question('Informe sua idade? ')
console.log(`Olá, ${nome} ${sobrenome} você tem ${idade} anos`)