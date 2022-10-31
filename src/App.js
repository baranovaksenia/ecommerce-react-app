import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  PrivateRoute,
  Error,
} from './pages';

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='about'
          element={<About />}
        />
        <Route
          path='cart'
          element={<Cart />}
        >
          <Route
            path='products'
            element={<Products />}
          />
          <Route
            path='products/:id'
            element={<SingleProduct />}
          />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path='*'
            element={<Error />}
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
