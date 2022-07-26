// Algoritmo Sistema de Cadastro
// da -> Data Atual, de -> Data do Evento, qp -> Quantidade de Pessoas Cadastradas no Evento

const de = 30;
let da = 26;
let idade = 20;
let qp = 98;

if(qp < 100)
{
    console.log("Permitir Cadastro");

    if(da < de)
    {
        console.log("Evento Permitido");

        if(idade > 18) 
        {
            console.log("Cadastro Permitido");
        }
        else 
        {
            console.log("Idade não Permitida");
        }
    }  
    else 
    {
        console.log("Data invalida") ;
    }
}
else 
{
    console.log("Limite de Cadastro Excedido");
}