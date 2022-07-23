// Algoritmo Sistema de Cadastro
//de --> Data do Evento, da --> Data Atual, PA --> Quantidade de Participantes

const de = 30;
let da = 26;
let idade = 20;
let PA = 80;

if(da < de){
    console.log("Evento Permitido")

    if(idade > 18) 
    {
        console.log("Cadastro Permitido");

        if(PA < 100){
            console.log("Cadastro Permitido por Quantidade de Participantes")
        } 
        else
        {
            console.log("Quantidade de Participantes Excedida")
        }

    }
    else {
        console.log("Idade não Permitida");
    }

} else {
    console.log("Data invalida")
}