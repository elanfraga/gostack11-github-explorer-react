import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, From, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <From>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </From>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25745452?s=400&u=875f906f1d54527f5bc0f2e278c1ff7b0793df14&v=4"
            alt="Elan Fraga"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25745452?s=400&u=875f906f1d54527f5bc0f2e278c1ff7b0793df14&v=4"
            alt="Elan Fraga"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/25745452?s=400&u=875f906f1d54527f5bc0f2e278c1ff7b0793df14&v=4"
            alt="Elan Fraga"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Lorem Ipsum has been the industry's standard dummy text</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
