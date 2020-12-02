import React from "react"
import Products from "../components/Products"
import { graphql } from "gatsby"

const ProductsPage = ({ data }) => {
  const {
    allGraphCmsDrama: { nodes: products },
  } = data
  return (
    <div>
      <Products products={products} />
    </div>
  )
}
export const query = graphql`
  {
    allGraphCmsDrama {
      nodes {
        remoteId
        name
        price
        thumbnail {
          url
        }
      }
    }
  }
`

export default ProductsPage
