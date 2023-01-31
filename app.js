var readline = require('readline');
var inputData = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Bem-Vindo a Calculadora em NodeJS");
console.log("Escolha uma das opções abaixo!")
console.log("1 - ADIÇÃO \n" + "2 - SUBTRAÇÃO \n" + "3 - MULTIPLICAÇÃO \n" + "4 - DIVISÃO");

inputData.question("Para realizar as operações, primeiro digite a operação desejada: ", 
function(calculadora){
    let operacaoCalculadora = calculadora;

        //Tratamos um ERRO que caso usuário não digite uma operação que corresponda a Adição || Subtração || Multiplicação || Divisão
        if(operacaoCalculadora == 1 || operacaoCalculadora == 2 || operacaoCalculadora == 3 || operacaoCalculadora ==4){
            inputData.question("Digite o primeiro número: ", function(valor1){
                let primeiroNumero = valor1;
                
                    inputData.question("Digite o segundo número: ", function(valor2){
                        let segundoNumero = valor2;
    
                        //Tratamos um ERRO caso o usuário digite um NaN ou digite algo vazio!
                        if(isNaN(primeiroNumero) || isNaN(segundoNumero) || primeiroNumero == "" || segundoNumero == ""){
                            console.log("ERROR: Número inserido incorretamente!")
                        }else{
                            if(operacaoCalculadora == 1){
                                soma = Number.parseFloat(primeiroNumero) + Number.parseFloat(segundoNumero);
                                console.log("O resultado da operação de Adição é: " + soma);
                            }else if(operacaoCalculadora == 2){
                                subtracao = Number.parseFloat(primeiroNumero) - Number.parseFloat(segundoNumero);
                                console.log("O resultado da operação de Subtração é: " + subtracao);
                            }else if(operacaoCalculadora == 3){
                                multiplicacao = Number.parseFloat(primeiroNumero) * Number.parseFloat(segundoNumero);
                                console.log("O resultado da operação da Multiplicação é: " + multiplicacao);
                            }else{
                                divisao = Number.parseFloat(primeiroNumero) / Number.parseFloat(segundoNumero);
                                console.log("O resultado da operação da Divisão: " + divisao);
                            }
                        }
                    })
            })
        }else{
            console.log("ERROR: Insira uma opção válida de operação!")
        }
})