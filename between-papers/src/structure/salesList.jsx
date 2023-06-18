import React from 'react';

import Products from '../components/products';

const ProductsList = () => {
  return <div>
    <Products 
    img='nudos-y-cruces_ian-rankin'
    name='Nudos y cruces'
    price='30.000'
    stock='10'
    alt='Nudos y cruces - Ian Rankin'/>
  </div>;
}

export default ProductsList;