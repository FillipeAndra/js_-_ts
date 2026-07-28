
## Condicionais

- no js existem:

	- if(condicional){}
	
	- else if(condicional){}
	
	- else{}
	
	- exite também o ternário, quando é usado uma forma simplificada de escrever uma condicional. Para tanto cria-se uma variável onde nela é atrelada o enunciado em seguida se coloca uma interrogação (?). Depois da interrogação coloca o que deve ser executado caso a condicional seja verdadeira. Depois disso é possível adicionar um dois pontos (:) para colocar ou um else ou um novo resultado possível (um else if) seguindo a estrutura do if. no else é só colocar o que deve aparecer depois dos (:) 
	  
		  - EX: notaDoAluno >= 9 ? console.log('excelente') /*isso seria um if*/
			   : notaDoAluno >=7 ? console.log('boa') /*isso é um else if*/
			   : notado aluno >=4 ? console.log('mediana') /* mais um else if*/
			   : console.log('ruim') ; //um else
### comparações:

- variavelString.includes('palavra ou frase'): Retorna true ou false após verificar se a variável contem a palavra ou frase buscada (cuidado com o fato de que deve estar exatamente do jeito da busca, pois js é case sensitive) 

- <= :menor igual que

- >= : maior igual que

- > : maior que

- < : menor que

- &&: and

- ||: or

- ! : not

- == : compara se são iguais, mas converte os tipos para que sejam compatíveis

- === : primeiro compara os tipos podendo retornar true ou false.  Se foram do mesmo tipo aí então verifica a igualdade entre os valores. (É mais recomendado seu uso)

	- Ex: 20 == '20' (retorna true)
	
		20 === '20' (retorna false)
		
		20 === 20 (retorna true)

- != : compara se são diferentes, mas converte os tipos para que sejam compatíveis

 - !== : primeiro compara os tipos podendo retornar true ou false.  Se foram do mesmo tipo aí então verifica a diferença os valores. (É mais recomendado seu uso)

- exitem ainda a comparação para saber se um valor está preenchido ou seguindo uma caraterística específica, os truthy e Falsy

	- os falsy é quando no momento de analise de um valor ou variável o js analisa como booleano e retorna false:
		- EX:

			- false
			- 0
			- ""
			- null
			- undefined
			- NaN
		
		- EX2 (aplicação): 
			 const letra="";

			- if (letra){
				 console.log('tem uma letra') ;
			- } else{
				 console.log('é uma string vazia'); //vai retornar essa
			 }

- switch case:

	- switch(variavel a ser analisada){
		- case x: instrucao1 
			    break (após executar a instrução ele para. Se não tiver break ele continua executando as instruções do case abaixo, como se fossem verdadeiras)
		
		- case y: instrucao2 
			    break
		
		- case z: instrucao3
				break
		
		- default: inscrucao4 (nesse caso sempre é executado)
				- break
	- 
	- }




