
- para invocar uma tag no css basta digitar o nome da tag seguida por {} para realizar sua estilização

- é possível fazer uma estilização aninhada, por exemplo você pode ter uma tag dentro de outra.

	- ex: section{ h1{color:red;} p{color:black;} }

- para invocar algo com o nome de uma class="" é preciso usar o "." antes de invocar (as classes seguem a mesma regra das tags, servindo apenas para organizar)

	- EX: .secao_central{h1{color:pink;} backgoud-color:black;}

- vale ressaltar que o html em cada navegador já vem com certos pré-sets de margin, padding e outros elementos. Então é importante depois de montar o html, verificar o que foi colocado automaticamente de estilização para fazer o seguinte no topo do arquivo css.

	- EX de reset do css:

		<!-- 
		
			*{
			
				margin: 0; // para resetar a margem de todos os elementos
				padding: 0; // para resetar o padding de todos os elementos
			
			}
		
		
		
		
		
		
		-->

- o processo de criação de reset css pode ser feito para todos os elementos como visto anteriormente ou pode ser feito individualmente tag à tag como no exemplo à seguir:


	<!--
	
		h1, h4, button, forms, img, a{
		
				margin: 0;
				padding: 0;
				border: 0;
		}
	
		-->

- para conseguir editar as propriedades de um container ou elemento quando o mouse fica sobre ele, basta adicionar ":hover" depois do nome da classe ou da tag.

	- <!-- 
			button{
			...
			}

			button:hover{
				cursor:pointer;
			
			}
	
	-->

	- caso o elemento, classe ou container já tenha sido definido anteriormente, suas propriedades ainda persistem no seu ":hover", apenas precisando adicionar seu diferencial, seja a forma como o cursor se comporta, a cor de fundo que muda, etc.
## comandos:

-  border: muda as propriedades da borda do objeto, como botões.

	- pode ser preenchido da seguinte forma:
	
	- none
	
	-  cor {espessura em px} foma{como sólido ou traçado}

- backgroud-color: muda a cor do fundo do objeto

- color: muda a cor principal do objeto, ex: em um botão a cor que muda é o texto ou elemento colocado entre a tag de abertura e de fechamento do buttom

- font-size: muda o tamanho da fonte do texto presente no objeto

- width: determina a largura/comprimento do objeto (em px, rem {16px} ou outros) 

- height muda a propriedade da altura do objeto

- border-radius: muda a curvatura das pontas das bordas de um objeto

- display: forma em que o objeto ou conjunto de objetos se comporta(m) na tela. EX: 
	
	- flex: permite uma maior dinamicidade dos(s) objeto(s) facilitando a criação de um site recursivo (todos se tornam block {bloco que ocupa todo o espaço disponível da tela} e a movimentação se torna dinâmica, inclusive quem era inline {elementos que ficam em linha por padrão no html5 e que não podem editar padding, height e width})
	
	- block: faz com que os elementos se comportem como um um bloco 
	
- flex-direction: como os objetos vão se organizar dentro desse display-flex. EX:

	- row: objetos em linha
	
	- column: objetos em coluna

- align-items: a  forma como os elementos devem estar alinhados na vertical (no display flex). EX:

	- center: elementos alinhados ao centro
	
	- justify: elementos justificados

- line-height: indica onde deve estar a linha na posição vertical dentro do objeto (em modo de display block) 

	- recomenda-se colocar a medida em px do próprio tamanho do objeto para alinha no centro da vertical

- justify-content: como os elementos tem que estar alinhados na horizontal (no display flex). EX: 

	- space-evenly: dividir igualmente o espaço entre os espaços vazios

	- space-around: coloca um espaço igual entre os dois elementos

- text-align: alinha o texto horizontalmente (em modo de display block)

	- serve tanto para textos dentro de objetos como textos diretamente presentes na estrutura como quando um h1 ou um p estão diretamente no main, é possível centralizá-los  com esse comando

- gap: cria espaços entre os elementos de um container (de display flex). EX: 20px;

- margin: adiciona uma margem na unidade de medida desejada no objeto ou container

	- -top: margem acima

	- -bottom: margem embaixo

	- -left: margem à esquerda

	- -right: margem à direita

	- (sem nada depois): coloca as margens na seguinte ordem: cima, direita, baixo esquerda;
	
		- auto: alinha ocupando o máximo de espaço possível (ex: margem da direita auto, sem dizer a margem da esquerda deixa o objeto no centro horizontal) 

- font-family: escolhe a fonte que será utilizada no texto.

	- para importar uma fonte é recomendado que vá no google fonts e importe a fonte escolhida pela parte de web link imports e coloque o código na head do seu html
	
	- então é só invocar a fonte importada usando o comando font family dentro do container desejado

	- outra forma é baixando os arquivos e colocando no projeto linkando no arquivo css do projeto.

		- <!--
			- @font-face{
				font-family: "Nome que deseja chamar a font family";
				 src: url("diretório do arquivo da fonte") 
				 format("formato da fonte {o que vem depois do ponto, como se fosse o tipo do arquivo, seria como escrever png}");
				 font-weight: peso desejado para ser o padrão da fonte;
				 font-style: qual  a forma que a fonte  deve ser carregada por padrão (exemplo, normal ou itálico);
				 font-display: informa como deve ser a forma que a fonte será exibida (EX: swap: nesse caso quando a fonte não carregar a tempo vai ser exibida uma outra fonte escolhida no objeto e quando ela carregar, volta para a deseja);
				 
			- }
		--> 
	
	- o font-family também pode ser usando para escolher famílias de fontes que já estão presentes nele como: fantasy, sans-serif, serif, monospace ou cursive.

	- Para colocar uma fonte como segunda opção caso a primeira não carregue, basta colocar uma segunda font-family em sequência da principal
	
		- <!--
			- font-family: "fantasy", "sans-serif"; 
		- --> 

- font-weight: server para indicar o peso da fonte, desde lighter que é a mais fina ou bolder que é a mais grossa. 

	- É possível também trabalhar numericamente baseado nos valores presentes na documentação da fonte onde por exemplo o valor de 100 é o lighter no Poppins

- font-style: determina o estile da fonte, se ela é normal, itálico ou outro

- text-decoration: adiciona ou tira decorações no texto, como sublinhado, linha cortando o texto, entre outros.

- cursor: escolhe a forma como o cursor vai se comportar ao passar sobre o elemento (geralmente associado a um ":hover".

	- pointer: essa característica do cursor permite que o mouse apareça com o ícone de clicável quando está passando sobre o elemento. 


- box-sizing: se refere ao tamanho da caixa que se torna o elemento presente na tag para manipulá-lo, podendo ser do tamanho do elemento à até o tamanho da tela inteira.

	- EX: box-sizing: border-box //a caixa fica do tamanho que a tag ocupa de fato na tela

- @media(max-width:{tamanho onde a partir daí o comportamento de certas propriedades mudam}){
  }

	- isso é usado para realizar a responsividade do site, precisando alterar apenas as características que deseja que mude  