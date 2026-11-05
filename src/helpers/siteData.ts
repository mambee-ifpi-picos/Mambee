export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
}

export const siteMetadata: SiteMetadata = {
  title: 'Mambee',
  description: 'Fábrica Escola de Software Mambee',
  author: 'Jesiel Viana'
};

export interface HeroData {
  title: string;
  subtitle: string;
  content: string;
  linkTo: string;
  linkText: string;
}

export const heroData: HeroData = {
  title: 'Fábrica Escola de Software',
  subtitle: 'Mambee',
  content:
    'A Fábrica Escola de Software Mambee é um projeto que busca a inovação e a interação contínua entre teoria e prática, subsidiando os alunos na aplicação real dos conceitos aprendidos em sala de aula. Visa desenvolver projetos reais para o público interno e externo em um ambiente acadêmico similar ao ambiente de uma empresa de desenvolvimento de software profissional, que tem como principal objetivo preparar nossos alunos para o mercado profissional de desenvolvimento de software.',
  linkTo: '/sobre',
  linkText: 'Mais sobre nós'
};

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  title: 'Serviços',
  subtitle: 'O que nós fazemos',
  items: [
    {
      id: 'service-1',
      title: 'Desenvolvimento Web',
      icon: 'laptop-code',
      description:
        'Desenvolvimento de aplicações Web responsivas dentro dos padrões de boa prática e usabilidade exigidos pelo mercado.'
    },
    {
      id: 'service-2',
      title: 'Desenvolvimento Mobile',
      icon: 'mobile-alt',
      description: 'Desenvolvimento de aplicativos móveis para Android e iOS.'
    },
    {
      id: 'service-3',
      title: 'Consultoria',
      icon: 'users',
      description:
        'Consultoria especializada em engenharia de software, desenvolvimento de aplicações Web e móveis, processos e métodos ágeis.'
    },
    {
      id: 'service-4',
      title: 'Tecnologias e métodos',
      icon: 'laptop-code',
      description:
        'Temos experiências com as seguintes tecnologias e métodos: Javascript, Angular, React, Vue.js, Java, Python, Flutter, Scrum, XP, Kanban.'
    }
  ]
};

export interface TestimonialItem {
  id: string;
  title: string;
  cover: string;
  content: string;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export const testimonialsData: TestimonialsData = {
  title: 'Pessoas',
  subtitle: 'Nossos colaboradores',
  items: [
    {
      id: 'testimonial-1',
      title: 'Aislan Rafael',
      cover: '/images/testimonials/testimonial-1.png',
      content:
        'Mestre em Engenharia de Software - Cesar School (2015). Coordenador da Mambee e professor do IFPI desde 2007. Tem experiência na área de Ciência da Computação, com ênfase em Web, atuando principalmente nos seguintes temas: engenharia de software e empreendedorismo digital.'
    },
    {
      id: 'testimonial-2',
      title: 'Jesiel Viana',
      cover: '/images/testimonials/jesiel.jpg',
      content:
        'Professor no IFPI desde 2016, Desenvolvedor de Software com mais de 10 anos de experiência no mercado profissional e Mestre em Engenharia de Software pela Cesar School.'
    },
    {
      id: 'testimonial-3',
      title: 'Rafael Ramos',
      cover: '/images/testimonials/rafael.jpeg',
      content:
        'Estudante do curso de ADS - IFPI Campus Picos. Possui experiência com desenvolvimento frontend utilizando HTML, CSS, Javascript, Vue.js, etc.'
    },
    {
      id: 'testimonial-jader',
      title: 'Jáder Abreu',
      cover: '/images/testimonials/jader.png',
      content:
        'Doutorando em Ciência da Computação pelo Centro de Informática da UFPE. Professor de Informática no IFPI Campus Picos (2014). Pesquisador da intersecção entre tecnologia e dança. Tem experiência em projetos de realidade virtual e jogos aplicados à educação.'
    },
    {
      id: 'testimonial-leo',
      title: 'Leonardo Neiva',
      cover: '/images/testimonials/leonardo.jpg',
      content:
        'Desenvolvedor de aplicativos móveis na ePHealth Primary Care Solution, Santa Catarina - Brasil. Experiência em desenvolvimento mobile em Flutter/Dart, front-end em Vue.js e back-end em Laravel (php).'
    },
    {
      id: 'testimonial-romulo',
      title: 'Rômulo Carvalho',
      cover: '/images/testimonials/romim.jpeg',
      content:
        'Estudante do curso de ADS - IFPI Campus Picos. Possui experiência com desenvolvimento frontend utilizando HTML, CSS, Javascript, Vue.js, etc.'
    }
  ]
};

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  content: string;
}

