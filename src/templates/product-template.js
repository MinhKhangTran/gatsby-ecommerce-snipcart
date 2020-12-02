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
  // console.log(remoteId)

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
        <button
          className="bg-amber-400 text-amber-800 px-3 py-1 rounded my-4 text-xl snipcart-add-item"
          data-item-id={remoteId}
          data-item-price={price / 100}
          data-item-url={`https://kdrama-ecommerce.netlify.app/products/${name}`}
          data-item-description={desc}
          data-item-image={thumbnail.url}
          data-item-name={name}
        >
          In den Warenkorb
        </button>
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
