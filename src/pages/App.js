import gitLogo from '../assets/github.png';

import  Input  from '../components/Input';
import { Container } from './styles';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';
import Button from '../components/Button';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
     <img src={gitLogo} width={72} height={72} alt='Logo do github'/>
     <Input />
     <Button />
     <ItemRepo />
    </Container>
  );
}

export default App;
