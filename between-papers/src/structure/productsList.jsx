import React from 'react';

import Products from '../components/products';

import '../stylesheets/productList.css';

const ProductsList = () => {
  return <div className='productsListContainer'>
    <div className="flexContainer  productsContainer">
      <div className="itemContainer principal">
        <p>PORTADA</p>
      </div>
      <div className="itemContainer principal">
        <p>NOMBRE</p>
      </div>
      <div className="itemContainer principal">
        <p>PRECIO</p>
      </div>
      <div className="itemContainer principal">
        <p>STOCK</p>
      </div>
    </div> 
    <Products 
    img='nudos-y-cruces_ian-rankin'
    name='Nudos y cruces'
    price='30.000'
    stock='10'
    alt='Nudos y cruces - Ian Rankin'/>
    <Products 
    img='crimen-y-castigo_fiódor-dostoyevski'
    name='Crimen y castigo - Fiódor Dostoyevski'
    price='50.000'
    stock='15'
    alt='Crimen y castigo - Fiódor Dostoyevski'/>
  </div>;
}

export default ProductsList;