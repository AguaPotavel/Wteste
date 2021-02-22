import React from 'react';
import './index.css';
import Background from './Components/Background';
import Routes from './routes'
import { Container } from './Styles/StylesDefault';

function App() {
  return (
    <Container>
      <Background/>
      <Routes />
    </Container>
  );
}

export default App;
