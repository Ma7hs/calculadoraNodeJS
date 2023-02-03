/*********************************************
Objetivo - Realizar cálculos matemáticos  
Data- 03/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
**********************************************/

var calculo = require ("./models/calculate.js");
var readline = require('readline');
var inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Estamos armazenando o primeiro valor
inputData.question("Valor 1:\n", function(valor1){
    let primeiroNumero = valor1.replace(",",".");
    
    inputData.question("Valor 2: \n", function(valor2){
        let segundoNumero = valor2.replace(",",".");

        inputData.question("Escolha uma operação matemática: \n", function(tipoCalculo){
            let operacao = tipoCalculo.toUpperCase;
            let resultado;

            if(primeiroNumero == " " || segundoNumero == " " || operacao == " "){
                console.log("ERROR: Não é possível calcular sem preencher todos os campos.");
                inputData.close();
            }else if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
                console.log("ERROR: Digite um valor numérico válido")
                inputData.close();
            }else{

                resultado = calculo.calculoMatematico(primeiroNumero, segundoNumero, operacao);
                console.log(resultado);
                inputData.close()
            }
        })
    })
})


