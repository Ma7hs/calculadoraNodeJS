/**************************************************************
Objetivo: Arquivo de Funções para realizar calculos matematicos
Data: 03/03/2023
Autor: Matheus Siqueira Silva
Versão: 1.0
***************************************************************/

//Primeiro jeito de realizar uma função (SOMAR | SUBTRAIR | DIVIDIR | MULTIPLICAR)
// function calcular(numero1, numero2, tipoCalculo) {   
//     let primeiroNumero = Number(numero1);
//     let segundoNumero = Number(numero2);
//     let operacao = tipoCalculo;
    
//     let resultado;
//     let status = true;

//     switch(operacao)
//     {
//         case "SOMAR" || "somar":
//             resultado = (primeiroNumero) + (segundoNumero);
//             break;

//         case "SUBTRAIR" || "subtrair":
//             resultado = (primeiroNumero) - (segundoNumero);
//             break;

//         case "MULTIPLICAR" || "multiplicar":
//             resultado = (primeiroNumero) *(segundoNumero);
//             break;

//         case "DIVIDIR" || "dividir":
//             if(segundoNumero == 0){
//                 console.log("ERROR: Não é possível fazer a divisão por 0");
//                 status = false;
//             }else{
//                 resultado = (primeiroNumero) / (segundoNumero);
//             }
//             break;

//         default:
//             console.log("ERROR: A operação informada não é válida! Confira sua entrada")
//             status = false;
//     };

//     if (resultado != undefined) {
//         return resultado;
//     } else {
//         return status = false;
//     };
// };


//Segunda maneira de escrever uma função dentro do JS



const calculoMatematico = function(numero1, numero2, tipoCalculo){
    let primeiroNumero = Number(numero1);
    let segundoNumero = Number(numero2);
    let operacao = tipoCalculo.toUpperCase();
    
    let resultado;
    let status = true;

    switch(operacao)
    {
        case "SOMAR" || "somar":
            resultado = somar(primeiroNumero, segundoNumero);
            break;

        case "SUBTRAIR" || "subtrair":
            resultado = subtrair(primeiroNumero, segundoNumero);
            break;

        case "MULTIPLICAR" || "multiplicar":
            resultado = multiplicar(primeiroNumero, segundoNumero);
            break;

        case "DIVIDIR" || "dividir":
            if(segundoNumero == 0){
                console.log("ERROR: Não é possível fazer a divisão por 0");
                status = false;
            }else{
                resultado = dividir(primeiroNumero, segundoNumero);
            }
            break;

        default:
            console.log("ERROR: A operação informada não é válida! Confira sua entrada")
            status = false;
    };

    if (resultado != undefined) {
        return resultado;
    } else {
        return status;
    };
};


//Todas essas funções serão privadas!
//Forma 3 de realizar uma função |  Modelo Arrow Function
const somar = (valor1,valor2) => Number(valor1) + Number(valor2);
const subtrair= (valor1,valor2) => Number(valor1) - Number(valor2);
const dividir = (valor1,valor2) => Number(valor1) / Number(valor2);
const multiplicar = (valor1,valor2) => Number(valor1) * Number(valor2);




module.exports = {
    calculoMatematico

}
