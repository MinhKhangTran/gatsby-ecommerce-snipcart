import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Cards />
      <Newsletter />
    </>
  )
}
