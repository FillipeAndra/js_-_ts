console.log("---------------Exercicio 1---------------");

/**  exercicio1:  Crie uma variável idade.
* Exiba no console o resultado da expressão 
* que verifica se a idade é maior ou igual a 18.
 */

const idade = 34;

const maiorDeIdade = idade>=18;

console.log("\nA pessoa é de maior?: ",maiorDeIdade);

console.log("\n---------------Exercicio 2---------------");

/**  exercicio2: Crie duas variáveis com notas de um aluno.
 * Calcule a média e exiba no console o resultado da 
 * expressão que verifica se a média é maior 
 * ou igual a 7. 
 */

const nota1 = 5.92;
const nota2 = 8.19;

const passou = ((nota1+nota2)/2) >= 7;

console.log("\nA(O) aluna(o) passou?: ", passou);

console.log("\n---------------Exercicio 3---------------");

/**  exercicio3: Crie uma variável 
 * valorCompra com 35.90 e valorPago com 50. 
 * Calcule e mostre o troco a ser devolvido.   
 */

const valorCompra = 35.9;
const valorPago = 50;

console.log(`\nO valor do troco é de: R$${(valorPago-valorCompra).toFixed(2)}`);


console.log("\n---------------Exercicio 4---------------");

/**  exercicio4:  Crie duas variáveis com senhas 
 * digitadas em momentos diferentes.
 * Exiba no console o resultado da comparação 
 * que verifica se as senhas são iguais.
 */

const senha1 = '********';

console.log(`\nA senha 1 é: ${senha1}`);

const senha2 = '***9****';

console.log(`\nA senha 2 é: ${senha2}`);

console.log(`\nAs duas senhas são iguais?: ${senha1 === senha2}`);


console.log("\n---------------Exercicio 5---------------");

/**  exercicio5:  Crie as variáveis totalAulas e faltas.
 * Calcule o limite de faltas permitido (25% do total) 
 * e exiba no console o resultado da expressão que 
 * verifica se as faltas ultrapassam esse limite.
 */

const totalAulas = 86;

const faltas = 24;

console.log(`\nA pessoa foi reprovada por falta?: ${faltas >(totalAulas*0.25)}`);


console.log("\n---------------Exercicio 6---------------");

/**  exercicio6: Crie duas variáveis booleanas: temLogin e 
 * temSenha. Exiba no console o resultado da expressão 
 * lógica que verifica se ambas são verdadeiras.  
 */

const temLogin = true;

const temSenha = false;

console.log(`\nO login e a senha estão preenchidos?: ${temLogin == true && temSenha == true}`);

console.log("\n---------------Exercicio 7---------------");

/**  exercicio7: Crie uma variável booleana 
 * chamada disponível. Mostre seu valor negado no console, 
 * ou seja, se estiver disponível, 
 * exiba que não está, e vice-versa.
 */

const disponivel = true;

console.log(`\nO médico está disponível para atender agora?: ${!disponivel}`);

console.log("\n---------------Exercicio 8---------------");

/**  exercicio1: Crie duas variáveis numéricas.
 * Exiba no console o resultado da expressão 
 * que verifica se: os dois números são pares e
 * os dois números são iguais.
 */

const numero1 = 5;
const numero2 = 8;

console.log(`\nAmbos os números são pares?: ${numero1%2 === 0 && numero2%2 === 0}`);
console.log(`\nAmbos os números são ímpares?: ${numero1%2 !== 0 && numero2%2 !== 0}`);

console.log("\n---------------Exercicio 9---------------");

/**  exercicio9: Calcule quanto é 15% de 120 
 * usando operadores matemáticos. 
 * Mostre a frase: "15% de 120 é igual a X."
 */

console.log(`\n15% de 120 é igual a ${(120*0.15).toFixed(2)}`);


console.log("\n---------------Exercicio 10---------------");

/**  exercicio10: Escreva a expressão 2 + 3 * 5. 
 * Mostre o resultado e explique por que a multiplicação 
 * foi feita antes da soma.
 */

console.log(`\nMatematicamente primeiro se avalia os números da esquerda para a direita.\nMas caso os operadores sejam de multiplicação ou de divisão primeiro se faz a conta deles\ndepois segue o restante da conta da esquerda para a direita,\na não ser que tenha parênteses que tem preferência ante os 2 últimos operadores citados. \nÀ exemplo de 2+3*5 que devido ao fato da multiplicação\nvir primeiro nesse caso o resultado é: ${2+3*5}`);

console.log("\n---------------FIM---------------");