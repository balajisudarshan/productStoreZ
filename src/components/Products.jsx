import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './styles/Products.css'

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)  // Moved here to log the fetched data
      })

    AOS.init({
      duration: 1000, // animation duration in milliseconds
      easing: 'linear',
      once: true, // animation happens only once on scroll
    })
  }, [])
  if(!data) return <center><h1 className='loading'>Loading</h1></center>
  return (
      <div className="cardContainer">
         {data.map(item => (
                <div className='card' key={item.id} data-aos="fade-up">
                  <img src={item.image} alt={item.title} />
                  <h5>{item.title}</h5>
                  <h5>Category: {item.category}</h5>
                  <h5>${item.price}</h5>
                  <a href={`/productDetails/${item.id}`}>View Details</a>
                </div>
         ))}
      </div>
  )
}

export default Products
