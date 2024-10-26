import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // State for product data

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <center><h5 className='loading'>Loading...</h5></center>;

  return (
    <div className="productDetails">
      <img src={product.image} alt={product.title} className="productImage" />
      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>Category: {product.category}</h3>
        <h3>Price: ${product.price}</h3>
        <div className="rating">
          <span className="ratingValue">{product.rating.rate}</span>
          <span className="ratingCount">({product.rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
