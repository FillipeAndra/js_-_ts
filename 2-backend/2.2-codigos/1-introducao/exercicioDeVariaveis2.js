console.log('-----Exercício 1-----\n');

/* Exercício1: Crie uma variável contendo uma frase. 
Em seguida, exiba no console o comprimento da frase 
e a mesma frase com letras maiúsculas.*/

const frase = 'aqui jás uma frase com pelo menos 7 palavras ou mais após contar os itens presentes neste enunciado';

console.log(`o comprimento da frase em caracteres é ${frase.length}`);
console.log(frase.toUpperCase());

console.log('\n-----Exercício2-----\n');

/*Exercicio2: Declare duas variáveis, uma inicializada 
com valor null e outra que não recebe atribuição 
(resultando em undefined). Exiba os valores no console. */

const nulo = null;
let indefinido;

console.log(nulo);
console.log(indefinido);

console.log('\n-----Exercício 3-----\n');

/*Exercicio3:  Crie 3 variáveis de tipos diferentes, 
utilize template strings para combinar os diferentes 
tipos de dados (number, string, boolean) em uma única 
string e exiba o resultado no console.*/

const fruta = 'abacate';
const quantidade = 10;
const status = true;

console.log(`João disse que no pé de ${fruta} tem ${String(quantidade)} frutos e eu posso atestar que é ${String(status)}.`);

console.log('\n-----Exercicio 4----\n');

/*Exercicio4: Crie uma variável numérica e uma string. 
Faça a conversão da variável numérica para string e da 
string para número. Exiba os tipos de dados resultantes 
no console.*/

let numero = 2;
let sNumero = '3';

numero = String(numero);
sNumero = Number.parseInt(sNumero);

console.log(typeof(numero));
console.log(typeof(sNumero));

console.log('\n-----Exercício 5-----\n');

/*Exercicio5:  Crie uma variável com uma string e 
utilize métodos de manipulação de strings, como 
toUpperCase, toLowerCase, slice ou outros, 
para modificar a string original. 
Exiba os resultados finais no console.*/
 
const frase2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

console.log(`a frase toda em letras maiúsculas fica: ${frase2.toUpperCase()}`);
console.log(`a frase toda em letras minúsculas fica: ${frase2.toLowerCase()}`);
console.log(`a primeira parte da frase é: ${frase2.slice(0,26)}`);