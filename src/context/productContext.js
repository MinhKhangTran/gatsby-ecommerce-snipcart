import React from "react"
import reducer from "./productReducer"

const initState = { isSidebarOpen: false }
export const ProductContext = React.createContext()

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
  const openSidebar = () => {
    dispatch({ type: "OPEN_SIDEBAR" })
  }
  const closeSidebar = () => {
    dispatch({ type: "CLOSE_SIDEBAR" })
  }
  return (
    <ProductContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  return React.useContext(ProductContext)
}
