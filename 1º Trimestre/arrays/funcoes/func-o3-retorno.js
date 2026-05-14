// funções de retorno exigem o termo "return"
// Permitem tornar dispositivos os dados processados 
// Reproveitamento e ações sequenciais
// podemos armazenar as funções de retorno
// a variaveis, funções, arrays, etc.

function meuSalario(salario) {
    const contaLuz = 145.0
    const aluguel = 1350.0
    const restoSalario = salario - (contaLuz+aluguel)
    //console.log(restoSalario) // não serve p/ usuário
    return `o resto do meu salario é R$${restoSalario.toFixed(2).replace(".",",")}`
}
const resto = meuSalario(21000)
console. log(resto)
