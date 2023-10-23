const input = require ('readline-sync')

var base, altura

base = parseFloat(input.question('Informe a base: '))
altura = parseFloat(input.question('Informe à altura: '))

// regra

console.log(`O volume é ${base * altura / 2} cm`)