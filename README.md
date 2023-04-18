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

