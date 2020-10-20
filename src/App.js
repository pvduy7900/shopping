import React, { useState } from 'react';
import data from './data.json'
import Products from './components/Products';


function App() {

  const [product, setProduct] = useState({
    product: data.product
  })

  return (
    <div className="grid-container">
      <header>
        <a href="/">
          Shopping Cart
        </a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products product={product}/>
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>
        All right is reversed.
      </footer>
    </div>
  );
}

export default App;
