import React, { useState, FormEvent } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

interface Repository {
full_name: string;
description: string;
 owner: {
   login: string;
   avatar_url: string;
 }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository( event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if(!newRepo) setInputError('Digite o autor/nome do repositorio')
   try {
      const response = await api.get<Repository>(`repos/${newRepo}`)
      const repository = response.data;
      setRepositories([...repositories, repository]);

   setNewRepo('');
  } catch (error) {
    setInputError('Digite o autor/nome do repositorio')
  }

  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(rep => (
          <a key={rep.full_name} href="teste">
          <img
            src={rep.owner.avatar_url}
            alt={rep.owner.login}
          />
          <div>
        <strong>{rep.full_name}</strong>
        <p>{rep.description}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
