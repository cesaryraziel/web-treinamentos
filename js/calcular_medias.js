var nome, nota1, nota2, nota3, nota4, media

nome = 'Toinho Costa'
nota1 = 7.5
nota2 = 7
nota3 = 5.5
nota4 = 6

media = (nota1 + nota2 + nota3 + nota4) / 4

if(media >=7) {
    console.log(`O aluno ${nome} esta aprovado com a média ${media}`)
    // console.log('O aluno '+nome+' esta aprovado com a média '+media)
}
else {
    console.log(`O aluno ${nome} esta reprovado com média ${media}`)
}