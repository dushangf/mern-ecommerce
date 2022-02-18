import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import '../../App.css';

const Cart = ({ cart, emptyCart }) => {
   const cartSum = () => {
      let totalPrice = 0;
      cart.forEach((item) => {
         totalPrice += item.price;
      });
      return totalPrice;
   };

   let totalPrice = cartSum();

   return (
      <div className="py-5">
         <div className="rounded-lg px-5 flex flex-col justify-center items-center w-80 mx-auto bg-black text-black font-semibold mb-50 my-5 box-content py-6">
            <div className="ml-5 max-h-60 overflow-y-scroll order-items w-80">
               {cart.map((item, idx) => (
                  <div className="flex justify-around p-3" key={idx}>
                     <div className="bg-white rounded-full w-60 px-4 flex justify-between">
                        <h3>{item.name}</h3>
                        <h3>{item.price}$</h3>
                     </div>
                     <FaTimes className="text-red-500 mt-1 cursor-pointer" />
                  </div>
               ))}
            </div>
            <div className="flex justify-around w-80 pl-7 pr-4">
               <div className="bg-green-300 rounded-full w-60 px-4 my-3 flex justify-between">
                  <h3>Total</h3>
                  <h3>{totalPrice}$</h3>
               </div>
               <FaTrash
                  onClick={emptyCart}
                  className={`text-red-500 ml-3 mt-4 cursor-pointer ${
                     cart.length === 0 && 'hidden'
                  }`}
               />
            </div>
            <button className="border-4 border-cyan-800 p-5 my-3 bg-black text-emerald-400 rounded-lg w-60 font-semibold hover:scale-105 transition duration-150 hover:text-black hover:bg-emerald-400">
               Proceed to Checkout
            </button>
         </div>
      </div>
   );
};

export default Cart;
