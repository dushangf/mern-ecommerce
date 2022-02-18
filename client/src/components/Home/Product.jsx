import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../App.css';

const Product = ({ product, clientCart }) => {
   return (
      <div className="card flex flex-col hover:scale-110 transition duration-200 bg-cyan-900 py-1 px-3 rounded-lg font-semibold m-2">
         <img
            className="w-40 p-3 m-1 rounded-full"
            src={product.image}
            alt=""
         />
         <div className="rounded-lg px-4 bg-emerald-100">
            <h3 className="text-center my-1">{product.name}</h3>
            <h3 className="text-center my-1">{product.price}$</h3>
         </div>
         <button
            onClick={() => clientCart(product)}
            className="bg-cyan-900 hover:scale-110 font-semibold my-2 py-1 text-black rounded-full transition duration-200 cart-btn hover:bg-emerald-100"
         >
            Add to Cart
            <FaShoppingCart className="cart" />
         </button>
      </div>
   );
};

export default Product;
