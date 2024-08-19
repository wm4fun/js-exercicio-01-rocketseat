// Exercício 01

// Identificando o usuário e informando a tarefa
let nameUser = prompt(`Bem vindo! Qual é o seu nome?`)

alert(`Olá ` + nameUser + `! Iremos solicitar que você digite dois números... Vamos lá?!`)

// Inserindo dois números
let firstNumber = prompt(`Digite o primeiro número!`)
let secondNumber = prompt(`Digite o segundo número!`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

// Fórmulas aplicadas
const sum = (firstNumber + secondNumber).toFixed(2)
const sub = (firstNumber - secondNumber).toFixed(2)
const multi = (firstNumber * secondNumber).toFixed(2)
const div = (firstNumber / secondNumber).toFixed(2)
const restDiv = (firstNumber % secondNumber).toFixed(2)

// Resultados dos cálculos de acordo com as fórmulas
alert(`A soma destes números é: ` + sum + `!`)
alert(`A subtração destes números é: ` + sub + `!`)
alert(`A multiplicação destes números é: ` + multi + `!`)
alert(`A divisão destes números é: ` + div + `!`)
alert(`O resto da divisão destes números é: ` + restDiv + `!`)

// Descobrindo se a soma dos dois números digitados é par ou ímpar (even or odd)
if (sum % 2 == 0) {
    alert(`O resultado da soma dos dois números digitados é um número par!`)
} else {
    alert(`O resultado da soma dos dois números digitados é um número ímpar!`)
}

// Verifique se os dois números inseridos são iguais ou diferentes
if (firstNumber === secondNumber) {
    alert(`Os dois números que você digitou, são iguais!`)
} else {
    alert(`Os dois números que você digitou, são diferentes!`)
}

