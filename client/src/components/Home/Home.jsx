import React from 'react';
import ProductList from './ProductList';

const Home = ({ clientCart, products }) => {
   return (
      <div>
         <ProductList clientCart={clientCart} products={products} />
      </div>
   );
};

export default Home;
