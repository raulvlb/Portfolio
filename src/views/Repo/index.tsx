import { useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { Repository } from '../../components/Repos';

export function Repo(){
    const params = useParams()
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient()

    async function handleChangeRepositoryDescription(){
        

        //chamada api para att descri. do repositorio
        const previousRepos = queryClient.getQueryData<Repository[]>('repos')
        
        if (previousRepos){
            const nextRepos = previousRepos.map(repo => {
                if (`repos/${repo.name}` === currentRepository){
                    
                    return {...repo, description: 'Testando'}
                } else{
                    return repo;
                }
            })

            queryClient.setQueryData('repos', nextRepos)
        }
    }

    return (
        <div>
            <h1>{currentRepository}</h1>
            <button onClick={handleChangeRepositoryDescription} >alterar descrição</button>
        </div>
    )
}