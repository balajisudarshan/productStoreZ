import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Products from './components/Products';

import ProductDetails from './components/ProductDetails'; // Import the ProductDetails component

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
      
        {/* Route for product details page with dynamic id */}
        <Route path="/productDetails/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
