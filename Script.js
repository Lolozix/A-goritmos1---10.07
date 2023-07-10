//Exercício 1
let peso = parseFloat(prompt("Informe o seu peso"));
let altura = parseFloat(prompt("Informe a sua altura"));
let sexo = prompt("Informe o seu sexo");

if (sexo === "Feminino") {
  let peso = 62.1 * altura - 44.7;
  console.log("O seu peso ideal é: " + peso);
} 

else if (sexo === "Masculino") {
  let peso = 72.7 * altura - 58;
  console.log("O seu peso ideal é: " + peso);
} 

else {

  console.log("Dado inválido");
}