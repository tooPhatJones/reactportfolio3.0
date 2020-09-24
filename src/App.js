import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import About from './components/About'
import Portfoliopage from './components/Portfoliopage'
import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="main">
          <Container>
            <Header />
            <Route path='/' exact component={Portfoliopage}></Route>
            <Route path='/Portfoliopage' component={Portfoliopage}></Route>
            <Route path='/About' component={About}></Route>
          </Container>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
