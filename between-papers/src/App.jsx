import React, {useState} from 'react';

import BookUnit from './components/book-unit';
import AdminViewStructure from './components/admin-view-structure';
import AddBookUnitForm from './components/add-book-unit';
import Cart from './components/shopping-cart-book-unit';
import './App.css';


function App() {


  const[addBookUnit, setAddBookUnit] = useState(false);
  const[adminView, setAdminView] = useState(false);


  return (
    <div className="App">
      <div className='headerContainer'>
        <div className="header">
          <img src={require('./img/between-papers-logo.png')} alt="Logo" />
          <ul className='navbar'>
            <li onClick={()=> setAdminView(!adminView)}>Cambiar vista</li>
          </ul>
        </div>
      </div>
      <div className='solidHeaderContainer'></div>
      <div className='body'>
        <div className='catalogue'>
          <div className="catalogueTitle">
            {!adminView && <h1>Catalogo</h1>}
            <button className='svg'>
              {adminView && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={()=> setAddBookUnit(!addBookUnit)}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>}
              {!adminView && <Cart/>}
            </button>
          </div>
        {addBookUnit && <AddBookUnitForm />}
        {adminView &&
          <AdminViewStructure/>
        }
        {!adminView &&
          <div className='catalogueUnits'>
            <BookUnit
              name='Nudos y cruces'
              stars='5'
              img='nudos-y-cruces_ian-rankin'
              alt='Nudos y cruces - Ian Rankin'
              price='30k'
              stock='10'/>
            <BookUnit
              name='Crimen y castigo'
              stars='4'
              img='crimen-y-castigo_fiódor-dostoyevski'
              alt='Criemn y castigo - fiódor Dostoyevski'
              price='50k'
              stock='15'/>
          </div>
}
        </div>
      </div>
    </div>
  );
}

export default App;