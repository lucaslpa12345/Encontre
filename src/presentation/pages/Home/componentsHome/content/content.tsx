import React from 'react';
import './content.css';
import {Modal} from '../modal/modal';
import {context} from './createcontexts';

export const Content: React.FC = () => {
  const [state, setState] = React.useState({
    openModal: false,
    infoModal: {

    },
  });


  const array = [{
    id: 1,
    title: 'Programador(a) - React / JavaScript',
    proprietario: 'ncinformatica',
    info: 'Descrição da empresa A Ubik do Brasil é uma empresa do Grupo KDDI, que possui mais de 100 escritórios em 28 países e 38.000 colaboradores no mundo, atuamos, desde 1996, como integradora de sistemas e, mais recentemente, como integradora cloud (soluções em nuvem), tendo a América Latina como área de atuação dentro do Grupo Atividades e Responsabilidades Análise e desenvolvimento de aplicações web e mobile, atividades referentes a Programação, desenvolvimento, manutenção e testes de sistemas de clientes. Implementação de melhorias. Arquitetar, projetar, desenvolver. Requisitos Formação Ciências da Computação / Engenharia de Software / T I    Desenvolvimento de Sistemas Inglês fluente; conhecimento de arquitetura de  microserviços. Conhecimentos em técnicas de designer, integrações a webservices, Integração com APIs Rest, GIT (branchingmerging e entre outros), banco de dados NoSQL: Redis / MongoDB, Firebase e MS SQL Server.',
    email: 'qualqueremail@gmail.com',
  },
  {
    id: 2,
    title: 'titulo aqui',
    proprietario: 'Ubik Do Brasíl',
    info: 'informações aqui',
    email: 'qualqueremail@gmail.com',
    skill: 'reactjs',
  }, {
    id: 3,
    title: 'titulo aqui',
    proprietario: 'ama',
    info: 'informações aqui',
    email: 'qualqueremail@gmail.com',
  },

  ];

  return <div id='ContainerContent' >
    <context.Provider value={{state, setState}} >
      <Modal />
    </context.Provider>
    {
      array.map((i)=> (
        <div key={i.id} id='VagaItem' onClick={(e) => setState({...state, infoModal: i, openModal: !state.openModal})
        } >
          <span id='Title' > {i.title}</span>
          <p id='Info' >{i.proprietario}</p>
          <strong id='Email' >{i.skill}</strong>
        </div>
      ))
    }

  </div>;
};

