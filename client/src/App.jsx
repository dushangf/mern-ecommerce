import React, { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
   const [products, setproducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [authenticated, setauthenticated] = useState(false);

   useEffect(() => {
      getProducts();
   }, []);

   useEffect(() => {
      const localData = JSON.parse(localStorage.getItem('token'));
      if (localData) {
         setauthenticated(localData.authenticated);
      } else {
         setauthenticated(false);
      }
   }, [authenticated]);

   const getProducts = async () => {
      const res = await fetch(`http://localhost:8000/store`);
      const items = await res.json();
      setproducts(items);
   };

   const clientCart = (product) => {
      setCart([...cart, product]);
   };

   const emptyCart = () => {
      setCart([]);
   };

   // console.log(products);

   return (
      <Router>
         <div className="bg-emerald-100 min-h-screen">
            <Header cart={cart} />
            <Switch>
               <Route exact path="/">
                  {products && (
                     <Home clientCart={clientCart} products={products} />
                  )}
               </Route>
               <Route path="/cart">
                  <Cart emptyCart={emptyCart} cart={cart} />
               </Route>
               <Route path="/admin">
                  <Admin authenticated={authenticated} products={products} />
               </Route>
               <Route path="/login">
                  <Login
                     setauthenticated={setauthenticated}
                     authenticated={authenticated}
                  />
               </Route>
            </Switch>
         </div>
      </Router>
   );
};

export default App;
