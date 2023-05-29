import React from 'react';

import '../stylesheets/add-book-unit.css';

function AddBookUnitForm(){

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
  <div className='addBookUnitForm' >
    <h2 className='formTitle'>Nuevo producto</h2>
    <form action="" onSubmit={handleSubmit} className="inputContainer">
      <label class="textLabel" htmlFor='bookName'>
        <span className='inputSpan'>URL de la portada del libro</span>
        <input 
          type="url" 
          className="textInput" 
          required
        />
      </label>
      <div className="grid2">
        <label class="textLabel" htmlFor='bookName'>
          <span className='inputSpan'>Nombre del libro</span>
          <input 
            type="text" 
            className="textInput" 
            id="bookName" 
            name="bookName" 
            required
          />
        </label>
        <label class="textLabel" htmlFor='writerName'>
          <span className='inputSpan'>Nombre del autor</span>
          <input 
            type="text" 
            className="textInput" 
            id="writerName"
            name="writerName" 
            required
          />
        </label>
      </div>
      <div className='textarea'>
        <span >Descripción del libro</span>
        <textarea name="" id="bookDescription" cols="30" rows="10"></textarea>
      </div>
      <div class="btn-container">
        <button class="btnn" name="btnn">Enviar</button>
      </div>
    </form>
  </div>    
  );
}

export default AddBookUnitForm;