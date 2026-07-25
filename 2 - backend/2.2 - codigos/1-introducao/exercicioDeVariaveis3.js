/**  exercicio1: Crie uma variável chamada nome e atribua seu nome completo. 
 * Depois, use console.log() para exibir a mensagem: "Olá, [nome]! 
 * Seja bem-vindo(a) ao curso de JavaScript!"
 */

console.log("\n---------------Exercicio 1---------------");

let nomeCompletoFillipe = 'Fillipe Andrtade Barreto';

console.log(`Olá, ${nomeCompletoFillipe}! Seja bem-vindo(a) ao curso de JavaScript`);

/**  exercicio2: Crie duas variáveis: anoAtual e anoNascimento. 
 * Calcule a idade da pessoa subtraindo os valores 
 * e exiba no console: "Você tem [idade] anos."
 */

console.log("\n---------------Exercicio 2---------------");

const anoNascimento = 2003;
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

console.log(`\nVocê tem ${idade} anos`); 


/**  exercicio3:  Crie três variáveis com os dados 
 * da sua localização: cidade, estado e pais. 
 * Em seguida, mostre no console: "Você está em Cidade - Estado, País."
 */

console.log("\n---------------Exercicio 3---------------");

let pais = "Brasil";
let estado = "Bahia";
let cidade = "Salvador";

console.log(`\nVocê está em ${cidade} - ${estado}, ${pais}`);


/**  exercicio4:  Crie uma variável chamada temCarteira com valor true ou false. 
 * Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
 */

console.log("\n---------------Exercicio 4---------------");

const temCarteira = true;

console.log("\n"+typeof(temCarteira));

/**  exercicio5: Crie uma variável saldo iniciando com 0. 
 * Depois, simule um depósito de 200 e um saque de 50. 
 * Mostre o saldo final no console com uma frase explicando.
 */

console.log("\n---------------Exercicio 5---------------");
let saldo = 0;

// depósito de 200

saldo +=  200;

// saque de 50

saldo -= 50;

console.log(`\nO saldo final da conta foi de: ${saldo}`);

/**  exercicio6:  Crie variáveis para três disciplinas: 
 * matematica, portugues e ciencias, contendo suas respectivas notas. 
 * Calcule e mostre a média final com uma mensagem.
 */

console.log("\n---------------Exercicio 6---------------");

let notaMatematica = Math.random() * (10.001 - 0) + 0; //forma de gerar aleatoriamente um número float entre 0 e 10
let notaPortugues = Math.random() * (10.001 - 0) + 0;
let notaCiencias = Math.random() * (10.001 - 0) + 0;

media = (notaCiencias + notaPortugues + notaMatematica)/3;

console.log(` \nA nota de Matemática foi: ${notaMatematica.toFixed(2)}`);

console.log(` \nA nota de Português foi: ${notaPortugues.toFixed(2)}`);

console.log(` \nA nota de Ciências foi: ${notaCiencias.toFixed(2)}`);

console.log(`\nA sua média final foi de: ${media}`);

/**  exercicio7: Crie uma variável chamada salario com valor 3000. 
 * Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo. 
 */

console.log("\n---------------Exercicio 7---------------");

let salario = 3000;

console.log(`\nDevido ao seu incrivel rendimento seu salario aumentou para ${(salario*1.1).toFixed(2)}`);

/**  exercicio8:  Simule um contador de cliques em um botão. 
 * Crie uma variável chamada cliques e, a cada "simulação de clique", 
 * atualize seu valor atribuindo o novo número diretamente. 
 * Mostre o total após 3 simulações.
 */

console.log("\n---------------Exercicio 8---------------");

let cliques = 0;

let quantiadeDeCliques = 3;

for(i = 0; i<quantiadeDeCliques; i++){
    cliques++;
    console.log(`\nCliques: ${cliques}`)
}

console.log(`\nQuantidade de cliques após as simulações: ${cliques}`);


/**  exercicio9:  Crie uma constante chamada PI com o valor 3.14. 
 * Tente alterar seu valor e observe o erro gerado. 
 * Depois, explique por que isso acontece.
 */

console.log("---------------Exercicio 9---------------");

const PI = 3.14;

//PI = 2;

//console.log(`\nO novo valor de PI é: ${PI}`);

console.log(`\nO erro gerado ao tentar fazer a mudança de valor em uma constante \nse deve ao fato de a palavra reservada const guardar um valor que não pode \nser alterado depois que declarado.`);


/**  exercicio10: Crie uma variável mensagem contendo uma string e 
 * outra numero contendo um número. Junte as duas em uma terceira variável 
 * e exiba o resultado e o tipo final no console usando typeof.
 */


console.log("---------------Exercicio 10---------------");

const frase1 = "o número escolhido por mim foi: ";

const numero = 42;

const frase2 = frase1+numero;

console.log(`\n${frase2}`);

console.log(`\n${typeof(frase2)}`);
