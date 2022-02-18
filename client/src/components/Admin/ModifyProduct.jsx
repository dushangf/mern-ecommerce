import React, { useState } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';
import ModifyForm from './ModifyForm';

Modal.setAppElement('#root');
const ModifyProduct = ({ products, setresponseMessage, setresponse }) => {
   const [name, setname] = useState('');
   const [price, setprice] = useState('');
   const [image, setimage] = useState('');
   const [stocks, setstocks] = useState('');
   const [modalStatus, setmodalStatus] = useState(false);
   const [modalId, setmodalId] = useState('');

   const deleteItem = async (product) => {
      const token = JSON.parse(localStorage.getItem('token')).token;

      const options = {
         method: 'DELETE',
         headers: { 'Content-Type': 'application/json', authorization: token },
      };
      const response = await fetch(
         `http://localhost:8000/store/${product._id}`,
         options
      );
      const data = await response.json();
      setresponseMessage(data.message);
      setresponse(data.status);
   };

   const updateItem = async (e) => {
      e.preventDefault();
      const item = { name, price, image, stocks };
      const token = JSON.parse(localStorage.getItem('token')).token;
      const options = {
         method: 'PUT',
         headers: { 'Content-Type': 'application/json', authorization: token },
         body: JSON.stringify(item),
      };
      const response = await fetch(
         `http://localhost:8000/store/${modalId}`,
         options
      );
      const data = await response.json();
      setresponseMessage(data.message);
      setresponse(data.status);
      setmodalStatus(false);
   };

   const setModal = (product) => {
      setmodalStatus(true);
      setmodalId(product._id);
   };

   return (
      <div>
         <div className="bg-black p-4 rounded-xl">
            <div className="overflow-y-scroll h-96 admin-items">
               {products.map((product) => (
                  <div
                     key={product._id}
                     className="flex justify-between bg-white rounded-full p-2 m-2 w-80 pl-5"
                  >
                     <div className="flex justify-between w-48">
                        <div>{product.name}</div>
                        <div>{product.price}$</div>
                     </div>
                     <div className="flex justify-around text-2xl w-20">
                        <FaEdit
                           onClick={() => setModal(product)}
                           className="transition duration-150 cursor-pointer hover:scale-110 rounded-full bg-green-500 p-1"
                        />
                        <Modal
                           className="bg-black text-black h-96 w-96 text-center mx-auto mt-40 rounded-lg"
                           isOpen={modalStatus}
                           onRequestClose={() => setmodalStatus(false)}
                           style={{
                              overlay: { background: 'rgba(0, 0, 0, 0.2)' },
                           }}
                        >
                           <ModifyForm
                              setname={setname}
                              setprice={setprice}
                              setimage={setimage}
                              setstocks={setstocks}
                              updateItem={updateItem}
                           />
                        </Modal>
                        <FaTimes
                           onClick={() => deleteItem(product)}
                           className="transition duration-150 cursor-pointer hover:scale-110 rounded-full bg-red-500 p-1"
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ModifyProduct;
