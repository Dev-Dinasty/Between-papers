import React from 'react';
import '../stylesheets/header.css';

function Header(){
    return(<div className="header">
        <img src={require('../img/between-papers-logo.png')} alt="Logo" />
          <ul className='navbar'>
            <li>Home</li>
            <li>Vista cliente</li>
            <li>Vista admin</li>
          </ul>
    </div>
    );
}

export default Header;
