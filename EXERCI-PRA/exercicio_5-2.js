const input = require ('readline-sync')

var altura, largura, profundidade

altura = parseFloat(input.question('Informe à altura: '))
largura = parseFloat(input.question('Informe à largura: '))
profundidade = parseFloat(input.question('Informe a profundidade: '))

// regra
// volume = altura * largura * profundidade
// console.log(`O volume é ${volume} cm`)

console.log(`O volume é ${altura} * ${largura} * ${profundidade} cm`)











var altura, largura, profundidade,

altura = 7
largura = 4
profundidade = 10

volume = (altura * largura * profundidade)

    console.log(`A caixa dágua tem a altura de ${altura}mts com a largura de ${largura}mts e com a profundidade de ${profundidade}mts `)