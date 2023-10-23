var nome, nota1, nota2, nota3, nota4, nota5, media

nome = 'Pedro Calao'
nota1 = 7
nota2 = 8
nota3 = 7.5
nota4 = 6
nota5 = 7.5

media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if(media >=7) {
    console.log(`O aluno ${nome} esta aprovado com a média ${media}`)
    }
else {
    console.log(`O aluno ${nome} esta reprovado com média ${media}`)
}