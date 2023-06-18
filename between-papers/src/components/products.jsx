import React from 'react';

import '../stylesheets/book-unit.css';

function Products(props){
   return(
    <div className="containerBookUnit">
      <div className="bookUnitImg">
        <img src={require(`../img/${props.img}.png`)} alt={props.alt}/>
      </div>
      <div className="textContainerBookUnit">
        <p className="name">{props.name}</p>
        <p className="price">${props.price}</p>
      </div>
      <p className='stock name'>Stock: {props.stock}</p>
    </div>    
  );
}

export default Products;