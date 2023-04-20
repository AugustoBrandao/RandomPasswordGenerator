# Configurando o Ambiente de Desenvolvimento Front-End
 - Criação da pasta src (source), onde fica todo o código que iremos trabalhar
 - Pasta dist/build/out, onde os arquivos da pasta src são compilados para que ele esteja pronto para produção e para o deployment
 - Criar o projeto usando o npm para gerar o package.json (arquivo de configuração)

 ````
    npm init
````
## Instalando Bibliotecas Externas na Aplicação
- Abrir o arquivo index.html com Live Server para não gerar erro de CORS
- Instalar a primeira dependência, a biblioteca nanoid

````
    npm install nanoid
`````
- Para que a gente não versione a pasta nome modules, vamos criar um arquivo .gitignore, que indica quais arquivos não queremos subir na versão de controle.

## Usando um Bundler Dev-Server (Vite)
 - Para o navegador conseguir acessar as bibliotecas que estão na node_modules podemos usar um bundler dev-server. Exitem diversas ferramentas que nos auxiliam nessa tarefa, como o Parcel, o Webpack e o Vite. Aqui iremos utilizar o Vite. 

 - Um bundler é responsável por pegar todas as dependências dos nossos arquivos JavaScript, compilar tudo em um único arquivo ou pequenos arquivos que são lidos pelo navegador

- O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.
</br>

 - COMANDO DE DESENVOLVIMENTO

 ````
    npx vite 
    npx vite --open //Abrir a alicação de desenvolvimento
`````
- COMANDO DE PRODUÇÃO:

````
    npx vite build
````

## NPX e NPM
- O NPM é o gerenciador de pacotes do Node. Um hub de bibliotecas, além de ser um gerador de pacotes.

- LISTAR DEPENDENCIAS:

````
    npm list
````
- Para entender o que é NPX, precisamos entender a diferença entre pacotes de código e pacotes executáveis.
- O Vite é rodado apenas através do terminal, logo ele é um pacote executável, e por isso usamos o NPX, para executar o pacote.
- Já o react ou o nanoid são pacotes de código, que são feitos para serem executados dentro do código.

## Scripts - package.json
- Podemos rodar qualquer comando configurando ele dentro do "scripts", no package.json. Por isso iremos rodar o ambiente de desenvolvimento.

````
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "vite --open"
    },

    npm run dev // O vite será iniciado
````

## Configurando um Linter
- Um linter é uma ferramenta que nos ajuda a deixar nosso código limpo: ela aponta erros de estilo e formatação do código. Além disso, é essencial para a legibilidade do código - especialmente quando se trabalha em equipe (todas as pessoas são obrigadas a seguir as regras predefinidas). O linter mais popular atualmente para javascript é o ESLint.

````
    npm init @eslint/config
````

## Perguntas ao configurar o Linter ESLint
- How would you like to use ESLint? - Use as setas de navegação do seu teclado até selecionar a opção To check syntax, find problems, and enforce code style e aperte a tecla ENTER para confirmar.

- What type of modules does your project use? - Selecione a opção JavaScript modules (import/export) para confirmar, para informar que utilizaremos ES Modules no projeto.

- Which framework does your project use? - Como ainda não estamos usando nenhum framework na nossa aplicação, selecione a opção None of these.

- Does your project use TypeScript? - Como utilizamos JavaScript em vez de TypeScript, selecione a opção No.

- Where does your code run? - Selecione opção Browser.

- How would you like to define a style for your project? - Como estamos configurando nosso próprio estilo, selecione a opção Answer questions about your style.

- What format do you want your config file to be in? - Selecione a opção JSON. Essa opção, ao término da execução, irá criar o arquivo de configuração .eslintrc.json, que mostraremos mais abaixo.

- What style of indentation do you use? - Selecione a opção Spaces.

- What quotes do you use for strings? - Selecione a opção Single, para indicar que utilizaremos aspas simples.

- What line endings do you use? - Selecione a opção Unix.

- Do you require semicolons? - Selecione a opção Yes, para indicar que utilizaremos ponto e vírgula ;.

- Would you like to install them now? Selecione a opção Yes, para instalar todas as dependências necessárias.

- Which package manager do you want to use? Selecione a opção npm.

## Rodando o ESLint

- Se preferir, podemos adicionar esse comando nos scripts do package.json:
`````
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "npx vite --open",
        "lint": "eslint ./src"
    },

`````

## Configurando o ESLint da Trybe no seu projeto
 - Para instalar o ESLint do modulo de Frontend da Trybe execute, no seu terminal, o comando:

`````
    npm install @trybe/eslint-config-frontend
`````

- Crie o arquivo .eslintrc.json com o seguinte conteúdo:

``````
    {
        "extends" : "@trybe/eslint-config-frontend"
    }
``````

## Importando Arquivo CSS Dentro do JavaScript
- Utilizando o Bundler Vite, é possível importar um arquivo css dentro de um arquivo JavaScript. Isso é uma prática bem comum quando for utilizar o React. 
- Por baixo dos panos o Vite pega o CSS e injeta no html final da aplicação diretamente

`````
import { nanoid } from 'nanoid'
import "./style.css";   // Importando o CSS dentro do JavaScript
`````
# RESUMO
## Iniciar o projeto com NPM
- Criar o diretório do projeto;
- Criar o diretório src/ dentro do diretório do projeto;
- Criar o arquivo main.js no diretório src/;
- Criar o arquivo index.html na raiz do projeto;
- Executar o comando npm init -y ou npm init para criar o package.json;

## Configurar o projeto para utilizar a sintaxe ES Modules
- Adicionar a linha <script type="module" src="./src/main.js"></script> no arquivo html;
- Adicionar a chave "type": "module" ao arquivo package.json

## Adicionar um bundler dev-server
- Instalar o Vite com o comando npm i vite;
- Adicionar a chave "dev": "vite --open" à chave "scripts" do arquivo package.json;

## Versionar o código
- Crie um arquivo .gitignore na raiz do projeto e, nele, adicione node_modules;
- Digite o comando git init para adicionar o versionamento de código no projeto;

## Instalar e configurar o ESLint
- Execute o comando npm init @eslint/config e siga o passo a passo que aparecerá no terminal.
