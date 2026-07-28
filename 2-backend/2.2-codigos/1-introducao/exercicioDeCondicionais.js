console.log("\n---------------Exercicio 1---------------");

/**  exercicio1: Peça a idade da pessoa em uma variável. 
 * Se for 18 ou mais, mostre "Pode comprar bebida 
 * alcoólica". Caso contrário, mostre "Venda proibida 
 * para menores de 18 anos".
 */


const idade = 47;

if(idade >=18){
    console.log("\nPode comprar bebida alcoólica");
}else{
    console.log("\nVenda proibida para menores de 18 anos");
}

console.log("\n---------------Exercicio 2---------------");

/**  exercicio2: Crie uma variável horaAtual. 
 * Se estiver entre 6 e 12, mostre "Bom dia"; 
 * entre 12 e 18, "Boa tarde"; 
 * caso contrário, "Boa noite".
 */

const horaAtual = 15;

if(horaAtual >=6 && horaAtual <12){
    console.log("\nBom dia");
}else if(horaAtual >=12 && horaAtual <18 ){
    console.log("\nBoa tarde");
}else{
    console.log("\nBoa noite");
}

console.log("\n---------------Exercicio 3---------------");

/**  exercicio3: Crie uma variável com um número qualquer.
 *  Mostre se ele é positivo, negativo ou igual a zero.
 */

const numero = 5;

if(numero>0){
    console.log("\nO número é positivo");
}else if(numero === 0){
    console.log("\nO número é 0");
}else{
    console.log("\nO número é negativo");
}

console.log("\n---------------Exercicio 4---------------");

/**  exercicio4: Crie uma variável nota entre 0 e 10. 
 * Use if/else if/else para retornar: 
 * A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9) 
 */

const nota = 5;

if(nota >= 9 && nota <= 10){
    console.log("\nA nota é 'A'");
}else if(nota >=8 && nota < 9){
    console.log("\nA nota é 'B'");
}else if(nota >= 6 && nota < 8){
    console.log("\nA nota é 'C'");
}else if(nota >= 4 && nota <6){
    console.log("\nA nota é 'D'");
}else if(nota >=0 && nota < 4){
    console.log("\nA nota é 'E'");
}

console.log("\n---------------Exercicio 5---------------");

/**  exercicio5: Crie uma variável numero. 
 * Use o operador ternário para mostrar se ele é 
 * par ou ímpar.
 */

const numTeste = 7;

numTeste%2 == 0 ? console.log("\nO numero é par")
: console.log("\nO número é ímpar");

console.log("\n---------------Exercicio 6---------------");

/**  exercicio6: Crie uma variável opcao com valores 
 * de 1 a 3. Use switch para mostrar: 
 * 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
 */

const opcao = 1;

switch(opcao){
    case 1: console.log("\nRealizando um cadastro ...");
            break;
    case 2: console.log("\nLista de itens: ...");
            break;
    case 3: console.log("\nSaindo...");
            break;
    default: console.log("\nErro: uma opção não permitida foi selecionada");
            break;
}

console.log("\n---------------Exercicio 7---------------");

/**  exercicio7: Crie uma variável email. 
 * Se estiver vazia (""), mostre 
 * "Preencha o campo de e-mail". 
 * Caso contrário, mostre "E-mail válido".
 */

const email = "";

if(email){
    console.log("\nE-mail válido");
}else{
    console.log("\nPreencha o campo de e-mail");
}

console.log("\n---------------Exercicio 8---------------");

/**  exercicio8: Crie duas variáveis: senha e
 * senhaValida (valor true ou false, definido manualmente)
 *  Se senhaValida for verdadeira, mostre "Senha válida".
 *  Caso contrário, mostre "Senha muito curta".
 */

const senha = "********";

const senhaValida = false;

if(senhaValida){
    console.log("\nSenha válida");
}else{
    console.log("\nSenha muito curta");
}

console.log("\n---------------Exercicio 9---------------");

/**  exercicio9: Crie duas variáveis: saldoDisponivel 
 * e valorCompra. Se o saldo for suficiente, 
 * mostre "Compra aprovada". Caso contrário, 
 * "Saldo insuficiente".
 */

const saldoDisponivel = 145.64;
const valorCompra = 150;

if(saldoDisponivel >= valorCompra){
    console.log("\nCompra aprovada");
}else{
    console.log("\nSaldo insuficiente");
}

console.log("\n---------------Exercicio 10---------------");

/**  exercicio10: Crie três variáveis: nome, email, idade.
 * Crie também uma variável booleana chamada formularioValido
 * que indique se o formulário está válido (true ou false).
 * Se formularioValido for verdadeiro, 
 * mostre "Formulário enviado com sucesso".
 * Caso contrário, mostre "Por favor, 
 * preencha todos os campos corretamente".
 */

const nome10 = "Fulano de Tal"
const email10 = "teste@teste.com";
const idade10 = 27;
const formularioValido = true;

if(formularioValido){
    console.log("\nFormulário enviado com sucesso");
}else{
    console.log("\nPor favor, preencha todos os campos corretamente");
}

console.log("\n---------------FIM---------------");