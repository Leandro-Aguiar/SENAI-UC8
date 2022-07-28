// Algoritmo Sistema de Cadastro de Peças
//np = Numero de Peças, pp = Peso da Peça em gramas, qp = Quantidade de Peças


let np = "carburador";
let pp = 120;
let qp = 8;

if (qp < 10)
{
    console.log("----------------------------------")
    console.log("Capacidade Permitida para Cadastro")
    console.log("----------------------------------")

    if (np.length > 3)
    {
        console.log("Cadastro Permitido");
        console.log("----------------------------------")
        if (pp > 100)

        {
            console.log("Peso Permitido para Cadastro")
            console.log("----------------------------------")

        } else 
        {
            console.log("Peso Insuficiente para Cadastro")
            console.log("----------------------------------")

        }
    } else
    {
        console.log("Erro no Cadastro");
        console.log("----------------------------------")

    }
} else
{
    console.log("Capacidade da Caixa Excedida")
    console.log("----------------------------------")
}