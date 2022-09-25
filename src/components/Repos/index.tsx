import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { resolve } from 'node:path/win32';
import { Link } from 'react-router-dom';
import { LeftBackRepoCard, RepoCard, RepoHeader, RepoSection, RightBackRepoCard } from './styles';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';

// para linkar para view do repositorio
// to={`repos/${data[num - 1].name}`}

export type Repository = {
  name: string;
  description: string;
  language: string;
  html_url: string;
}

export function Repos() {

  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/raulvlb/repos')

    return response.data;
  }, {
    staleTime: 1000 * 60 // 1 minute

  })

  //timer
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    if (counter > 0){
      setCounter(counter -1)
    }
    if (cartaoRepo && counter == 0){
      cartaoRepo.style.transform = "translate(0px, 0%)"
    }
  }, [counter]);
  
  //slider
  let left;
  left = <BsChevronLeft />

  let rigth;
  rigth = <BsChevronRight />

  const [num, setNum] = useState(0);

  const cartaoRepo = document.getElementById("card");

  function prev() {
    setCounter(500) // 0.5 seconds
    if (cartaoRepo){
      cartaoRepo.style.transform = "translate(-30%, 0px) "
    }
    if (num <= 0) {
      return num + 0
    } else {
      return num - 1
    }
  }

  function next() {
    setCounter(500) // 0.5 seconds
    if (cartaoRepo){
      cartaoRepo.style.transform = "translate(30%, 0px) "
    }
    if (num >= Number(data?.length)-1) {
      return num + 0
    } else {
      return num + 1
    }
  }

  return (
    <div className="App" id='repos'>
      <RepoHeader>
        <h1>Meus <span>Projetos</span>.</h1>
        <p>Abaixo estão alguns repositorios de projetos que desenvolvi ao longo da minha caminhada como programador</p>
      </RepoHeader>
      <RepoSection>
        <IconContext.Provider value={{ className: 'prev-icon' }}>
          {num > 0 && <button className='prev' onClick={() => setNum(prev)}>{left}</button>}
        </IconContext.Provider>   

        {data && num > 0 &&       
          <LeftBackRepoCard id='leftcard'>
            <div onClick={() => setNum(prev)}>
              <h1>{data[num - 1].name}</h1>
              {data && <p>{data[num - 1].description}</p>}
              {data && <p><span>{`Linguagem predominante: ${data[num - 1].language}`}</span></p>}
              {data && 
                <a className='ver-mais' target="_blank" style={{ textDecoration: 'none' }}>
                  VER MAIS
                </a>            
              }      
            </div>    
          </LeftBackRepoCard>
        }      

        <RepoCard id="card">
          {data && <h1>{data[num].name}</h1>}     
          {data && <p>{data[num].description}</p>}
          {data && <p><span>{`Linguagem predominante: ${data[num].language}`}</span></p>}
          {data && 
              <a className='ver-mais' href={data[num].html_url} target="_blank" style={{ textDecoration: 'none' }}>
                VER MAIS
              </a>            
            }       
        </RepoCard>

        {data && num + 1 <  Number(data?.length) && 
          <RightBackRepoCard id='rightcard'>
            <div onClick={() => setNum(next)}>
              <h1>{data[num + 1].name}</h1>
              {data && <p>{data[num + 1].description}</p>}
              {data && <p><span>{`Linguagem predominante: ${data[num + 1].language}`}</span></p>}
              {data && 
                <a className='ver-mais' target="_blank" style={{ textDecoration: 'none' }}>
                  VER MAIS
                </a>            
              }     
            </div>
          </RightBackRepoCard>
        }  

        <IconContext.Provider value={{ className: 'next-icon' }}>
          {num < (Number(data?.length)-1) && <button className='next' onClick={() => setNum(next)}>{rigth}</button>}
        </IconContext.Provider>
      </RepoSection>
      {isFetching && <p>Carregando...</p>}


    </div>
  );
}
