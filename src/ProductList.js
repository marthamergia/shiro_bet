import React from 'react'
import Product from './Product'

function ProductList({ Products }) {
  return (
    <div>
      {Product.map((product) => {
        const { id, name, price, detail, image } = product
        return (
          <div key={id}>
            <article>
              <h2>{name}</h2>
              <p>{price}</p>
              <p>{detail}</p>
              <img src={image} alt={detail}></img>
            </article>
          </div>
        )
      })}
    </div>
  )
}
export default ProductList
