
## Inicialização

- seu arquivo html tem que se chamar index.html, o seu css se chama style.css e os scripts podem ter qualquer nome, mas precisa finalizar com .js

- devido ao uso do emmet é possível usar atalhos no código para conseguir escrever mais rápido dentro do html (precisando apenas escrever o  atalho e apertar tab na sequência)

- alguns deles são:

	- ! : serve para escrever automaticamente o doctype a head e o body

		- escreva dentro do html: lang = "pt-BR" para ser em português
	
		- em stylesheet coloque o endereço do arquivo cs na tag src
		
		- no campo de title escreva o título da página html

		- a head é onde fica as informações necessárias para o navegador realizar o processo de renderização da página
		
		- o body é a parte onde ficam os conteúdos presentes na página

	- "h1" até "h6": títulos que vão do maior (h1) até o menor h6 (todos precisam )

		- geralmente só há um h1 por página (precisa abrir e fechar)

	- p: para realizar a escrita de um conjunto textual como um parágrafo
	
	- br : tag utilizada para realizar uma quebra de linha em um texto (não precisa abrir e fechar) (recomendado usar poucas vezes, apenas para quebras de linha simples. Se for preciso separar por uma distância maior utilize o css para fazer essa separação)
	
	- strong: tag usada para deixar em negrito (precisa abrir e fechar)
	
	- em: deixa o texto em itálico (precisa abrir e fechar)
	
	- sub: faz o texto ficar menor e levemente em baixo tipo para escrever H<sub>2</sub>O (precisa abrir e fechar)
	
	- img: usada para colocar imagens no site. Só usa abertura, mas tem que ter 

		- src="": valor para colocar o endereço da imagem na pasta
		
		- alt="": o placeholder que deve colocar caso dê errado o carregamento da imagem
	
	- sup: faz o texto ficar menor e acima tipo para escrever 8m<sup>2</sup> (precisa abrir e fechar)
	
	- hr: cria uma linha percorrendo toda a horizontal da página no trecho onde ela foi colocada
	
	- a: para referenciar links externos ao site. entre a abertura e fechamento coloca-se o texto que deve aparecer para clicar
	
		- dentro do "a" usa-se obrigatoriamente o "href=" seguido do link que se deseja referenciar
		
		- target="_blank": força a nova página carregada a abrir em uma nova guia
		
		- rel: serve apra indicar a relação do link, se externo(external) (em caso de interno {quando a página linkada é do mesmo projeto} não precisa disso)
	
	- <!-- [texto que você quiser]-->: ser para comentar itens dentro do código html

	- form: cria um formulário (abre e fecha)
	
		- input: campo de entrada de dados em um formulário
		

	- button: cria um botão clicável
## Tabelas

- para cria uma tabela, usa-se a tag: table (que abre e fecha)

- dentro da tabela usa-se a seguinte tag para criar uma linha: tr (que abre e fecha)

- dentro da tabela usa-se a seguinte tag para criar uma celula: td (que abre e fecha)

- 
## Listas em HTML

- a criação de listas em HTML podem funcionar de 2 formas: listas ordenadas e listas não ordenadas

- é possível colocar uma lista dentro de outra para ter uma lista aninhada, tendo por exemplo item a, b e c dentro do item 1

### listas ordenadas

- para criar uma lista ordenada precisa usar a tag "ol" que precisa de fechamento e dentro dela cada item da lista tem que ter a tag "li" que também precisa tem fechamento

- alguns dos parâmetros que d´para colocar dentro  de ol são:

	- type="": pode ser:
		- A: para cada item é precedido por uma letra maiúscula em ordem crescente
		- a: para cada item é precedido por uma letra minúscula em ordem crescente
		- i: para cada item é precedido por um número romano minúsculo
		- I: para cada item é precedido por um número romano maiúsculo
		- 1: para cada item é precedido por um número inteiro em ordem (esse é o type padrão caso não escolha nenhum tipo)

	- start="valor que vai iniciar a contagem dos itens da lista ordenada"


### listas não ordenadas

- são as listas que cada item é precedido por um símbolo como o ponto presente no markdown do obsidian. 

- a lista não ordenada usa o "ul" como tag para indicar a lista e "li" para cada item da lista

- alguns dos parâmetros presentes nesse caso são:

	- type="tipo de símbolo presente na lista". Os tipos de símbolo são:

		- disc: esfera preenchida

		- circle: esfera somente com a borda

		- square: quadrado preenchido
## Uso de imagens

- é preciso se atentar quanto ao uso de imagens com direitos autorais, para contornar é possível usar imagens com licença criativa presente no google, onde, neste caso é preciso dar créditos aos criadores das imagens

- para mudar o formato da imagem ou redimensionar uma imagem para que ela fique ocupando um espaço menor no armazenamento ou por causa da proporção  (recomendável ficar por volta dos 1900-1920 x outro valor associado para pc e tem que fazer para outros dispositivos) pode-se usar gratuitamente o seguinte:

	- gimp: abra a imagem vá na aba de imagem e escolha redimensionar ou scale e na hora de exportar escolha a qualidade entre 50 e 90 e teste para ver até qual qualidade a imagem consegue pesar menos de 1 MB 
	
	- tinypng: serve para diminuir o tamanho de arquivos png, jpeg e webp.

- pode-se usar também sites como:

	- unsplash.com

	- flaticon.com
	
	- storyset.com
	
	- pexels.com

- formatos usados na web:

	- jpeg

	- png
	
	- webp (mais leve de todos)
	
	- svg

## CSS

- para estilizar algo deve-se colocar ou o id, ou o nome ou o tipo da estrutura como h2 seguindo de chaves {onde dentro deve conter como o objeto deve ser estilizado}

- para realizar o processo de realizar a separação de uma estrutura pode-se usar os margin-(botton,up,left,right) para separar dependendo do lado escolhido com a unidade de medida desejada, ex: px (pixels), rem (16px), etc

- 