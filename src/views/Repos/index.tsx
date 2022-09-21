import React from 'react';
import Home from '../../components/Home';
import NavBar from '../../components/NavBar';
import { useQuery } from 'react-query';
import axios from 'axios';
import { resolve } from 'node:path/win32';
import { Link } from 'react-router-dom';

export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/raulvlb/repos')
  
    return response.data;
  }, {
    staleTime: 1000 * 60 // 1 minute

  })

  return (
    <div className="App">
      <ul>
        { isFetching && <p>Carregando...</p> }
        {data?.map(repo => {
          return (
            <li key={repo.full_name}>
              <Link to={`repos/${repo.full_name}`}>
                {repo.full_name}
              </Link>
              <p>{repo.description ?? 'sem descrição'}</p>
            </li>
          )
        })}
      </ul>

    </div>
  );
}
