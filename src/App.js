// import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Container } from 'semantic-ui-react';

function App() {

  return (
    <Container fluid>
      <NavBar />
      <Hero />
      <Footer />
    </Container>
  );
}

export default App;
