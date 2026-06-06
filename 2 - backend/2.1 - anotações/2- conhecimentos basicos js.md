
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

## Impressão de valores

- para imprimir basta usar console.log();

	- o processo de impressão é bem similar ao java

		- para imprimir várias variáveis sem texto usa-se a vírgula para separar elas, sendo que o próprio js já dá um espaço entre as duas variáveis no print
		
		- dentro do console.log ele permite fazer operações matemáticas para realizar o print com o resultado
		
			- EX: console.log(5+6) //ele printa 11
		
		- para imprimir texto com uma variável basta colocar o texto com aspas simples {' '} e depois colocar um sinal de soma com a variável que se quer concatenar
		
		- outra forma de fazer um texto com variáveis dentro dele é colocando {`} no começo e no fim do texto e colocando as variável com ${nome da variável}

			- EX: console.log(`a nota de fulano foi ${nota}`);

- para comentar uma linha sua-se: //

- para comentar um trecho do código usa-se duas barras com 2 asteriscos entre elas (ignora o restante da parte de comentário de html): <!-- /**/ -->

## Condicionais

- no js existem:

	- if(condicional){}
	
	- else if(condicional){}
	
	- else{}
### comparações:

- o js aceita tanto == quanto === quando está comparando igualdade

- <= :menor igual que

- >= : maior igual que

- > : maior que

- < : menor que

- &&: and

- ||: or

## Funções

 - para declarar uma função em js usa-se:
 
	 - function nomeDaFuncao (variavelDeEntrada1,...){}

