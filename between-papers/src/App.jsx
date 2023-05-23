import React from 'react';

import BookUnit from './components/book-unit';
import Header from './components/header';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <Header />
      </div>
      <div className='body'>
        <div className='catalogue'>
          <div className="catalogueTitle">
            <h1>Catálogo</h1>
            <button className='svg'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>      
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </button>
          </div>
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