export interface ExperiencesData {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export const experiencesData: ExperiencesData = {
  title: 'Experiências',
  subtitle: 'Projetos',
  items: [
    {
      id: 'experience-1',
      company: 'Zona Azul Digital',
      position: 'Prefeitura de Picos',
      startDate: 'Nov 2017',
      endDate: 'Dez 2018',
      content:
        'Plataforma digital composta por três módulos: um sistema Web para gestão da Zona Azul de Picos, aplicativo móvel para usuários da Zona Azul e aplicativo móvel para controle dos fiscais.'
    },
    {
      id: 'experience-2',
      company: 'Gestor Go',
      position: 'Via bebidas',
      startDate: 'Jan 2018',
      endDate: 'Dez 2020',
      content: 'Sistema Web para gerenciamento de plano de ações.'
    },
    {
      id: 'experience-3',
      company: 'Sistema Escolar',
      position: 'São Lucas',
      startDate: 'Jan 2018',
      endDate: 'Jun 2019',
      content: 'Sistema completo de gestão escolar.'
    }
  ]
};

export interface EducationItem {
  id: string;
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
  content: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export const educationData: EducationData = {
  title: 'Reconhecimentos',
  subtitle: 'Prêmios',
  items: [
    {
      id: 'education-1',
      university: 'Educação empreendedora em nível superior',
      degree: 'Sebrae',
      startDate: '2019',
      endDate: '2019',
      content:
        'O Prêmio SEBRAE de Educação Empreendedora é uma iniciativa do Serviço Brasileiro de Apoio às Micro e Pequenas empresas – SEBRAE –, que vai identificar, estimular, reconhecer e divulgar as melhores práticas da educação empreendedora no Brasil.'
    }
  ]
};

export interface SkillItem {
  id: string;
  title: string;
  percentage: number;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  items: SkillItem[];
}

export const skillsData: SkillsData = {
  title: 'Habilidades',
  subtitle: 'Tecnologias e ferramentas',
  items: [
    { id: 'skill-1', title: 'HTML', percentage: 100 },
    { id: 'skill-2', title: 'CSS', percentage: 100 },
    { id: 'skill-3', title: 'JavaScript', percentage: 100 },
    { id: 'skill-4', title: 'TypeScript', percentage: 90 },
    { id: 'skill-5', title: 'React', percentage: 90 },
    { id: 'skill-6', title: 'Vue.js', percentage: 100 },
    { id: 'skill-7', title: 'Flutter', percentage: 75 },
    { id: 'skill-8', title: 'Métodos ágeis', percentage: 95 }
  ]
};

export interface ContactItem {
  id: string;
  title: string;
  icon: string;
  content: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  items: ContactItem[];
}

export const contactData: ContactData = {
  title: 'Contato',
  subtitle: 'Para mais informações',
  items: [
    {
      id: 'contact-1',
      title: 'Email',
      icon: 'paper-plane',
      content: 'mambee@ifpi.edu.br'
    },
    {
      id: 'contact-2',
      title: 'Endereço',
      icon: 'map-marker-alt',
      content: 'IFPI Campus Picos, Sala E5 (Mambee), Pantanal, Picos - PI'
    },
    {
      id: 'contact-3',
      title: 'Instagram',
      icon: 'hashtag',
      content: '@mambeeifpi'
    }
  ]
};

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  contentHtml: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'tools',
    slug: 'tools',
    title: 'Ferramentas para organização e produtividade Dev',
    description: 'Lista de ferramentas para ajudar na organização e produtividade Dev',
    date: '21 de Dezembro de 2021',
    tags: ['ferramentas', 'organização', 'produtividade'],
    cover: '/images/blog/productive.png',
    contentHtml: `
      <h3>Editor de Código (IDE)</h3>
      <ul>
        <li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a></li>
        <li><a href="https://www.jetbrains.com/fleet/" target="_blank" rel="noreferrer">Fleet</a></li>
        <li><a href="https://www.sublimetext.com/" target="_blank" rel="noreferrer">Sublimetext</a></li>
      </ul>

      <h3>Cliente de banco de dados</h3>
      <ul>
        <li><a href="https://www.beekeeperstudio.io/" target="_blank" rel="noreferrer">Beekeeper (banco de dados relacional)</a></li>
        <li><a href="https://robomongo.org/" target="_blank" rel="noreferrer">Robo 3T (banco de dados NoSQL)</a></li>
      </ul>

      <h3>Cliente de API</h3>
      <ul>
        <li><a href="https://httpie.io/" target="_blank" rel="noreferrer">Httpie (recomendo) - uso via terminal e interface gráfica</a></li>
        <li><a href="https://hoppscotch.io" target="_blank" rel="noreferrer">Hoppscotch (web, com suporte a GraphQL)</a></li>
      </ul>

      <h3>Imagens e ilustrações</h3>
      <ul>
        <li><a href="https://duo.alexpate.uk/" target="_blank" rel="noreferrer">Paleta de cores (dual color)</a></li>
        <li><a href="https://www.happyhues.co/" target="_blank" rel="noreferrer">Paleta de cores (várias)</a></li>
        <li><a href="https://illlustrations.co/" target="_blank" rel="noreferrer">Ilustrações open-source</a></li>
        <li><a href="https://undraw.co" target="_blank" rel="noreferrer">Ilustrações open-source dinâmicas (recomendo)</a></li>
        <li><a href="https://ray.so/" target="_blank" rel="noreferrer">Gerar prints de códigos</a></li>
      </ul>

      <h3>Banco de dados online</h3>
      <ul>
        <li><a href="https://www.elephantsql.com/" target="_blank" rel="noreferrer">Elephantsql para PostgreSQL</a></li>
        <li><a href="https://www.clever-cloud.com/" target="_blank" rel="noreferrer">Clever-cloud (MongoDB, PostgreSQL, Redis, etc)</a></li>
        <li><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase é uma alternativa open-source ao Firebase</a></li>
      </ul>

      <h3>Plataforma cloud para hospedagem</h3>
      <ul>
        <li><a href="https://supabase.com/" target="_blank" rel="noreferrer">Supabase é uma alternativa open-source ao Firebase</a></li>
        <li><a href="https://www.heroku.com/" target="_blank" rel="noreferrer">Heroku</a></li>
        <li><a href="https://www.netlify.com/" target="_blank" rel="noreferrer">Netlify</a></li>
      </ul>

      <h3>Drive com criptografia</h3>
      <ul>
        <li><a href="https://www.sync.com/" target="_blank" rel="noreferrer">Sync</a></li>
        <li><a href="https://icedrive.net/" target="_blank" rel="noreferrer">Icedrive</a></li>
      </ul>

      <h3>Ferramentas para organização de tarefas</h3>
      <ul>
        <li><a href="https://www.any.do/" target="_blank" rel="noreferrer">Any.do</a></li>
        <li><a href="https://todoist.com" target="_blank" rel="noreferrer">Todoist</a></li>
        <li><a href="https://todo.microsoft.com/pt-br/" target="_blank" rel="noreferrer">Microsoft To-do</a></li>
      </ul>

      <h3>Ferramentas para anotações</h3>
      <ul>
        <li><a href="https://getupnote.com/" target="_blank" rel="noreferrer">UpNote (recomendo)</a></li>
        <li><a href="https://www.notion.so/" target="_blank" rel="noreferrer">Notion</a></li>
      </ul>

      <h3>Outros</h3>
      <ul>
        <li><a href="https://screenshot.guru" target="_blank" rel="noreferrer">Screenshot, print screen em alta resolução</a></li>
        <li><a href="https://caniuse.com/" target="_blank" rel="noreferrer">Can I use - compatibilidade de recursos HTML, CSS e JS</a></li>
      </ul>
    `
  },
  {
    id: 'web-dev',
    slug: 'web-dev',
    title: 'Stack Mambee de desenvolvimento Web',
    description: 'Lista de tecnologias que usamos na Mambee e materiais de estudos',
    date: '21 de Dezembro de 2021',
    tags: ['Web', 'Estudo', 'Tecnologias'],
    cover: '/images/blog/stack.png',
    contentHtml: `
      <h2>Nossas tecnologias e ferramentas de desenvolvimento Web</h2>
      <hr class="my-4" />
      <p><strong>Front-end</strong></p>
      <ol>
        <li>HTML, CSS e Javascript</li>
        <li>Vue.js e Nuxt.js</li>
        <li>Jest e Cypress (testes automatizados)</li>
        <li>Gitlab (controle de versão e automação de CI/CD)</li>
        <li>Netlify (hospedagem)</li>
      </ol>

      <p class="mt-4"><strong>Back-end</strong></p>
      <ol>
        <li>Javascript ou Typescript</li>
        <li>Node.js</li>
        <li>Express.js ou Nest.js (framework web para Node.js)</li>
        <li>Jest e Supertest (testes automatizados)</li>
        <li>Gitlab (controle de versão e automação de CI/CD)</li>
        <li>Heroku (hospedagem)</li>
        <li>PostgreSQL (banco de dados relacional)</li>
        <li>MongoDB (banco de dados NoSQL)</li>
        <li>Prisma (ORM de banco de dados para PostgreSQL ou MongoDB)</li>
        <li>Mongoose (ORM de banco de dados para MongoDB)</li>
        <li>Sequelize (ORM de banco de dados para PostgreSQL)</li>
      </ol>

      <hr class="my-4" />
      <blockquote class="border-l-4 border-pink-700 pl-4 italic my-4">
        Abaixo segue uma lista de materiais gratuitos sobre desenvolvimento Web baseado em nossa stack de desenvolvimento.
      </blockquote>

      <h3>Fundamentos</h3>
      <p><em>O que todo desenvolvedor Web deve saber</em></p>
      <ul>
        <li><a href="https://webdev.jesielviana.com/introducao/aula-1-tecnologias-e-ferramentas-para-desenvolvimento-web" target="_blank" rel="noreferrer">Introdução a Web</a></li>
        <li><a href="https://webdev.jesielviana.com/introducao/fluxo-de-trabalho" target="_blank" rel="noreferrer">Ferramentas e fluxo de trabalho</a></li>
        <li><a href="https://webdev.jesielviana.com/introducao/como-a-web-funciona" target="_blank" rel="noreferrer">Como a Web funciona?</a></li>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/Como_a_Web_funciona" target="_blank" rel="noreferrer">Como a web funciona, by MDN</a></li>
        <li><a href="https://webdev.jesielviana.com/introducao/http" target="_blank" rel="noreferrer">HTTP</a></li>
        <li><a href="https://www.atlassian.com/br/git/tutorials/what-is-version-control" target="_blank" rel="noreferrer">Controle de versão</a></li>
        <li><a href="https://www.youtube.com/watch?v=UMhskLXJuq4" target="_blank" rel="noreferrer">Git e Github para iniciantes (Vídeo)</a></li>
        <li><a href="https://www.youtube.com/watch?v=P4BNi_yPehc" target="_blank" rel="noreferrer">O que são Git e Github? (Vídeo)</a></li>
        <li><a href="https://www.jesielviana.com/guia-dev-web" target="_blank" rel="noreferrer">Guia para se tornar um(a) desenvolvedor(a) Web</a></li>
      </ul>

      <h3>Front-end</h3>
      <ul>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noreferrer">Documentação do HTML (Português)</a></li>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noreferrer">Documentação do CSS (Português)</a></li>
        <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" rel="noreferrer">Documentação do Javascript (Português)</a></li>
        <li><a href="https://javascript.info/" target="_blank" rel="noreferrer">The Modern JavaScript Tutorial</a></li>
      </ul>
    `
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  const cleanSlug = slug.replace(/^\/blog\//, '').replace(/\/$/, '');
  return blogPosts.find((p) => p.slug === cleanSlug);
}

