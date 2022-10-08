// console.log('helloword')

// let linha = 123
// let letra = 321
// console.log(linha/letra)

// console.log(17 / 2)

let nota1 = 9
let nota2 = 5
let nota3 = 10
let nota4 = 10
let resultado = (nota1 + nota2 + nota3 + nota4) / 4

if (resultado >= 7) {
    console.log(resultado, " - APROVADO")
} else {
    console.log(resultado, " - REPROVADO")
}

function calculaNota (...notas) {
    let resultado = notas.reduce(function (notaAtual, proximaNota) {
        return notaAtual + proximaNota
    }, 0)

    return resultado / notas.length
}

let notaCalculada = calculaNota(9, 5, 10, 10, 5, 6, 9)

if (notaCalculada >= 7) {
    console.log(notaCalculada.toFixed(2), " - APROVADO")
} else {
    console.log(notaCalculada.toFixed(2), " - REPROVADO")
}