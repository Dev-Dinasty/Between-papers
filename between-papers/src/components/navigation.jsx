import React from 'react';
import { NavLink } from "react-router-dom";

import '../stylesheets/header.css';

const Navigation = () => {
  return <div className='headerContainer'>
    <div className="item">
      <NavLink exact to='/' className='navLink' activeClassName='active'>Vista cliente</NavLink>
    </div>
    <div className="item">
      <NavLink exact to='/adminView/' className='navLink' activeClassName='active'>Vista administrador</NavLink>
    </div>
  </div>;
}

export default Navigation;