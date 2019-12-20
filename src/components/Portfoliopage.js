import React from 'react';
import '../css/Portfoliopage.css';
import CardComponent from './CardComponent'

import ang from '../Assets/angularPortfolio.png';
import vue from '../Assets/VueVersion.png';
import reactproj from '../Assets/ReactPortfolio.png';
import calculator from '../Assets/jqueryCalculator.png';
import nyt from '../Assets/nyt.png';


function Portfoliopage(props) {
  console.log('test')
  return (
    <div className="Portfoliopage">
     

        <CardComponent
          image={ang}
          width='18rem'
          title="Sample Angular Project"
          text='Same Project in Angular'
          site='https://angularportfolio-99685.firebaseapp.com'
          git='https://github.com/davidfarley71/AngularPortfolio'
        />
        <CardComponent
          image={vue}
          width='18rem'
          title="Sample Vue.JS Project"
          text='Same Project in Vue.JS'
          site='https://vueportfolio-f5902.firebaseapp.com/#/'
          git='https://github.com/davidfarley71/Vue-Portfolio'
        />
        <CardComponent
          image={reactproj}
          width='18rem'
          title="Sample React Project"
          text='Same Project in React'
          site='https://david-farley-portfolio.netlify.com/'
          git='https://github.com/davidfarley71/Portfol
          ioProject2.0'
        />
          <CardComponent
          image={calculator}
          width='18rem'
          title="Simple calculator app"
          site='https://davidfarley71.github.io/jQueryCalculator/'
          text='Demonstrate use of Jquery'
          git='https://github.com/davidfarley71/jQueryCalculator'
        />
            <CardComponent
          image={nyt}
          width='18rem'
          title="New York Times Article Search"
          site='https://davidfarley71.github.io/NewYorkTimesSearch/index.html'
          text='Demonstrate Bootstrap and useing a public API'
          git='https://github.com/davidfarley71/NewYorkTimesSearch'
        />
    </div>
  );
}

export default Portfoliopage;
