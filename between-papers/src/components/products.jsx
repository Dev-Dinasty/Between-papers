import React from 'react';

import '../stylesheets/productList.css';

function Products(props){
   return(
    <div className="flexContainer">
      <div className="itemContainer">
        <img src={require(`../img/${props.img}.png`)} alt={props.alt}/>
      </div>
      <div className="itemContainer">
        <p>{props.name}</p>
      </div>
      <div className="itemContainer">
        <p>${props.price}</p>
      </div>
      <div className="itemContainer">
        <p>Stock: {props.stock}</p>
      </div>
    </div>    
  );
}

export default Products;