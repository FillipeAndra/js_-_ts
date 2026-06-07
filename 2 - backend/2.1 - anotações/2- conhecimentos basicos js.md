 
## Variáveis

- para criar uma variável, que pode mudar de valores armazenados constantemente (essa linguagem não tem tipagem pois é fracamente tipada) é preciso fazer:

	- antes do nome colocar a palavra reservada let

		- EX: let nota = 5;
	
	- se você mudar o valor da variável ao longo da execução ela altera o valor  

	- uma let pode começar sem ser inicializada 

	- existe a forma usando var, mas ela está deprecated então não use
	
	- se você não delimitar o tipo de variável (let ou var), no js ele invoca como um var implícito. 
	
		- nesse caso, mesmo que já exista uma variável  'x' dentro do escopo local, quando colocar 'x' do lado de fora sem nenhum delimitador antes, o js coloca que isso é um var, criando assim uma outra variável
		
		- o var não respeita conceito de escopo. Sempre com ele tudo é global, mesmo que ele esteja dentro de uma função, de um if ou de um for, ele é tratado como global 

- para criar uma constante que apenas armazena um único valor durante toda a execução do código:

	- antes do nome colocar a palavra reservada const

		- EX: const matriculaAluno = 12345;
	
	- se posteriormente você tentar mudar os valores presentes em uma constante ele apresentará erro
	
	- uma const é obrigatório ser inicializada com um valor logo na sua criação.

- para trabalhar com variáveis ou constantes de tipo string no js, basta usar aspas simples

- Dentro do js o recomendável é usar const sempre que possível, até para entrada externa de dados 

- Como a linguagem é fracamente tipada ao tentar fazer algo entre uma string e um valor numérico como um float ou int ele considera tudo como string

- a soma com string é na verdade uma concatenação

- para descobrir o tipo de uma variável ou uma const basta usar o:

	- typeof(nome da variável); 

	- se uma variável não tem nada alocado ela é considerada como "undefined" tanto em seu valor quanto em seu tipo
	
		- O undefined em js se comporta como 'undefined' caso ele esteja relacionado à uma operação com uma String (sim como se estivesse escrito undefined).
	
	- No js caso você coloque que uma variável tem valor null (tem que ser proposital), o tipo dela é object
	
		- O null no js se comporta como 0 caso esteja relacionado com uma operação numérica, ou como 'null' caso ele esteja relacionado à uma operação com uma String (sim como se estivesse escrito null).
		
		- se for aplicado Number(null) para tentar converter o valor null para numérico ele é convertido para 0
		
		

- para converter uma string para inteiro usa-se a função Number.parseInt('valor desejado').

	- EX: Number.parseInt('8');

- para converter para float usa-se o comando Number.parseFloat('valor desejado')

	- para que os valores depois das casas decimais sejam entendidos como tal, é preciso que o elemento de separação seja um "."
	
	- EX: Number.parseFloat('5.64');

- Para controlar a quantidade de casas decimais no momento da impressão (só funciona dentro do console.log) pode user o .toFixed(quntidade de casas decimais desejada). 

	- Ele trabalha apenas fazendo aproximação do valor

	- EX: const numero4 = Number.parseFloat('5.645678');
		 console.log(numero4.toFixed(2));
		// a impressão sai como 5.65 

- NaN ou Not a Number ocorre no momento que ocorre uma tentativa de realizar uma operação matemática com uma string (à exceção de soma +), ou em caso de qualquer operação com uma varável *undefined*.

	- para descobrir se algo é NaN à tentativa de converter para Number usa-se o comando isNaN('valor de teste')
	
		- Ele retorna true se não for number ao tentar transformar a String em Number
		
		- Ele retorna false se der para converter a String para Number
		
		- Ex: console.log(isNaN('jao')); //retorna true

- Segue um site com comandos para fazer manipulação de string no js: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

- os valores de uma variável do tipo boolean no js são: true ou false.

	- o js em momentos de avaliação pode transformar false em 0 e true em 1. Muito cuidado devido à essas questões de tipagem.
	
	- para manualmente fazer essa conversão é necessário usar o operador Number.
	
		- EX: Number(true) //vira 1 

- Para converter um valor para String usa-se:

	- String(valor a ser convertido)

- O Symbol() é um tipo de variável que cria uma assinatura única para cada implementação sua, mesmo que esse simbolo não tenha um valor associado.

	- para invocá-lo é semelhante à criar um objeto e invocá-lo
	
	- EX: <!--
		 const simbolo1 = Symbol();
		 const simbolo2 = Symbol('descrição do simbolo'); // aqui não foi alocado um valor, isso é apenas uma descrição do simbolos
		 const obj1 = {[simbolo1]:'valor alocado dentro do simbolo1'};

	     console.log(obj[simbolo1]); //imprime o valor alocado no simbolo1
	- 
	- 
	- 
	- -->

## Impressão de valores

- para imprimir basta usar console.log();

	- o processo de impressão é bem similar ao java

		- para imprimir várias variáveis sem texto usa-se a vírgula para separar elas, sendo que o próprio js já dá um espaço entre as duas variáveis no print
		
		- dentro do console.log ele permite fazer operações matemáticas para realizar o print com o resultado
		
			- EX: console.log(5+6) //ele printa 11
		
		- para imprimir texto com uma variável basta colocar o texto com aspas simples {' '} e depois colocar um sinal de soma com a variável que se quer concatenar
		
		- outra forma de fazer um texto com variáveis dentro dele é colocando acento de crase no começo e no fim do texto e colocando as variável com ${nome da variável}

			- EX: <!--console.log(`a nota de fulano foi ${nota}`);-->

- para comentar uma linha sua-se: //

- para comentar um trecho do código usa-se duas barras com 2 asteriscos entre elas (ignora o restante da parte de comentário de html): <!-- /**/ -->

- segue um site com uma lista de comandos unicode para colocar símbolos caso precise: https://home.unicode.org/

## Condicionais

- no js existem:

	- if(condicional){}
	
	- else if(condicional){}
	
	- else{}
### comparações:

- o js aceita tanto == quanto === quando está comparando igualdade

	- é pouco recomendado usar == , pois ele não compara o tipo dos dados, ele tenta converter para que os dados tenham o mesmo tipo, gerando erros como alegar que 5 e '5' são a mesma coisa   
	
	- o mais recomendado é usar === , pois ele compara os valores e antes disso compara os tipos. Então seguindo o último exemplo 5 e '5' seria false. 
	
	- variavelString.includes('palavra ou frase'): Retorna true ou false após verificar se a variável contem a palavra ou frase buscada (cuidado com o fato de que deve estar exatamente do jeito da busca, pois js é case sensitive) 

- <= :menor igual que

- >= : maior igual que

- > : maior que

- < : menor que

- &&: and

- ||: or



## Funções

 - para declarar uma função em js usa-se:
 
	 - function nomeDaFuncao (variavelDeEntrada1,...){}

