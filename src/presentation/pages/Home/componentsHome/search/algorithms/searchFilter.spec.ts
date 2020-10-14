import {SearchLocalFilter} from './searchFilter';


describe.only('search Locaations', () => {
  test.only('should return a locate', () => {
    const sut = new SearchLocalFilter;

    const array = [{
      id: '1',
      title: 'Programador(a) - React / JavaScript',
      proprietario: 'ncinformatica',
      info: 'Descrição da empresa A Ubik do Brasil é uma empresa do Grupo KDDI, que possui mais de 100 escritórios em 28 países e 38.000 colaboradores no mundo, atuamos, desde 1996, como integradora de sistemas e, mais recentemente, como integradora cloud (soluções em nuvem), tendo a América Latina como área de atuação dentro do Grupo Atividades e Responsabilidades Análise e desenvolvimento de aplicações web e mobile, atividades referentes a Programação, desenvolvimento, manutenção e testes de sistemas de clientes. Implementação de melhorias. Arquitetar, projetar, desenvolver. Requisitos Formação Ciências da Computação / Engenharia de Software / T I    Desenvolvimento de Sistemas Inglês fluente; conhecimento de arquitetura de  microserviços. Conhecimentos em técnicas de designer, integrações a webservices, Integração com APIs Rest, GIT (branchingmerging e entre outros), banco de dados NoSQL: Redis / MongoDB, Firebase e MS SQL Server.',
      email: 'qualqueremail@gmail.com',
      skill: 'aws, flutter, go , nextjs',
      tipo: 'pj',
      preçoOuCusto: '1000',
      local: 'São Paulo, SP',
      PresencialOuRemoto: 'Presencial',
    },
    {
      id: '2',
      title: 'Progrmador PHP',
      proprietario: 'Ubik Do Brasíl',
      info: 'Nosso time de Engenharia e Produto está contratando!Por isso, procuramos um Desenvolvedor ou uma Desenvolvedora Full Stack Sênior para fazer parte do nosso time de Core Product e nos ajudar a entregar a melhor aplicação de autoria de treinamentos...',
      email: 'qualqueremail@gmail.com',
      skill: 'reactjs, javascript, php, lavaravel',
      tipo: 'clt',
      local: 'Brasília, DF',
      preçoOuCusto: '30000',
      PresencialOuRemoto: 'Remoto',
    }, {
      id: '3',
      title: 'Programador flutter!',
      proprietario: 'jsonfuture',
      info: 'Boa noite, pessoal!  Estamos com vaga aberta para DESENVOLVEDOR FRONT END aqui na Reweb!Somos uma multinacional, atuamos em toda a América Latina. Somos de Porto Alegre, mas atualmente estamos atuando no modelo homeoffice.',
      email: 'qualqueremail@gmail.com',
      skill: 'Reactjs, javascript',
      tipo: 'pj',
      PresencialOuRemoto: 'Presencial',
      preçoOuCusto: '2000',
      local: 'Brasília, DF',
    },

    ];

    sut.search(array, {searchingFor: 'Flutter'});
  });
});

