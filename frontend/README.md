Next.js with TypeScript
Este é um projeto básico do Next.js usando TypeScript, com algumas bibliotecas adicionais incorporadas, incluindo Axios, Socket.io-client e Styled-components.

Como usar
Clone o repositório usando o comando: git clone https://github.com/SEU-USUARIO/nome-do-repositorio.git
Instale as dependências com o comando: npm install
Coloque suas credenciais do Socket.io na variável token no arquivo pages/index.tsx
Execute o projeto com o comando: npm run dev

Bibliotecas
Axios
O Axios permite que você faça solicitações HTTP / HTTPS do cliente para um servidor. É uma maneira fácil de enviar solicitações "get", "post", "put" e "delete" com JavaScript de forma leve e fácil de usar.

Exemplo de uso:

```
import axios from 'axios';

const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
console.log(response.data);

```

Socket.io-client
Socket.io é uma biblioteca JavaScript para aplicativos web em tempo real, tornando possível a comunicação bidirecional em tempo real entre servidores e clientes. Socket.io-client é o lado do cliente dessa biblioteca.

Exemplo de uso

```
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
socket.on('connect', () => {
  console.log('Connected');
});

```

Styled-components
Styled-components é uma biblioteca para CSS-in-JS, permitindo que você escreva folhas de estilo diretamente nos seus componentes React. Isso garante uma estilização mais organizada, facilidade de manutenção e reutilização.

Exemplo de uso:

````
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: blue;
  color: white;
`;

function ExampleComponent() {
  return <StyledButton>Click Me!</StyledButton>;
}

```
````
