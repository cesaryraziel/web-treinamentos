const input = require ('readline-sync')

var nome = input.question('Informe seu primeiro nome? ')
var sobrenome = input.question('Informe seu sobrenome? ')
var anoDeNascimento =
    parseInt(input.question('Qual ano que você nasceu? '))

var anoAtual = new Date().getFullYear()

console.log(typeof(anoDeNascimento))

var calcularIdade = anoAtual - anoDeNascimento

console.log(`Olá, ${nome} ${sobrenome} você
    tem ${calcularIdade} anos`)