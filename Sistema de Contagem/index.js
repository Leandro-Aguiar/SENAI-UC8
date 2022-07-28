//Algoritmo Sistema de Contagem

const QA = 20;

for(let n = 0 ; n < QA ; n++){
    if ( n == 0){

        console.log(n + " - zero")
        console.log("-----------")
    }
    if ( n%2 == 0 && n!=0){

        console.log(n + " - Número Par")
        console.log("-----------")

    } else if( n!= 0) {

        console.log(n + " - Número Impar")
        console.log("-----------")
    }

}