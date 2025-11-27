// Fazer um menu de exercícios utilizando os exemplos e
// exercícios feitos em aula.

let opcaoEscolhida = 0;


do{

opcaoEscolhida =  parseInt(prompt(`
    ========MENU DE EXERCìCIOS========

    Digite o número de uma das opçoes:
    0 - Sair
    1 - Login
    2 - IMC
    3 - Par ou Impar
    4 - Média do aluno
    5 - Número crescente, número decrescente e aleatório 
    ====================================
    `));

    switch (opcaoEscolhida) {
        case 0:
           alert("Volte sempre!!") ;
            break;
        case 1:
          login ();  
            break;
        case 2:
            calculoIMC();
            break;
        case 3:
            verificarNumeroImparOuPar();
            break;
        case 4:
            calculoMediaDoAluno();
            break;
        case 5:
            VerificarSequenciaNumeros();
            break;
      
        default:
            alert("Opção invalida!!")
            break;
    }

}
while(opcaoEscolhida != 0);

function login() {
    let login= prompt("Digite seu usuário:")
let senha= prompot("Digite senha:")
if (login == "admin" && senha == "senha123"){
    console.log("Login bem sucedido!")
}
else
{ console.log ("Voce não ten permissao de acesso!")} 
  alert("Login realizado com sucesso")
}

function calculoIMC(){
let peso = parseFloat (prompt("Informe seu peso( em Kg):"))
let altura = parseFloat(prompt("Informe sua altura(em metros):"))

let imc = peso / (altura*altura)

console.log("Seu IMC é :"+ imc )

if (imc < 18.5){
    console.log("abaixo do peso")
}
else if (imc >=  18.5 && imc <= 24.9){
    console.log("peso normal")
}

else if (imc >=  25 && imc <= 29.9){
    console.log("sobrepeso")
}

else if (imc >=  30 && imc <= 34.9){
    console.log("Obessidade grau 1")
}

else if (imc >=  35 && imc <= 39.9){
    console.log("Obessidade grau 2")
}

else if (imc >=  30 && imc <= 34.9){
    console.log("Obessidade grau 1")
}

else{
    console.log("Obesidade grau 3")
}

}

function verificarNumeroImparOuPar(){
let numero = parseInt (prompt("Informe um Número inteiro:"))

if (numero%2 == 0 ){
    console.log ("Número é par")
}
else {
    console.log("O Número é ímpar")
}
}

function calculoMediaDoAluno(){
let nota1 = parseFloat (prompt("Digite sua primeira nota:"))
let nota2 = parseFloat (prompt("Digite sua segunda nota."))
let nota3 = parseFloat (prompt("Digite a sua terceira nota."))
let nota4 = parseFloat (prompt("Digite sua quarta nota"))

let media = (nota1+nota2+nota3+nota4)/4

console.log("A media do aluno é"+media)

if (media >=7){
    console.log ("Aprovado!")
}

else if  (media < 7 && media >=5 ){
    console.log ("Recuperação!")
  }
  else{
    console.log("Reprovado")
  }

}

function VerificarSequenciaNumeros (){
let numero01 = parseInt (prompt("Digite o primeiro número:"))
let numero02 = parseInt (prompt("Digite o segundo número:"))
let numero03 = parseInt (prompt("Digite o terceiro número:"))
if (numero01 < numero02 && numero02 > numero03)
     console.log("os números em ordem crescente!");
    
else{
    console.log("Os números  não estão em ordem crescente! ")
    }
}