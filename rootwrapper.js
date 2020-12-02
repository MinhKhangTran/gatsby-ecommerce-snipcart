import React from "react"
import "./src/css/main.css"
import { ProductProvider } from "./src/context/productContext"

export const wrapRootElement = ({ element }) => {
  return <ProductProvider>{element}</ProductProvider>
}
