import gitLogo from '../assets/github.png';

import  Input  from '../components/Input';
import { Container } from './styles';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import {api} from '../services/api';


function App() {

  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleSearchRepo = async () => {
    try {
      const {data} = await api.get(`repos/${currentRepo}`)

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return ;
        }
    }
    } catch (error) {
        alert('Repositorio não encontrado');
    }
    
  }

  const handleRemoveRepo = (id) => {
    const removeRepo = repos.filter(repo => repo.id !== id);
    setRepos(removeRepo);
  }

  return (
    <Container>
     <img src={gitLogo} width={72} height={72} alt='Logo do github'/>
     <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
     <Button onClick={handleSearchRepo}/>
     {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo ={repo}/>)}
    </Container>
  );
}

export default App;
