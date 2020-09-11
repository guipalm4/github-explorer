import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoimg from '../../assets/logo.svg';
interface RepositoryParams {
  name: string;
}

const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoimg} alt="Github Explorer" />
        <Link to="/">
          <a>Voltar</a><FiChevronLeft size={16}/>
        </Link>

      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars2.githubusercontent.com/u/18333576?s=460&u=5349ce73aa9ab8b732c27951d0a2108c7a12d485&v=4"
            alt="guipalm4"/>
          <div>
            <strong>guipalm4</strong>
            <p>descricao do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1888</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1888</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1888</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
        to="">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
};

export default Repository;
