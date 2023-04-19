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
 - Para o navegador conseguir acessar as bibliotecas que estão na node_modules podemos usar um bundler dev-server. Exitem diversas ferramentas que nos auxiliam nessa tarefa, como o Parcel, o Webpack e o Vite. Aqui iremos utilizar o Vite. Você poderá ler a documentação dos três na seção Recursos Adicionais.
 - Um bundler é responsável por pegar todas as dependências dos nossos arquivos JavaScript, compila tudo em um único arquivo ou pequenos arquivos que são lidos pelo navegador
- O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.
</br>

 - COMANDO DE DESENVOLVIMENTO
 ````
npx vite 
npx vite --open //Abrir a alicação de desenvolvimento
`````
- COMANDO DE PRODUÇÃO
````
npx vite build
````

## NPX e NPM
- O NPM é o gerenciador de pacotes do Node. Um hub de bibliotecas, além de ser um gerador de pacotes.
- LISTAR DEPENDENCIAS
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
