import React from 'react';
import '../css/Portfoliopage.css';
import CardComponent from './CardComponent'

import ang from '../Assets/angularPortfolio.png';
import vue from '../Assets/VueVersion.png';
import reactproj from '../Assets/ReactPortfolio.png';
import calculator from '../Assets/jqueryCalculator.png';
import nyt from '../Assets/nyt.png';
import dotdata from '../Assets/DotDataProject.png';


function Portfoliopage(props) {
  var widthvar = '18rem';
  var heightvar = '130px';
  return (
    <div className="Portfoliopage">
        <CardComponent
          image={ang}
          width={widthvar}
          height={heightvar}
          title="Sample Angular Project"
          text='Same Project in Angular'
          site='https://angularportfolio-99685.firebaseapp.com'
          git='https://github.com/davidfarley71/AngularPortfolio'
        />
        <CardComponent
          image={vue}
          width={widthvar}
          height={heightvar}
          title="Sample Vue.JS Project"
          text='Same Project in Vue.JS'
          site='https://vueportfolio-f5902.firebaseapp.com/#/'
          git='https://github.com/davidfarley71/Vue-Portfolio'
        />
        <CardComponent
          image={reactproj}
          width={widthvar}
          height={heightvar}
          title="Sample React Project"
          text='Same Project in React'
          site='https://david-farley-portfolio.netlify.com/'
          git='https://github.com/davidfarley71/Portfol
          ioProject2.0'
        />
          <CardComponent
          image={calculator}
          width={widthvar}
          height={heightvar}
          title="Simple calculator app"
          site='https://davidfarley71.github.io/jQueryCalculator/'
          text='Demonstrate use of Jquery'
          git='https://github.com/davidfarley71/jQueryCalculator'
        />
            <CardComponent
          image={nyt}
          width={widthvar}
          height={heightvar}
          title="New York Times Search"
          site='https://davidfarley71.github.io/NewYorkTimesSearch/index.html'
          text='Bootstrap and public API'
          git='https://github.com/davidfarley71/NewYorkTimesSearch'
        />
        <CardComponent
          image={dotdata}
          width={widthvar}
          height={heightvar}
          title="Simple Angular8 with filter and sort"
          site='https://bookshelf-7d8bd.web.app/'
          text='Responsive design with modal slideshow, Jasmine and karma tests'
          git='https://github.com/davidfarley71/Bookshelf'
        />
    </div>
  );
}

export default Portfoliopage;
