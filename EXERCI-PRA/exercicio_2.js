const input = require ('readline-sync')

var n1, n2, result,

n1 = parseFloat(input.question('Informe um número: '))
n2 = parseFloat(input.question('Informe um número: '))

result = n1 - n2
console.log(`O resultado é ${result}`)