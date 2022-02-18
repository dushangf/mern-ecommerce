import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ setauthenticated, authenticated }) => {
   const [name, setname] = useState('');
   const [password, setpassword] = useState('');

   let history = useHistory();

   useEffect(() => {
      const localData = JSON.parse(localStorage.getItem('token'));

      if (localData) {
         setauthenticated(localData.authenticated);
         authenticated === true && history.push('/admin');
      }
   });

   const submitLogin = async (e) => {
      e.preventDefault();
      const credentials = { name, password };
      const options = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(credentials),
      };
      try {
         const response = await fetch(
            'http://localhost:8000/admin/login',
            options
         );
         const data = await response.json();
         if (data.authenticated === true) {
            localStorage.setItem('token', JSON.stringify(data));
            history.push('/admin');
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="flex justify-around">
         <div className="w-60 mt-40">
            <form onSubmit={submitLogin} className="flex flex-col">
               <input
                  className="rounded-lg p-3 my-2"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setname(e.target.value)}
               />
               <input
                  className="rounded-lg p-3 my-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
               />
               <button
                  className="rounded-lg p-3 my-2 bg-black text-emerald-400 border-emerald-700 border-4"
                  type="submit"
               >
                  Login
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
