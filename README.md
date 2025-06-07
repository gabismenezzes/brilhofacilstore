# Brilho Fácil Store ✨

**Brilho Fácil Store** é uma aplicação web moderna de e-commerce para semijoias, desenvolvida com foco em experiência do usuário, performance e escalabilidade.

## 🛠️ Tecnologias utilizadas

- **Frontend:** Next.js 15 (React), TypeScript, CSS Modules
- **Backend:** ASP.NET Core Web API
- **Estilização:** Tailwind CSS (ou CSS puro, se estiver usando)
- **Integração:** Comunicação via API REST entre frontend e backend

## 📦 Funcionalidades

- Listagem de produtos com imagem, nome e preço
- Integração com API para consumo dinâmico de dados
- Layout responsivo com grid moderno
- Estrutura modular e escalável com boas práticas de código

## 📂 Estrutura do projeto

```bash
BrilhoFacil/
├── backend/
│   └── BrilhoFacil.api/             # API em ASP.NET Core
│       └── Controllers/
│       └── Models/
├── frontend/
│   └── frontend/                    # Frontend em Next.js
│       ├── components/             # Componentes reutilizáveis
│       ├── public/images/          # Imagens dos produtos
│       ├── styles/                 # Estilos globais e modulares
│       └── app/                    # Páginas e layout principal
