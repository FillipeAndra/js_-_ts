
## Interpretadores de js

### Nodejs

- um interpretador de js voltado ao backend 

- depende do npm para gerenciar pacotes

- arquitetura baseada em eventos e assíncronas

- para executar um código em node, basta digitar node seguido do nome do arquivo que deseja executar e ele executar o código (em um arquivo simples)

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

#### Call Stack (execução em pilha)

- também conhecido como pilha de chamados (ou pilha de callbacks) é a questão de organização de processos  presente em estrutura de dados

	- como visto em funções recursivas o conceito dentro do node é que o último evento chamado é o primeiro a ser executado e vai executando em ordem inversa.

#### task queue (fila de tarefas)

- assim como na estrutura de dados, nesse tipo de evento ele executa como em uma fila, o primeiro à entrar é o primeiro à sair

- cada tarefa / event listener chama seus callbacks e a outra tarefa fica aguardando os callbacks da anterior acabarem para ele chamar seus call backs

#### Event Loop

- o event loop segue uma sequência de execução:

1. Callbacks dos timers expirados: são os primeiros a serem executados assim que possível - ou seja, quando a _call stack_ se encontra vazia;

2. I/O polling: eventos de I/O que estão prontos para serem processados, como acesso a arquivos, tarefas de rede, etc) - a maior parte dos callbacks é referente a este tipo de operação e ocorre nesta fase;

3. `setImmediate()`: um tipo de timer especial que podemos usar quando queremos que um callback seja processado imediatamente (casos de uso mais avançados);

4. Eventos de encerramento: métodos para fechar conexões abertas, como conexões com bancos ou sockets (por exemplo o método `socket.close()`).

5. Verifica se tem timers ou tarefas de entrada e saída pendentes, se sim volta ao passo 1.

- o event loop funciona em fila

### Deno

- dos mesmos criadores do Nodejs, só que ela consegue trabalhar com TypeScript

- sistema baseado em permissões

- Para importar pacotes basta usar a url deles

### Bun

- É mais rápido para executar um código do que os anteriores

- fornece ferramentas nativas