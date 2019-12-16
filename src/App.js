import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import About from './components/About'
import Portfoliopage from './components/Portfoliopage'
import instagram from './Assets/instagramblack.png'
import facebook from './Assets/facebook.png'
import linkedin from './Assets/linkedin.png'
import leetcode from './Assets/leetcode.png'
import github from './Assets/github.png'
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


          <Header />
          <Route path='/' exact component={Portfoliopage}></Route>
          <Route path='/Portfoliopage' component={Portfoliopage}></Route>
          <Route path='/About' component={About}></Route>

        </div>

        <footer className='footer'>
          <a href='https://www.instagram.com/davidfarley71/' target='none'>  <img class='footerimg' src={instagram} ></img></a>
          <a href='https://leetcode.com/davidfarley71/' target='none'>  <img class='footerimg' src={leetcode} ></img></a>
          <a href='https://www.linkedin.com/in/david-farley-221b21a6/' target='none'>  <img class='footerimg' src={linkedin} ></img></a>
          <a href='https://github.com/davidfarley71' target='none'><img class='footerimg' src={github} ></img></a>
          <a href='https://www.facebook.com/gnarly.farley.7' target='none'><img class='footerimg' src={facebook} ></img></a>





          <a href="mailto:davidfarley7171@gmail.com">davidfarley7171@gmail.com</a>
          <a href="tel:530-215-7781">530-215-7781</a>
        </footer>

      </div>
    </Router>
  );
}

export default App;
