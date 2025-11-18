let idade = window.prompt("qual sya idade?")
if (idade >= 18) {
    console.log("Maior de idade ! Da-lhee!")
} else { console.log("Voce è menor e idade!") }

switch (idade) {
    case "18":
        console.log("Maior de idade ! Da-lhee!")
        break;

    case "27":
        console.log("Esta perto do 30")
        break;

    default:
        console.log("Nada a dizer")
        break;
}