// //Exercício 1
// let peso = parseFloat(prompt("Informe o seu peso"));
// let altura = parseFloat(prompt("Informe a sua altura"));
// let sexo = prompt("Informe o seu sexo");

// if (sexo === "Feminino") {
//   let peso = 62.1 * altura - 44.7;
//   console.log("O seu peso ideal é: " + peso);
// } 

// else if (sexo === "Masculino") {
//   let peso = 72.7 * altura - 58;
//   console.log("O seu peso ideal é: " + peso);
// } 

// else {

//   console.log("Dado inválido");
// }

// function impromePesoIdeal(peso) {
//     alert ("peso ideal: " + peso.toFixed(2));
//   }
  
//   function main () {
//     let peso = parseFloat(prompt("Informe seu peso"));
//     let altura = parseFloat(prompt("Informe sua altura"));
//     let sexo = prompt("Informe seu sexo" (M/F));
  
//     peso = calculaPeso(peso, altura, sexo.
//     toUpperCase())
//     imprimindoPesoIdeal(peso);
//   }
  
//   main();


function soma(number1, number2) {
    return number1 + number2;
  }

  function multiplicacao(number1, number2) {
    return number1 * number2;
  }

  function divisao(number1, number2) {
    if (number2 !== 0) {
      return number1 / number2;
    }
  }

  function subtracao(number1, number2) {
    return number1 - number2;
  }

  let numero1 = parseFloat(prompt("Digite um número"));
  let numero2 = parseFloat(prompt("Digite outro número"));
  
  let resultadoSoma = soma(numero1, numero2);
  console.log("A dos números é: " + resultadoSoma);
  
  let resultadoMultiplicacao = multiplicacao(numero1, numero2);
  console.log("A multiplicação dos números é: " + resultadoMultiplicacao);
  
  let resultadoDivisao = divisao(numero1, numero2);
  console.log("A divisão dos números é: " + resultadoDivisao);
  
  let resultadoSubtracao = subtracao(numero1, numero2);
  console.log("A subtração dos números é: " + resultadoSubtracao);
































// Saldo inicial
let saldo = 0;

// Função para realizar um depósito
function depositar(valor) {
  saldo += valor;
  console.log("Depósito de R$" + valor + " realizado.");
}

// Função para realizar um saque
function sacar(valor) {
  if (valor <= saldo) {
    saldo -= valor;
    console.log("Saque de R$" + valor + " realizado.");
  } else {
    console.log("Saldo insuficiente para saque.");
  }
}

// Função para consultar o saldo
function consultarSaldo() {
  console.log("Seu saldo é de R$" + saldo);
}

// Exemplo de uso das funções
depositar(100);
consultarSaldo();

sacar(50);
consultarSaldo();

sacar(100);
consultarSaldo();

  
