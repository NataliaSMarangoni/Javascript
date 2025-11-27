//Exercicio 06
// Escreva um programa que solicite o ano de nascimento de uma pessoa
//uma pessoa maior de 18 anos.



let anoNascimento = parseInt (prompt("Digite o ano de nascimento :"))

let anoAtual = new Date (). getFullYear ()

let idade = anoAtual - anoNascimento 

if (idade >=18){
    console.log ("Maior de idade")
    console.log("Sua idade é" + idade)
}

else{
    console.log("Menor de idade")
    console.log("Sua idade é" + idade)
}
