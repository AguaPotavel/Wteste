import React from 'react';
import './index.css';
import Background from './Components/Background';
import Routes from './routes'
import { Container } from './Styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Routes />
      <Background/>
    </Container>
  );
}

export default App;
