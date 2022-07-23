// Algoritmo Sistema de Cadastro

const de = 30;
let da = 26;
let idade = 20;

if(da < de){
    console.log("Evento Permitido")

    if(idade > 18) {
        console.log("Cadastro Permitido");

    }
    else {
        console.log("Idade não Permitida");
    }

} else {
    console.log("Data invalida")
}