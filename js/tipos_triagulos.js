/**
 * O TRIANGULO
 * É EQUILATERO - OS 03 LADOS SÃO IGUAIS
 * É ISÓSCELES  - OS 02 LADOS SÃO IGUAIS
 * É ESCALENO   - OS 03 LADOS SÃO DIFERENTES
 */

var a, b, c

a = 5
b = 9
c = 9

if (a === b && a === c && b === c) {
    console.log('Este triangulo é equilatero')
}
else if(a === b && b!== c) {
    console.log('Este triangulo é isosceles - 1e')

}
else if(a === c && b !== c) {
    console.log('Este triangulo é isosceles - 2e')

}
else if(c === b && a !== c) {
    console.log('Este triangulo é isosceles - 3e')

}
else {
    console.log('Este triangulo é escaleno')
}