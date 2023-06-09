import React from 'react';

import '../stylesheets/book-unit.css';

function BookUnit(props){
  return(
    <div className="containerBookUnit">
      <div className="bookUnitImg">
        <img src={require(`../img/${props.img}.png`)} alt={props.alt}/>
      </div>
      <div className="textContainerBookUnit">
        <p className="name">{props.name}</p>
        <p className="price">${props.price}</p>
      </div>
      <p className='name stock'>Stock: {props.stock}</p>
      <div className="btnContainer">
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default BookUnit;