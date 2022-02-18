import React from 'react';

const ModifyForm = ({ setname, setprice, setimage, setstocks, updateItem }) => {
   return (
      <div>
         <form
            onSubmit={updateItem}
            className="py-4 pt-8 flex flex-col w-72 mx-auto"
         >
            <input
               onChange={(e) => setname(e.target.value)}
               className="p-3 m-2 rounded-lg"
               type="text"
               placeholder="Name..."
            />
            <input
               onChange={(e) => setprice(e.target.value)}
               className="p-3 m-2 rounded-lg"
               type="number"
               placeholder="Price..."
            />
            <input
               onChange={(e) => setimage(e.target.value)}
               className="p-3 m-2 rounded-lg"
               type="text"
               placeholder="Image URL..."
            />
            <input
               onChange={(e) => setstocks(e.target.value)}
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
   );
};

export default ModifyForm;
