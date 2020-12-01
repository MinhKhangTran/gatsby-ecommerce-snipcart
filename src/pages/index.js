import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const {
    allGraphCmsDrama: { nodes: products },
  } = data
  console.log(products.length)

  return (
    <>
      <Hero />
      <Products products={products} />
      <Cards />
      <Newsletter />
    </>
  )
}
export const query = graphql`
  {
    allGraphCmsDrama(filter: { featured: { eq: true } }) {
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
