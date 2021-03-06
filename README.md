## front-solicitacoes-compra

Um projeto com React, para um sistema básico de solicitações de compra em um escritório.

## Instalação

Ao clonar ou baixar o projeto, em sua pasta raiz execute os comandos abaixo:

Primeiro instale as dependências do projeto:
### `npm install`

Rode a aplicação em modo de desenvolvimento: 
### `npm start`

Abra a url http://localhost:3000 em seu navegador para ter acesso ao sistema.

## Configurando o acesso ao Back-end

Para consumir a API, verifique a URL correta para acesso ao seu back-end e informe-a no arquivo `axios.js` em src\services\axios.js, substituindo a `baseURL: 'http://localhost:8080'` informada, pela correta (caso necessário).

# Usuários e senhas para acesso ao sistema:

Cada usuário só tem acesso a determinadas funções no sistema com base em seu perfil.<br/>
Perfil **solicitante** só pode consultar as solicitações e criar novas. <br/>
Perfil **almoxarife** só pode visualizar as solicitações e aprová-las ou reprová-las.<br/>
Perfil **admin** só pode consultar as solicitações filtrando-as pela situação.

*Usuários criados a partir do script disponível na raiz do projeto*

### Usuário com perfil para solicitar materiais (Solicitante):
**usuário: solicitante** <br/>
**senha: 123**
### Usuário com perfil para aprovar a compra (Almoxarife):
**usuário: aprovador** <br/>
**senha: 123**
### Usuário com perfil para consultar as solicitações (Administrativo):
**usuário: admin** <br/>
**senha: 123**

## Banco de dados do back-end

Um arquivo com os SQLs (`dump.sql`) para criação das tabelas e inserção dos usuários está na raiz do projeto.

### Back-end:

https://github.com/andreh998/back-java-solicitacoes-compra

## Produção:

Já fiz o build da aplicação que está na pasta `build`, mas para gerá-lo novamente execute:
### `npm run build`

Para rodá-lo, acesse a pasta build, execute o comando `npm install` para instalar as dependências, 
e depois `npm start` para iniciar o servidor de produção na porta `9000`.

## css e js minificados

O react gera automaticamente os arquivos de css e js minificados. Depois do build eles ficam na pasta `build\static`


## Imagens

![alt text](https://user-images.githubusercontent.com/42716178/82509849-6fa9b980-9adf-11ea-83c9-1f9f2fedcc17.png)

![alt text](https://user-images.githubusercontent.com/42716178/82509851-70425000-9adf-11ea-9c5f-028c0777ee23.png)

![alt text](https://user-images.githubusercontent.com/42716178/82509852-70dae680-9adf-11ea-8264-ee10493b68a0.png)

![alt text](https://user-images.githubusercontent.com/42716178/82509853-70dae680-9adf-11ea-8719-effdbdfaf4b8.png)

![alt text](https://user-images.githubusercontent.com/42716178/82509854-71737d00-9adf-11ea-9d0b-5731b22590cf.png)

![alt text](https://user-images.githubusercontent.com/42716178/82509856-71737d00-9adf-11ea-9a4b-cbae236a4214.png)

![alt text](https://user-images.githubusercontent.com/42716178/82510030-ed6dc500-9adf-11ea-8094-a198dbfd5a21.png)
