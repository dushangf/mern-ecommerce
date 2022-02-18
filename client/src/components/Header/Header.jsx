import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LogButton from './LogButton';

const Header = ({ cart }) => {
   return (
      <div className="flex px-20 justify-between py-6 bg-cyan-900">
         <Link to="/">
            <h1 className="text-2xl text-emerald-300 font-semibold">E-Mart</h1>
         </Link>
         <div className="flex items-center">
            <div className="text-emerald-300 text-2xl mr-10 count-div p-2 hover:scale-125 transtion duration-150">
               <Link to="/cart">
                  <FaShoppingCart />
               </Link>
               <p className="text-sm bg-rose-400 text-black rounded-full font-bold text-center count p-1 h-4 flex items-center">
                  {cart.length}
               </p>
            </div>
            <LogButton />
         </div>
      </div>
   );
};

export default Header;
