# Mambee - Fábrica Escola de Software

Website oficial da **Fábrica Escola de Software Mambee** desenvolvido em **Next.js (App Router)** com **TypeScript** e **Tailwind CSS**.

## Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Font Awesome](https://fontawesome.com/)
- **Carrossel**: [React Slick](https://react-slick.neostack.com/)

## Como Executar Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

4. **Executar versão de produção**:
   ```bash
   npm run start
   ```

## Estrutura do Projeto

- `src/app/`: Rotas do Next.js (App Router)
  - `page.tsx`: Página Inicial
  - `resume/page.tsx`: Sobre nós & Trajetória
  - `blog/page.tsx`: Listagem de posts do blog
  - `blog/[slug]/page.tsx`: Leitura de posts específicos do blog
  - `contact/page.tsx`: Informações de contato
  - `layout.tsx`: Layout raiz com HTML, body e CSS global
  - `not-found.tsx`: Página 404 personalizada
- `src/components/`: Componentes reutilizáveis de interface
- `src/helpers/`: Definições de tipos e dados do site
- `public/`: Arquivos estáticos (imagens, favicon, etc.)
