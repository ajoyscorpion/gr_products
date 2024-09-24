import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../Services/api';


function ProductDetails() {

  const {id} = useParams()
  console.log(useParams());
  console.log(id);

  const [product,setProduct] = useState([])

  useEffect(() => {
    productDetails(id)
  }, [id])

  const productDetails = async (id) => {
    try {
      const response = await getProductDetails(id)
      console.log(response.data.product);
      setProduct(response.data.product)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <div className='card m-5'>
        <div>
          <img src={product.image_url} alt={product.product_name} style={{ width:"100px", height:"100px"}}/>
          <h1>{product.product_name}</h1>
          <p>{product.ingredients_text}</p>
          <p>Nutrition Grade: {product.nutrition_grades}</p>
          {/* Add more nutritional values */}
        </div>
      </div>
    </>
  )
}

export default ProductDetails