import React, {useState} from 'react';

import UnitsList from './units-list';
import SalesList from './sales-list';

function AdminViewStructure(){
    
  const[adminViewNavBar, setAdminViewNavBar] = useState(false);

  return(
    <div>
      <div className="solidHeaderContainer">
        <div className="header">
          <ul className='navbar crowedFont'>
            <li onClick={()=> setAdminViewNavBar(!adminViewNavBar)}><strong>Lista productos</strong></li>
            <li onClick={()=> setAdminViewNavBar(!adminViewNavBar)}><strong>Lista ventas</strong></li>
          </ul>
        </div>
      </div>
      {!adminViewNavBar && 
        <div className='catalogueUnits'>
          <UnitsList
            name='Nudos y cruces'
            stars='5'
            img='nudos-y-cruces_ian-rankin'
            alt='Nudos y cruces - Ian Rankin'
            price='30k'
            stock='10'/>
          <UnitsList
            name='Crimen y castigo'
            stars='4'
            img='crimen-y-castigo_fiódor-dostoyevski'
            alt='Criemn y castigo - fiódor Dostoyevski'
            price='50k'
            stock='15'/>
        </div>
      }
      {adminViewNavBar && 
          <SalesList />
      }
     </div>
  );
}

export default AdminViewStructure;