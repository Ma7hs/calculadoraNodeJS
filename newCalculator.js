/*********************************************
Objetivo - Realizar cálculos matemáticos  
Data- 03/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
**********************************************/

var matematica = require ("./models/calculadora.js");
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

        inputData.question("Escolha uma operação matemática: (SOMAR | DIVIDIR | MULTIPLICAR | SUBTRAIR) \n", function(tipoCalculo){

            let calculo = tipoCalculo;
            let resultado;

            if(primeiroNumero == " " || segundoNumero == " " || calculo == " "){
                console.log("ERROR: Não é possível calcular sem preencher todos os campos.");
                inputData.close();
            }else if(isNaN(primeiroNumero) || isNaN(segundoNumero)){
                console.log("ERROR: Digite um valor numérico válido")
                inputData.close();
            }else{
                resultado = matematica.calculoMatematico(primeiroNumero, segundoNumero, calculo);
                inputData.close()

                //Validar se o retorno da função Calcular for falso, ele fecha o programa com o .close | Caso o contrário, ele mostra o resultado da operação na tela!
                if(resultado == false && typeof(resultado) == "boolean"){
                    inputData.close
                }else{
                    console.log(resultado);
                }
            }
        })
    })
})


