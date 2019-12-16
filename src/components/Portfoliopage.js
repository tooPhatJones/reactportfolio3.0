import React from 'react';
import '../css/Portfoliopage.css';
import CardComponent from './CardComponent'

import ang from '../Assets/angularPortfolio.png';
import vue from '../Assets/VueVersion.png';
import reactproj from '../Assets/ReactPortfolio.png';


function Portfoliopage(props) {
  console.log('test')
  return (
    <div className="Portfoliopage">
      <CardComponent
        image={ang}
        width = '18rem'
        title="Sample Angular Project"
        text='Same Project in Angular'
        site='https://angularportfolio-99685.firebaseapp.com'
        git='https://github.com/davidfarley71/AngularPortfolio'
      />
      <CardComponent
        image={vue}
        width = '18rem'
        title="Sample Vue.JS Project"
        text='Same Project in Vue.JS'
        site='https://vueportfolio-f5902.firebaseapp.com/#/'
        git='https://github.com/davidfarley71/Vue-Portfolio'
      />
      <CardComponent
        image={reactproj}
        width = '18rem'
        title="Sample React Project"
        text='Same Project in React'
        site='https://david-farley-portfolio.netlify.com/'
        git='https://github.com/davidfarley71/PortfolioProject2.0'
      />

    </div>
  );
}

export default Portfoliopage;
