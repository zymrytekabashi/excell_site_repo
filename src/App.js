import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Container } from 'semantic-ui-react';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {

  return (

    <Container fluid>
      <Router>  <NavBar />
        <Route
          path="/"
          exact
          render={() =>
            <Homepage />}
        />
        <Route
          path="/about"
          exact
          render={() =>
            <About />}
        />
        <Route
          path="/contact"
          exact
          render={() =>
            <Contact />}
        />
      </Router>


      <Footer />
    </Container>
  );
}

export default App;
