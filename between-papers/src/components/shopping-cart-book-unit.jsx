import React, { useState } from 'react';
import '../stylesheets/shopping-cart-book-unit.css';
import BookUnit from './book-unit';


const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="cart">
      <button className="cart-button" onClick={toggleCart}>
        <div className='svg2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox= "0 0 576 512"
            fill="Black"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="cart-dropdown">
          <h3>Carrito de compras</h3>
          {products.length > 0 ? (
            <ul>
            {products.map((product) => (
              <li key={product.id}>
                <BookUnit
                  id={product.id}
                  img={product.img}
                  alt={product.alt}
                  name={product.name}
                  price={product.price}
                />
              </li>
            ))}
          </ul>
          
          ) : (
            <p>No hay productos en el carrito.</p>
            )}
          <button className="Clear-cart">
            <h3>Vaciar el carrito</h3>
          </button>
          <button className="purchase-details-cart">
            <h3>Ver detalles</h3>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;








