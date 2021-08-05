import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Container } from 'semantic-ui-react';
import Homepage from './components/Homepage/Homepage';

function App() {

  return (
    <Container fluid>
      <NavBar />
      <Homepage />
      <Footer />
    </Container>
  );
}

export default App;
