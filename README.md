# Laragnoit Advogados

Site institucional para o escritório Laragnoit Advogados, desenvolvido em React + Vite, com duas páginas principais:
- **Trabalhista Reclamante**: informações sobre direitos trabalhistas e atendimento especializado.
- **Auxílio-Acidente**: orientações sobre o benefício e análise gratuita de casos.

## Funcionalidades
- Navegação SPA com React Router.
- Toolbar responsiva com logo e links.
- Cards de perguntas frequentes animados e acessíveis.
- Botão WhatsApp com mensagem personalizada para cada página.
- Design moderno, responsivo e otimizado para GitHub Pages.

## Como rodar o projeto

### Pré-requisitos
- Node.js (recomendado v18 ou superior)
- npm

### Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/henriquelaragnoit/laragnoitadv.git
   cd laragnoitadv
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

### Ambiente de desenvolvimento
Para rodar localmente:
```sh
npm run dev
```
O site estará disponível em `http://localhost:5173` (ou porta informada no terminal).

### Build para produção
```sh
npm run build
```
Os arquivos finais estarão na pasta `dist/`.

### Deploy no GitHub Pages
1. Gere o build:
   ```sh
   npm run build
   ```
2. Publique o conteúdo da pasta `dist/` no GitHub Pages (pode usar uma action ou copiar manualmente).

## Estrutura do projeto
```
laragnoitadv/
├── src/
│   ├── assets/         # Imagens, logo, CSS global
│   ├── components/     # Componentes reutilizáveis e seções
│   ├── pages/          # Páginas principais
│   ├── main.jsx        # Entry point
│   └── App.jsx         # Configuração de rotas
├── index.html          # Template base
├── package.json        # Dependências e scripts
└── README.md           # Este arquivo
```

## Contato
- [WhatsApp](https://wa.me/5511943849988?text=Gostaria%20de%20conversar%20com%20um%20advogado%20trabalhista)
- [Site oficial](#)

---
Projeto desenvolvido com apoio do GitHub Copilot.
