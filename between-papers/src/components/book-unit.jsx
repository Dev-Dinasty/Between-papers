import React from 'react';
import '../stylesheet/book-unit.css';

function BookUnit(props){
  return(
    <div className="containerBookUnit">
      <div className="bookUnitImg">
        <img src={require(`../img/${props.img}.png`)}/>
      </div>
      <div className="textContainerBookUnit">
        <p className="name">{props.name}</p>
        <p className="Validation">{props.stars}</p>
      </div>
    </div>
  );
}

export default BookUnit;