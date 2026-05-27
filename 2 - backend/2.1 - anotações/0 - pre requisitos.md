
## Node

- Para trabalhar com js no backend é preciso de frameworks como o nodejs.

### Instalação

#### Windows

1) primeiro é recomendado instalar o chocolatey para facilitar o processo de instalação do node e do NPM
	
	- para instalar o chocolatey é preciso acessar o powershell como administrador e mudar o nível de permissão com o comando e rodar o script de instalação. O comando  é: 
	
		- Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
 
 2) depois de instalado o chocolatey, feche o terminal do powershell e abra um terminal cmd com nível de permissão de administrador.
 
	 - nesse momento será instalado o node js com o seguinte comando.
	 
		 - choco install nodejs -y (pode demorar mais de 5 minutos)


3) para verificar se o npm foi instalado corretamente use o seguinte comando no cmd:
	
	- npm -v

#### Linux

https://nodejs.org/pt-br/download

1) Baixar e instalar o nvm:
	-  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

2) Carregar o nvm sem precisar reiniciar o shell
	-  \. "$HOME/.nvm/nvm.sh"

3) Baixar e instalar o Node.js:
	-  nvm install 24

4) Verifique a versão do Node.js:
	- node -v # Deve exibir "v24.16.0".

5)  Verificar a versão do npm:
	- npm -v # Deve imprimir "11.13.0".


## Editor de código

- à sua escolha