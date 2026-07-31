console.log("\n----------QUESTAO 1----------");

//*exercicio1: Use um for para mostrar no console 
// os números de 1 até 10, um por linha
// */

for(let i =1; i <=10; i++){
    console.log(i)
}

console.log("\n----------QUESTAO 2----------");

//**exercicio2: Some todos os números de 1 a 100. 
// Mostre o resultado no final com uma mensagem explicativa. */

let somador = 0;

for(let i =1; i <=100;i++){
    somador+=i;
}

console.log(`\nO resultado da soma é: ${somador}`);

console.log("\n----------QUESTAO 3----------");

//**exercicio3: Peça um número e mostre a tabuada desse número 
// (de 1 a 10) usando um for. */

const entrada = 7;

for(let i = 1; i <= 10;i++){
    console.log(`\n${entrada} X ${i} = ${entrada*i}`);
}

console.log("\n----------QUESTAO 4----------");

//**exerceicio4: Use while para contar de 10 até 0 no console. 
// Mostre uma mensagem no fim: "Contagem finalizada!". */


let contagem = 10;

while(contagem > 0){
    console.log(`\n${contagem}`);
    contagem--;
}

console.log("\n----------QUESTAO 5----------");

//**exercicio5: Simule a digitação de números usando uma variável numeroDigitado.
//Use um do...while para repetir a execução até que o valor seja 0.
//Conte quantos números diferentes de zero foram digitados e mostre o total no console ao final.

// Observação:
//Considere que o valor de numeroDigitado é alterado manualmente a cada repetição. */

let numeroDigitado = -10;
 
let quantidadeDigitada = 0;

let contadorNumerico = 0;

do{
    console.log(`\nO número digitado foi: ${numeroDigitado}`);
    if(numeroDigitado > 0){
        contadorNumerico++;
    }
    numeroDigitado+=2;
    quantidadeDigitada--;

 
}while(quantidadeDigitada>0);

console.log(`\nAo todo foram digitados ${contadorNumerico} números acima de 0`);

console.log("\n----------QUESTAO 6----------");

//** exercicio6: Crie uma variável numeroSecreto com valor fixo.
//Simule até 3 tentativas usando um for.
//Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

//"Acertou!" se for igual
//"Tente novamente" se for diferente
//Observação: As tentativas devem ser simuladas por variáveis dentro do laço. 
//  */

const numeroSecreto =4;
let numeroTentado =0;

for(let i = 0; i <3;i++){
    if(numeroTentado == numeroSecreto){
        console.log(`\nParabéns você acertou!`);
        break;
    }else{
        console.log(`\nTente novamente!`);
        numeroTentado+=2;
    }

}

console.log("\n----------QUESTAO 7----------");

//exercicio7: Crie uma variável anoNascimento e anoAtual. 
// Use um for para listar a idade da pessoa ano a ano até o ano atual.

const anoNascimento = 1996;
const anoAtual = 2033;

for(let i = 0; i <= (anoAtual-anoNascimento);i++){
    console.log(`\nSua idade em ${anoNascimento+i} é: ${i}`);
}

console.log("\n----------QUESTAO 8----------");

//exercicio8: Mostre todos os números pares entre 1 e 50 usando for.

for(let i = 1; i<=50; i++){
    if(i%2==0){
        console.log(`\nO número ${i} é par`);
    }
}

console.log("\n----------QUESTAO 9----------");

//ecercicio9: Mostre no console quantos números 
// entre 1 e 100 são divisíveis por 3.

let contador = 1;
let contadorNumerosDiv3 = 0;

while(contador <101){
    if(contador%3==0){
        contadorNumerosDiv3++;
        contador++;
    }
    contador++
}

console.log(`\nA quantidade de números divisíveis por 3 entre 1 e 100 é de ${contadorNumerosDiv3}`);


console.log("\n----------QUESTAO 10----------");

//exercicio10: Crie uma variável opcao.
//Use um do...while para exibir repetidamente as opções:

//1 - Ver saldo
//2 - Fazer depósito
//3 - Sair
//O menu deve continuar sendo exibido até que a opção seja 3.
//Mostre no console a ação correspondente a cada opção.

let opcao = 0;

do{
    console.log("\nSelecione uma das opções:\n1 - Ver Saldo\n2 - Fazer depósito\n3 - Sair");
    switch(opcao){
        case 1:  console.log("\nA opção selecionada foi 1");
                 opcao++;
                 break;
        case 2:  console.log("\nA opção selecionada foi 2");
                 opcao++;
                 break;
        case 3:  console.log("\nA opção selecionada foi 3");
                 break;
        default: opcao++;
                 break;
    }
}while(opcao!=3);