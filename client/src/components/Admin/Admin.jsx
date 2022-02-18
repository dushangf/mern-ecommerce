import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useHistory } from 'react-router-dom';
import NewProduct from './NewProduct';
import ModifyProduct from './ModifyProduct';

const Admin = () => {
   const [products, setproducts] = useState([]);
   const [name, setname] = useState('');
   const [price, setprice] = useState('');
   const [image, setimage] = useState('');
   const [stocks, setstocks] = useState('');
   const [response, setresponse] = useState(null);
   const [responseMessage, setresponseMessage] = useState('');

   let history = useHistory();

   useEffect(() => {
      const localData = localStorage.getItem('token');
      if (!localData) {
         history.push('/login');
      }
   });

   useEffect(() => {
      getProducts();
   });

   const getProducts = async () => {
      const res = await fetch(`http://localhost:8000/store`);
      const items = await res.json();
      setproducts(items);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const item = { name, price, image, stocks };
      const token = JSON.parse(localStorage.getItem('token')).token;

      const options = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json', authorization: token },
         body: JSON.stringify(item),
      };
      const response = await fetch(`http://localhost:8000/store`, options);
      const data = await response.json();
      setresponse(data.status);
      setresponseMessage(data.message);
      setname('');
      setprice('');
      setimage('');
      setstocks('');
   };

   return (
      <div>
         {response !== null && (
            <div
               className={`py-2 text-md text-center font-semibold text-white ${
                  response ? 'bg-green-500' : 'bg-red-700'
               }`}
            >
               {responseMessage}
            </div>
         )}
         <div className="flex justify-around mt-16 font-semibold px-40">
            <NewProduct
               name={name}
               setname={setname}
               price={price}
               setprice={setprice}
               image={image}
               setimage={setimage}
               stocks={stocks}
               setstocks={setstocks}
               handleSubmit={handleSubmit}
            />
            <ModifyProduct
               products={products}
               setresponseMessage={setresponseMessage}
               setresponse={setresponse}
            />
         </div>
      </div>
   );
};

export default Admin;
