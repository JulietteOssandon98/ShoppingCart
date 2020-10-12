import React from 'react';
import './App.css';
import { ProductList } from './components/products/ProductList';



function App() {
  return (
    <div className="principal_container">
      <div className="middle_container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
