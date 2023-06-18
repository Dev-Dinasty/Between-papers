import React from 'react';
import { NavLink, Routes,Route } from "react-router-dom";

import AddBookUnitForm from './addBookUnit';
import SalesList from './salesList';
import ProductsList from '../structure/productsList';

import '../stylesheets/header.css';

const NavigationAdmin = () => {
  return <div>
  <div className='headerContainerV2'>
      <div className="itemV2">
        <div className="darkBackgroundEffect"></div>
        <NavLink to='/adminView/' className='navLinkV2' activeClassName='activeV2'>Lista de productos</NavLink>
      </div>
      <div className="itemV2">
        <div className="darkBackgroundEffect"></div>
        <NavLink to='/adminView/addProduct' className='navLinkV2' activeClassName='activeV2'>Agregar o modificar productos</NavLink>
      </div>
      <div className="itemV2">
        <div className="darkBackgroundEffect"></div>
        <NavLink to='/adminView/salesList' className='navLinkV2' activeClassName='activeV2'>Lista de ventas</NavLink>
      </div>
  </div>
  <Routes>
    <Route exact path="/" element={<ProductsList />} />     
    <Route exact path="addProduct" element={<AddBookUnitForm />} />     
    <Route exact path="salesList" element={<SalesList />} />  
  </Routes>
</div>;
}

export default NavigationAdmin;