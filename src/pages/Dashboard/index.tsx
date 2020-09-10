import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoimg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explorer" />
      <Title>Explore repositorios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/18333576?s=460&u=5349ce73aa9ab8b732c27951d0a2108c7a12d485&v=4"
            alt="Guilherme Palma"
          />
          <div>
            <strong>guipalm4/github-explorer</strong>
            <p> My first web app with Reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/18333576?s=460&u=5349ce73aa9ab8b732c27951d0a2108c7a12d485&v=4"
            alt="Guilherme Palma"
          />
          <div>
            <strong>guipalm4/github-explorer</strong>
            <p> My first web app with Reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/18333576?s=460&u=5349ce73aa9ab8b732c27951d0a2108c7a12d485&v=4"
            alt="Guilherme Palma"
          />
          <div>
            <strong>guipalm4/github-explorer</strong>
            <p> My first web app with Reactjs</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
