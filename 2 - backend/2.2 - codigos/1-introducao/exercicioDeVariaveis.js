// Exercícios do modulo de introdução de js para backend


console.log('\n-----exercicio 1-----\n');

/*Exercício1: Declare três variáveis diferentes 
(uma para cada tipo: string, número e booleano) e 
atribua valores a elas. Em seguida, exiba o tipo de 
cada variável no console.*/ 

const nome = 'joão';
const matricula = 123456;
const matriculaAtiva = true;

console.log('a variavel nome é de tipo '+typeof(nome));
console.log('a variavel matricula é de tipo '+typeof(matricula));
console.log('a variavel matriculaAtiva é de tipo '+typeof(matriculaAtiva));



console.log('\n-----exercicio 2-----\n');

/* Exercício2: Crie duas variáveis, uma contendo seu
 primeiro nome e outra contendo seu último nome. Em 
 seguida, combine-as em uma terceira variável usando 
 o operador + e em uma quarta variável usando template
  strings. Por fim, imprima os resultados obtidos no 
  console.*/

const primeiroNome = 'Fillipe';
const ultimoNome = 'Barreto';
const nomeCompleto1 = primeiroNome+' '+ultimoNome;
const nomeCompleto2 = `${primeiroNome} ${ultimoNome}`;

console.log('O meu primeiro nome é:', primeiroNome);
console.log('O meu último nome é:', ultimoNome);
console.log('O meu nome completo é:',nomeCompleto1);
console.log('O meu nome completo é:', nomeCompleto2);

console.log('\n-----exercicio 3-----\n');

/*Exercicio3: Declare duas variáveis, uma contendo um 
número e outra contendo uma string. Em seguida, combine-as 
em uma terceira variável usando template strings para 
montar uma frase e exiba o resultado no console.*/

const numeroTel = 5511998567342;
const nomeDonaTel = 'Maria';
const frase = `O telefone de ${nomeDonaTel} é ${numeroTel}`;
console.log(frase);

console.log('\n-----exercicio 4-----\n');

/*Exercício4: Crie uma variável inicializada com um valor
de qualquer tipo e, em seguida, reatribua um novo valor
a essa variável. Imprima ambos os valores no console após
atribuí-los.*/

let saldo = 30;
console.log(`O saldo de Fernanda é de R$${saldo} no dia 31/05/2026`);
saldo = 1621;
console.log(`O saldo de Fernanda é de R$${saldo} no dia 05/06/2026`);

console.log('\n-----exercicio 6-----\n');

/*Exercício: Declare uma variável booleana que informa se 
está chovendo e utilize-a em uma estrutura condicional 
(if) para exibir uma mensagem informando se é preciso 
levar um guarda-chuva ou não dependendo do valor da 
variável.*/

const chovendo = true;
if(chovendo === true){
    console.log('leve um guarda chuva pois está chovendo!');
}else{
    console.log('Não precisa levar um guarda chuva pois não está chovendo!');
}
