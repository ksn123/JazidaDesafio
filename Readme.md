Pokémon App (Full Stack)

Este repositório contém uma aplicação full stack dividida em:

📦 backend/: API REST em Node.js com Express, PostgreSQL e MongoDB

🖥️ frontend/: Interface React + Vite + Tailwind CSS

📂 Estrutura

JazidaDesafio/
├── backend/     # API com rotas para CRUD de pokémons e batalhas
├── frontend/    # Aplicação React para interagir com a API
└── README.md    # Este arquivo

🚀 Como rodar localmente

Pré-requisitos

Node.js (18+)

PostgreSQL

MongoDB

Docker + Docker Compose (recomendado)

🔧 Backend (modo local manual)

cd backend
npm install
npm run dev

Crie/altere um arquivo .env com:

DATABASE_URL=postgres://usuario:senha@localhost:5432/pokemon
MONGO_URI=mongodb://localhost:27017/pokemon
PORT=3000

🖥️ Frontend (modo local manual)

cd frontend
npm install
npm run dev

Acesse: http://localhost:5173

🐳 Rodando com Docker (recomendado)

Certifique-se de que Docker e Docker Compose estão instalados

Na raiz do projeto, rode:

docker-compose down -v  # limpa volumes persistentes antigos (1ª vez ou reset)
docker-compose up --build

Acesse:

Frontend: http://localhost:5173

API Backend: http://localhost:3000/pokemons

Documentação Swagger: http://localhost:3000/docs

O backend aguarda o banco de dados PostgreSQL ficar pronto, com tentativas de reconexão automáticas.

🧪 Testes

No diretório do backend:

npm run test

⚙️ Integração Contínua (CI)

O projeto possui um pipeline de CI via GitHub Actions, que executa automaticamente os testes e a build do backend e frontend a cada push ou pull request na branch main.

Arquivo de workflow: .github/workflows/ci.yml

📚 Documentação da API

Após iniciar o backend, acesse:

http://localhost:3000/docs

📌 Funcionalidades

Backend

CRUD completo de Pokémons (tipo, treinador, nível)

Lógica de batalha com probabilidades

Persistência em PostgreSQL (dados) e MongoDB (logs de batalha)

Swagger para documentação da API

Testes unitários e de integração com Jest

Reconexão automática ao banco em caso de falha

Frontend

Criação, exclusão e edição de Pokémons

Execução de batalhas entre dois Pokémons selecionados

Visualização do resultado da batalha

Interface com Tailwind CSS

Comunicação com backend via VITE_BACKEND_URL

🌐 Deploy

🔗 Backend (Railway): https://jazidadesafio-production.up.railway.app/pokemons

🔗 Frontend (Vercel): https://jazida-desafio.vercel.app/

👨‍💻 Desenvolvido para desafio técnico da Jazida

Feito por Kleison