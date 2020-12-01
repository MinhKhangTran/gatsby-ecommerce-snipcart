import React from "react"

import Product from "./Product"
const Products = ({ products }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 breite my-12 gap-8`}>
      {products.map(product => {
        const {
          remoteId,
          name,
          price,
          thumbnail: { url: image },
        } = product
        return (
          <Product
            key={remoteId}
            remoteId={remoteId}
            image={image}
            name={name}
            price={price}
          />
        )
      })}
    </div>
  )
}

export default Products
