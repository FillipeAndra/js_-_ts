
## Interpretadores de js

### Nodejs

- um interpretador de js voltado ao backend 

- depende do npm para gerenciar pacotes

- arquitetura baseada em eventos e assíncronas

#### Arquitetura baseada em eventos

- no contexto de um ambiente NodeJs um evento é um processo de execução de uma atividade geralmente envolvendo elementos externos ao código e que emitem um retorno (callback) quando o evento é finalizado.

	- EX: requisições http, leitura ou escrita de arquivos, ações relacionadas à um banco, execução de funções timer

- os eventos são executados pela fila do event loop que chama as funções de callback (funções de retorno).

- os eventos funcionam com 2 partes principais: os event emmiters e os event listeners

- os event emmiters são os métodos de um objeto relacionados à realização de uma tarefa ou ação após receber um trigger (exemplo um http request)

	- então esses métodos emitem um evento que é captado pelos event listeners que emitem sua respectiva resposta de callback

- No cenário de uma API os métodos listeners são os métodos de requisição programados para que no momento que o servidor receber determinado tipo de requisição ele responda da maneira programada

	- Nesse cenário os "event emiters" seriam os eventos que acionam as portas de requisição

#### Threads e processos

- o loop de eventos presentes dentro do nojejs opera como um processo sigle thread (fila de processos) para que a modificação de valores e variáveis seja executada de forma ordenada como no processo de commits de um sgbd onde há apenas uma thread


- Dentro do nodejs a thread de tarefas para execução dos callbacks de um event listener pode ser chamada de call stack (pilha de chamadas)

#### Call Stack

- 
### Deno

- dos mesmos criadores do Nodejs, só que ela consegue trabalhar com TypeScript

- sistema baseado em permissões

- Para importar pacotes basta usar a url deles

### Bun

- É mais rápido para executar um código do que os anteriores

- fornece ferramentas nativas