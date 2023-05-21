import './App.css';
import React from 'react';

import BookUnit from './components/book-unit';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <Header />
      </div>
      <div className='body'>
        <div className='catalogue'>
          <h1 className='catalogueTitle'>Catálogo</h1>
          <div className='catalogueUnits'>
            <BookUnit
            name='Nudos y cruces'
            stars='5'
            img='nudos-y-cruces_ian-rankin'
            alt='Nudos y cruces - Ian Rankin'
            price='30k'/>
            <BookUnit
            name='Crimen y castigo'
            stars='4'
            img='crimen-y-castigo_fiódor-dostoyevski'
            alt='Criemn y castigo - fiódor Dostoyevski'
            price='50k'/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
