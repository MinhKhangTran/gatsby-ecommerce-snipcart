import React from "react"
import { graphql } from "gatsby"
import ProductImage from "../components/ProductImage"
import Stars from "../components/Stars"
import { formatPrice } from "../utils"

// const ProductTemplate = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ProductTemplate = ({ data }) => {
  const {
    graphCmsDrama: {
      name,
      date,
      desc,
      price,
      fsk,
      languages,
      reviews,
      stars,
      thumbnail,
      images,
      remoteId,
    },
  } = data
  console.log(remoteId)

  return (
    <div className="breite">
      <section>
        <ProductImage thumbnail={thumbnail} images={images} />
        <div>
          <header>
            <h1>{name}</h1>
            <h1>{date}</h1>
          </header>
          <p>{desc}</p>
          <p>{formatPrice(price)}</p>
          <h1>FSK: {fsk}</h1>
          <h1>Sprachen: {languages}</h1>
          <h1>Reviews: {reviews}</h1>
          <Stars stars={stars} />
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query GetSingleProduct($name: String) {
    graphCmsDrama(name: { eq: $name }) {
      date
      desc
      fsk
      remoteId
      languages
      name
      price
      reviews
      stars
      thumbnail {
        url
      }
      images {
        url
      }
    }
  }
`
export default ProductTemplate
