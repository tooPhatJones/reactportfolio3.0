import React from 'react';
import '../css/Portfoliopage.css';
import CardComponent from './CardComponent'


import reactproj from '../Assets/ReactPortfolio.png';


function blog(props) {
  var widthvar = '18rem';
  var heightvar = '130px';
  return (
    <div className="Portfoliopage">
      <CardComponent
        image={reactproj}
        width={widthvar}
        height={heightvar}
        title="Old portfolio React Project"
        text='Same Project in React'
        site='https://david-farley-portfolio.netlify.com/'
        git='https://github.com/davidfarley71/PortfolioProject2.0'
      />

    </div>
  );
}

export default blog;
