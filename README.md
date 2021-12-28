# Cad_usuarios
## Utilizado p/  construção da api
$ Node.Js | TypeScript | MongoDb | Mongoose |  Nodemon |Express.js
## Instalando dependencias e executando a api

$ Na sua máquina abrir cmd, executar seguinte comando: git clone https://github.com/BrunoMonte/Cad_usuarios.git

$ Após clonar o repósitorio , "code ." irá abrir no editor, onde terá melhor visualização do código.

$ Abra terminal execute o seguinte: Npm install (para instalar as dependências do projeto)

$ Após npm start, onde api irá rodar da porta 3000

## Fazendo uso do Post, Get, Put, Del
### utilize o postman
$ http://localhost:3000/notes

$ No post irá solicitar o seguintes campos: { "nome": "Exemplo", "senha":123456,"numero":819-123412 "email": "exemplo@exemplo" }

$ No Get irá executar List, com listagem dos contatos salvos

$ No put irá solicitar o seguinte campo: [ { "nome":"Exemplo", "senha":123456 } ] //Para fazer alterações no contato de nome informado

$ No Del irá solictar o campo de nome e senha para fazer exclusão do contato.
