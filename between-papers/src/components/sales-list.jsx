import React from 'react';

import '../stylesheets/sales-list.css';

function SalesList(){
  return(
    <div className='listContainer'>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>idVenta</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/04/2023</td>
            <td>132</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>29/04/2023</td>
            <td>122</td>
            <td>$50</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td></td>
            <td><strong>$80</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SalesList;