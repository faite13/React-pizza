//Main imports
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

//Components
import { Header } from './index';

//Pages
import { Home, Cart } from '../pages';

//Redux actions
import { setProducts } from '../redux/actions/products';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setProducts(data));
      });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route 
          path="/" 
          exact
          component={Home}
        />
        <Route 
          path="/cart" 
          exact
          component={Cart}
        />
      </div>
    </div>
  );
};

export default App;