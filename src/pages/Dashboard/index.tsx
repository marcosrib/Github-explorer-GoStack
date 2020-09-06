import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/43934564?s=460&u=7faea7c408b7d6d8a891507539c1843198904dae&v=4"
            alt="marcos"
          />
          <div>
            <strong>marcos teste</strong>
            <p>Desenvolvedor mobile react native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/43934564?s=460&u=7faea7c408b7d6d8a891507539c1843198904dae&v=4"
            alt="marcos"
          />
          <div>
            <strong>marcos teste</strong>
            <p>Desenvolvedor mobile react native</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
