# Pokémon App (Full Stack)

Este repositório contém uma aplicação full stack composta por:

- **Backend**: API REST construída com Node.js, Express, PostgreSQL e MongoDB
- **Frontend**: Interface desenvolvida com React, Vite e Tailwind CSS

## Estrutura do Projeto

```
JazidaDesafio/
├── backend/     # API com rotas para CRUD de pokémons e batalhas
├── frontend/    # Aplicação React para interagir com a API
└── README.md    # Este arquivo
```

## Como Executar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL
- MongoDB
- Docker e Docker Compose (opcional, mas recomendado)

### Executando o Backend Manualmente

```bash
cd backend
npm install
npm run dev
```

Crie ou edite um arquivo `.env` com o seguinte conteúdo:

```
DATABASE_URL=postgres://usuario:senha@localhost:5432/pokemon
MONGO_URI=mongodb://localhost:27017/pokemon
PORT=3000
```

### Executando o Frontend Manualmente

```bash
cd frontend
npm install
npm run dev
```

Acesse o frontend em: [http://localhost:5173](http://localhost:5173)

### Executando com Docker (Recomendado)

Certifique-se de que Docker e Docker Compose estão instalados. Na raiz do projeto, execute:

```bash
docker-compose down -v    # Limpa volumes persistentes antigos (recomendado na primeira vez)
docker-compose up --build
```

Acesse os serviços:

- Frontend: [http://localhost:5173](http://localhost:5173)
- API Backend: [http://localhost:3000/pokemons](http://localhost:3000/pokemons)
- Documentação Swagger: [http://localhost:3000/docs](http://localhost:3000/docs)

O backend aguarda a inicialização do banco de dados PostgreSQL com tentativas de reconexão automáticas.

## Testes

Para executar os testes do backend:

```bash
cd backend
npm run test
```

## Integração Contínua (CI)

Este projeto utiliza integração contínua via GitHub Actions. O pipeline executa automaticamente os testes e builds do backend e frontend a cada push ou pull request na branch `main`.

Arquivo de configuração: `.github/workflows/ci.yml`

## Documentação da API

Acesse após iniciar o backend:

[http://localhost:3000/docs](http://localhost:3000/docs)

## Funcionalidades

### Backend

- CRUD completo de Pokémons (tipo, treinador, nível)
- Lógica de batalha com probabilidades
- Persistência em PostgreSQL (dados) e MongoDB (logs de batalha)
- Documentação via Swagger
- Testes unitários e de integração com Jest
- Reconexão automática ao banco de dados

### Frontend

- Criação, exclusão e edição de Pokémons
- Execução de batalhas entre Pokémons
- Visualização dos resultados
- Interface responsiva com Tailwind CSS
- Comunicação via variável `VITE_BACKEND_URL`

## Deploy

- Backend (Railway): [https://jazidadesafio-production.up.railway.app/pokemons](https://jazidadesafio-production.up.railway.app/pokemons)
- Frontend (Vercel): [https://jazida-desafio.vercel.app/](https://jazida-desafio.vercel.app/)

## Desenvolvedor

Desenvolvido por Kleison para o desafio técnico da Jazida.