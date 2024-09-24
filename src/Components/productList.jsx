import React from 'react'
import { Link } from 'react-router-dom'

function ProductList({products}) {
  return (
    <div>
        {products.map((product)=>(
            <div key={product.code}>
                <div className='card m-5'>
                    <img src={product.image_url} alt={product.product_name} style={{width:'100px',height:"100px"}}/>
                    <h2>{product.product_name}</h2>
                    <p>Category: {product.categories}</p>
                    <p>Nutrition Grade: {product.nutrition_grades}</p>
                    <Link to={`/productDetails/${product.code}`}>View</Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ProductList