Este é um exemplo de backend para uma aplicação utilizando Node.js, TypeScript e Prisma. Algumas dependências extras são incluídas para lidar com autenticação, comunicação em tempo real e estilização de componentes

Dependências

[Node](https://nodejs.org/)
[Typescript](https://www.typescriptlang.org/)
[@prisma](https://www.prisma.io/docs/concepts/components/prisma-client)
[Axios](https://axios-http.com/)
[Cors](https://github.com/expressjs/cors)
[dotenv](https://github.com/motdotla/dotenv)
[JWT](https://jwt.io/)
[Socket](https://socket.io/)

Para instalar as dependências, rode o comando:

```
npm install

Configuração
Antes de iniciar o servidor, faça uma cópia do arquivo .env.example e renomeie como .env. Preencha as variáveis apropriadamente.

O arquivo também define algumas configurações padrão para o servidor HTTP e WebSocket, que podem ser ajustadas caso necessário.

Iniciar o Servidor
Para iniciar o servidor, execute:

```

npm dev

Banco de Dados
Este projeto utiliza o Prisma ORM para comunicação com o banco de dados.
Você precisa primeiramente criar e rodar uma tabela com Prisma. Siga a documentação da ferramenta para saber como realizar esse processo.

Migrar tabelas
Após atualizar o schema no schema.prisma, você precisará migrar as tabelas com o comando:

```
npx prisma migrate dev


Isto automaticamente irá:

Comparar o estado atual do seu esquema de banco de dados declarativo com o último estado conhecido do banco de dados.
Gerar um novo arquivo de migração com as diferenças encontradas.
Aplicar estas mudanças no banco de dados.
Manipular dados
Para manipulação de dados use o Prisma Client. Por exemplo, para listar os usuários salvos no banco de dados basta escrever:

```

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
const users = await prisma.user.findMany();
console.log(users);
}

main()
.catch(console.error)
.finally(() => prisma.$disconnect());

Autenticação
A autenticação é implementada utilizando token JWT. Os usuários precisam estar cadastrados em banco da dados, para que possam efetuar login. A senha é salva após ser hasheada com bcrypt.

Se quiser alterar a forma de gerar o hash ou os detalhes do token JWT você pode editar o arquivo src/auth/utils.ts.

Socket.io
Há um pequeno exemplo de utilização do Socket.io já inclusa no projeto. Ao acessar a rota /chat, você será redirecionado para uma página de chat simples onde você pode trocar mensagens com outros clientes conectados ao servidor via WebSockets.
