const input = require ('readline-sync')

var tipoCombustivel, quantidadeLitro, valor, desconto

tipoCombustivel = input.question('O que deseja abatecer')
quantidadeLitro = parseFloat(input.question('Informe a quantidade '))

switch(tipoCombustivel) {
    case 'A':
        if (quantidadeLitro >= 20) {
            valor = (quantidadeLitro * 2.90)
            desconto = valor - (valor * 0.03)
            console.log('O valor à pagar no ALCOOL é de R$ ', desconto.toFixed)
        } else {
            valor = (quantidadeLitro * 2.90)
            desconto = valor - (valor * 0.05)
            console.log('O valor à pagar no ALCOOL é de R$ ', desconto.toFixed(2))
        }
        break
    case 'G':
        if (quantidadeLitro >= 20) {
            valor = (quantidadeLitro * 3.30)
            desconto = valor - (valor * 0.04)
            console.log('O valor à pagar na GASOLINA é de R$ ', desconto.toFixed(2))
        } else {
            valor = (quantidadeLitro * 3.30)
            desconto = valor - (valor * 0.06)
            console.log('O valor à pagar na GASOLINA é de R$ ', desconto.toFixed(2))
        }
        break
    default:
        console.log('Paramentro inválido')
        break
}