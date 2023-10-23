const input = require ('readline-sync')

var velocidade, tempo, distancia

distancia = 435

// recebendo o valor em km/h e convertendo para m/s
velocidade = parseFloat(input.question('Informe a sua velocidade: ')) /3.6

tempo = distancia / velocidade

console.log(`Na velocidade de ${velocidade.toFixed(2)} m/s levará o tempo de ${tempo / 3600} h`)