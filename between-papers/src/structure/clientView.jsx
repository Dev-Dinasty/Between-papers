import React from 'react';

import BookUnit from '../components/bookUnit';
import Cart from '../components/shoppingCart';

const ClientView = () => {
  return <div className='container'> 
    <div className="flexContainer">
      <h1>Catalogo</h1>
      <Cart />
    </div>
    <hr />
    <div className="gridContainer">
      <BookUnit 
      img='nudos-y-cruces_ian-rankin'
      name='Nudos y cruces'
      price='30.000'
      stock='10'
      alt='Nudos y cruces - Ian Rankin' />
      <BookUnit 
      img='crimen-y-castigo_fiódor-dostoyevski'
      name='Crimen y castigo'
      price='50.000'
      stock='7'
      alt='Crimen y castigo - Fiódor Dostoyevski' />
      <BookUnit 
      img='crimen-y-castigo_fiódor-dostoyevski'
      name='Crimen y castigo'
      price='50.000'
      stock='7'
      alt='Crimen y castigo - Fiódor Dostoyevski' />
       <BookUnit 
      img='crimen-y-castigo_fiódor-dostoyevski'
      name='Crimen y castigo'
      price='50.000'
      stock='7'
      alt='Crimen y castigo - Fiódor Dostoyevski' />
      <BookUnit 
      img='nudos-y-cruces_ian-rankin'
      name='Nudos y cruces'
      price='30.000'
      stock='10'
      alt='Nudos y cruces - Ian Rankin' />
    </div>
  </div>;
}

export default ClientView;