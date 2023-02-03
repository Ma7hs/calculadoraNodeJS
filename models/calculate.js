/**************************************************************

Objetivo: Arquivo de Funções para realizar calculos matematicos
Data: 03/03/2023
Autor: Matheus Siqueira Silva
Versão: 1.0
***************************************************************/

//Realizar calculo matematico (SOMAR | SUBTRAIR | DIVIDIR | MULTIPLICAR)
function calculoMatematico(numero1, numero2, tipoCalculo) {
    
    let primeiroNumero = Number(numero1);
    let segundoNumero = Number(numero2);
    let operacao = tipoCalculo;
    let resultado;

    if (operacao == "SOMAR") {
        resultado = (primeiroNumero) + (segundoNumero);
    } else if (operacao == "SUBTRAÇÃO") {
        resultado = (primeiroNumero) - (segundoNumero);
    } else if (operacao == "MULTIPLICAR") {
        resultado = (primeiroNumero) *(segundoNumero);
    } else if (operacao == "DIVIDIR") {
        resultado = (primeiroNumero) / (segundoNumero);
    } else {
        console.log("Operação não é válida no nosso sistema!")
        inputData.close();
    }

    if (resultado != undefined) {
        return resultado;
    } else {
        return false;
    }



}

function validaValores(){



}

module.exports = {
    calculoMatematico
}
