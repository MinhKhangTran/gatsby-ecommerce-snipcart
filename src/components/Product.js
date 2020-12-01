import React from "react"
import { Link } from "gatsby"
import { formatPrice } from "../utils"
const Product = ({ remoteId, image, name, price }) => {
  return (
    <Link to={`/products/${remoteId}`}>
      <article key={remoteId} className="hover:shadow-xl">
        <div className="w-full" style={{ height: "25vh" }}>
          <img
            className="rounded object-cover h-full w-full"
            src={image}
            alt={name}
          />
        </div>
        <h1>{name}</h1>
        <p>{formatPrice(price)}</p>
      </article>
    </Link>
  )
}

export default Product
