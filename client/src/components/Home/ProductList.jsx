import React from 'react';
import Product from './Product';

const ProductList = ({ products, clientCart }) => {
   return (
      <div className="flex flex-wrap justify-center p-10">
         {products.map((product) => (
            <Product
               key={product._id}
               clientCart={clientCart}
               product={product}
            />
         ))}
      </div>
   );
};

export default ProductList;
