import React, {useState} from 'react';

import BookUnit from './components/book-unit';

import AdminViewStructure from './components/admin-view-structure';

import AddBookUnitForm from './components/add-book-unit';

import './App.css';


function App() {


  const[addBookUnit, setAddBookUnit] = useState(false);
  const[adminView, setAdminView] = useState(false);
  const[show, setShow] = useState(false);
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
              {!adminView && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>}
            </button>
          </div>
        {addBookUnit && <AddBookUnitForm/>}
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
        </div>
      </div>
    </div>
  );
}

export default App;