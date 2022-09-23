import React, { useState } from 'react';
import Home from '../../components/Home';
import NavBar from '../../components/NavBar';
import { useQuery } from 'react-query';
import axios from 'axios';
import { resolve } from 'node:path/win32';
import { Link } from 'react-router-dom';
import { RepoCard, RepoHeader, RepoSection } from './styles';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

export type Repository = {
  name: string;
  description: string;
  language: string;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/raulvlb/repos')

    return response.data;
  }, {
    staleTime: 1000 * 60 // 1 minute

  })

  //slider
  let left;
  left = <BsChevronLeft />

  let rigth;
  rigth = <BsChevronRight />

  const [num, setNum] = useState(0);

  function prev() {
    if (num <= 0) {
      return num + 0
    } else {
      return num - 1
    }
  }

  function next() {
    if (num >= Number(data?.length)-1) {
      return num + 0
    } else {
      return num + 1
    }
  }

  return (
    <div className="App">
      <RepoHeader>
        <h1>Meus <span>Projetos</span>.</h1>
        <p>Abaixo estão alguns repositorios de projetos que desenvolvi ao longo da minha caminhada como programador</p>
      </RepoHeader>
      <RepoSection>
        <IconContext.Provider value={{ className: 'prev-icon' }}>
          {num > 0 && <button className='prev' onClick={() => setNum(prev)}>{left}</button>}
        </IconContext.Provider>
        <RepoCard>
          {data && <h1>{data[num].name}</h1>}     
          {data && <p>{data[num].description}</p>}
          {data && <p><span>{`Linguagem predominante: ${data[num].language}`}</span></p>}
          {data && <Link to={`repos/${data[num].name}`} style={{ textDecoration: 'none' }}>
            <div className='ver-mais'>
              <a>VER MAIS</a>
            </div>
          </Link>}       
        </RepoCard>
        <IconContext.Provider value={{ className: 'next-icon' }}>
          {num < (Number(data?.length)-1) && <button className='next' onClick={() => setNum(next)}>{rigth}</button>}
        </IconContext.Provider>
      </RepoSection>
      {isFetching && <p>Carregando...</p>}


    </div>
  );
}
