import React, { useState, useEffect } from 'react';
import { FaUserCog, FaUserSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';

const LogButton = () => {
   const [login, setlogin] = useState(false);

   const location = useLocation();
   const history = useHistory();
   useEffect(() => {
      const localData = localStorage.getItem('token');
      if (localData && location.pathname === '/admin') {
         setlogin(true);
      } else if (location.pathname !== '/admin') {
         setlogin(false);
      }
   });

   const logout = () => {
      localStorage.clear();
      history.go(0);
   };

   return (
      <div className="hover:text-black rounded-full font-semibold text-cyan-900 bg-emerald-300 p-2 hover:scale-125 transtion duration-150 cursor-pointer">
         {login === true ? (
            <FaUserSlash onClick={logout} />
         ) : (
            <Link to="/login">
               <FaUserCog />
            </Link>
         )}
      </div>
   );
};

export default LogButton;
