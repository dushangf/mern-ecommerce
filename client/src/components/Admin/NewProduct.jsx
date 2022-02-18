import React from 'react';

const NewProduct = ({
   price,
   setprice,
   name,
   setname,
   image,
   setimage,
   stocks,
   setstocks,
   handleSubmit,
}) => {
   return (
      <div>
         <div className="bg-black w-80 rounded-lg">
            <form onSubmit={handleSubmit} className="flex flex-col w-80 p-7">
               <input
                  onChange={(e) => {
                     setname(e.target.value);
                  }}
                  value={name}
                  className="p-3 m-2 rounded-lg"
                  type="text"
                  placeholder="Name..."
               />
               <input
                  onChange={(e) => {
                     setprice(e.target.value);
                  }}
                  value={price}
                  className="p-3 m-2 rounded-lg"
                  type="number"
                  placeholder="Price..."
               />
               <input
                  onChange={(e) => {
                     setimage(e.target.value);
                  }}
                  value={image}
                  className="p-3 m-2 rounded-lg"
                  type="text"
                  placeholder="Image URL..."
               />
               <input
                  onChange={(e) => {
                     setstocks(e.target.value);
                  }}
                  value={stocks}
                  className="p-3 m-2 rounded-lg"
                  type="number"
                  placeholder="Stock Count..."
               />
               <button
                  className="bg-emerald-400 p-3 m-2 rounded-lg font-semibold"
                  type="submit"
               >
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default NewProduct;
