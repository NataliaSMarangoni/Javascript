// 6. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.

let numero = 1
let soma = 0 

while(numero <= 100){
    soma = soma + numero
    //soma += numero

    console.log(soma)
    // numero = numero + 1
    numero++
}

console.log("A soma dos números de 1 a 100 é: " + soma)