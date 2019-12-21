import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from '../src/components/navbar';
import AddressPage from './pages/Addresses/AddressPage';
import SearchDetail from './pages/DetailPage';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={AddressPage} />
        <Route path='/search/:id' component={SearchDetail} />
      </BrowserRouter>
    </div>
  );
};

export default App;
